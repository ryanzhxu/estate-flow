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

router.get('/tenants/:_id', async (req, resp) => {
  const id = req.params._id;

  try {
    const foundTenant = await Tenant.findById(id);

    if (foundTenant) {
      resp.status(StatusCodes.OK).json(foundTenant);
    } else {
      resp.status(StatusCodes.NOT_FOUND).json({ error: `Tenant with id ${id} does not exist` });
    }
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.post('/tenants', async (req, res) => {
  const propertyId = req.body.propertyId;

  if (!mongoose.isValidObjectId(propertyId)) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid propertyId format' });
  }

  const foundProperty = await Property.findById(propertyId);
  if (!foundProperty) {
    res.status(StatusCodes.NOT_FOUND).json({ error: `Property with id ${propertyId} does not exist` });
  }

  let newTenantBody = req.body;
  if (newTenantBody.propertyId !== propertyId) {
    newTenantBody.propertyId = propertyId;
  }

  const newTenant = new Tenant(newTenantBody);

  try {
    await newTenant.save();
    res.status(StatusCodes.CREATED).send(newTenant);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/properties/:_id/tenants', async (req, res) => {
  const propertyId = req.params._id;
  
  if (!mongoose.isValidObjectId(propertyId)) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid propertyId format' });
  }

  const foundProperty = await Property.findById(propertyId);
  if (!foundProperty) {
    res.status(StatusCodes.NOT_FOUND).json({ error: `Property with id ${propertyId} does not exist` });
  }

  try {
    const tenants = await Tenant.find({ propertyId: propertyId });
    res.status(StatusCodes.OK).json(tenants);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
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
      res.status(StatusCodes.NO_CONTENT).send('No tenant found.');
    }

    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

module.exports = router;
