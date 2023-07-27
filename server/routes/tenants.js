const express = require('express');
const Tenant = require('../models/tenant');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/tenants', async (req, res) => {
  try {
    res.status(StatusCodes.OK).json(await Tenant.find());
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

router.put('/tenants/:_id', async (req, res) => {
  try {
    await Tenant.findByIdAndUpdate(req.params._id, req.body);
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
