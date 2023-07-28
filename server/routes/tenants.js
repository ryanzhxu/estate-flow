const express = require('express');
const Tenant = require('../models/tenant');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/tenants', async (req, res) => {
  try {
    const tenants = await Tenant.aggregate([
      {
        $lookup: {
          from: 'properties',
          localField: 'propertyId',
          foreignField: '_id',
          as: 'property',
        },
      },
      {
        $unwind: '$property',
      },
      {
        $project: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          phoneNumber: 1,
          lease: 1,
          paymentHistory: 1,
          address: '$property.address',
          propertyId: 1,
        },
      },
    ]);

    res.status(StatusCodes.OK).json(tenants);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/tenants/:tenantId', async (req, res, next) => {
  const tenantId = req.params.tenantId;
  try {
    const foundTenant = await Tenant.findById(tenantId).populate('propertyId', 'address');
    if (foundTenant) {
      const { address, _id } = foundTenant.propertyId;
      res.status(StatusCodes.OK).json({ ...foundTenant.toObject(), address: address, propertyId: _id });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ error: `Tenant with id ${tenantId} does not exist` });
    }
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: `Unable to retrieve tenant with id ${tenantId}` });
  }
});

router.get('/tenants/dues/:year/:month', async (req, res) => {
  const year = parseInt(req.params.year);
  const month = parseInt(req.params.month) - 1;
  const startDate = new Date(year, month, 0);
  const endDate = new Date(year, month + 1, 0);

  try {
    const duesDates = await Tenant.aggregate([
      {
        $match: {
          'lease.fees.dueDate': { $gte: startDate, $lte: endDate },
        },
      },
      {
        $unwind: '$lease.fees',
      },
      {
        $match: {
          'lease.fees.dueDate': { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$lease.fees.dueDate',
        },
      },
      {
        $project: {
          _id: 0,
          dueDate: '$_id',
        },
      },
    ]);

    const duesDatesArray = duesDates.map((item) => item.dueDate);
    res.status(StatusCodes.OK).send(duesDatesArray);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Unable to fetch dues dates.' });
  }
});

router.get('/tenants/dues/:date', async (req, res) => {
  const date = new Date(req.params.date);

  try {
    const tenantsWithDues = await Tenant.aggregate([
      {
        $match: {
          'lease.fees.dueDate': date,
        },
      },
      {
        $lookup: {
          from: 'properties',
          localField: 'propertyId',
          foreignField: '_id',
          as: 'property',
        },
      },
      {
        $project: {
          _id: 1,
          fullName: { $concat: ['$firstName', ' ', '$lastName'] },
          address: { $arrayElemAt: ['$property.address', 0] },
          fees: {
            $filter: {
              input: '$lease.fees',
              as: 'fee',
              cond: { $eq: ['$$fee.dueDate', date] },
            },
          },
        },
      },
    ]);

    res.status(StatusCodes.OK).send(tenantsWithDues);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Unable to fetch tenants with dues.' });
  }
});

router.post('/tenants', async (req, res) => {
  const propertyId = req.body.propertyId;

  if (!mongoose.isValidObjectId(propertyId)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid propertyId format' });
  }

  try {
    const foundProperty = await Property.findById(propertyId);
    if (!foundProperty) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: `Property with id ${propertyId} does not exist` });
    }

    let newTenantBody = req.body;
    if (newTenantBody.propertyId !== propertyId) {
      newTenantBody.propertyId = propertyId;
    }

    const newTenant = new Tenant(newTenantBody);
    await newTenant.save();
    return res.status(StatusCodes.CREATED).send(newTenant);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/properties/:_id/tenants', async (req, res) => {
  const propertyId = req.params._id;

  if (!mongoose.isValidObjectId(propertyId)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid propertyId format' });
  }

  try {
    const foundProperty = await Property.findById(propertyId);
    if (!foundProperty) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: `Property with id ${propertyId} does not exist` });
    }
    const tenants = await Tenant.find({ propertyId: propertyId });
    return res.status(StatusCodes.OK).json(tenants);
  } catch(e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.put('/tenants', async (req, res) => {
  try {
    await Tenant.findByIdAndUpdate(req.body._id, req.body);
    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/tenants/:_id', async (req, res) => {
  try {
    const tenant = await Tenant.findByIdAndDelete(req.params._id);

    if (!tenant) {
      res.status(StatusCodes.BAD_REQUEST).send('No tenant found.');
    }

    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

module.exports = router;
