const express = require('express');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(StatusCodes.OK).json(await Property.find());
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error accessing properties' });
  }
});

router.get('/:propertyId', async (req, res) => {
  const id = req.params.propertyId;
  try {
    const property = await Property.findById(id);
    if (property) {
      res.status(StatusCodes.OK).json(property);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ error: `Property with id ${id} does not exist` });
    }
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: `Error finding property with id ${id}` });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.address) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: 'Property must have an address' });
  }
  const property = new Property(req.body);
  try {
    res.status(StatusCodes.CREATED).json(await property.save());
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error saving property' });
  }
});

router.put('/', async (req, res) => {
  const { _id, ...updatedProperty } = req.body;

  try {
    const result = await Property.updateOne({ _id }, updatedProperty);
    if (result.modifiedCount === 0) {
      res.status(StatusCodes.NOT_FOUND).json({ error: `Property with id ${_id} does not exist` });
    } else {
      res.status(StatusCodes.OK).json(result);
    }
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error updating property' });
  }
});

router.delete('/:propertyId', async (req, res) => {
  const id = req.params.propertyId;
  try {
    const deletedProperty = await Property.deleteOne({ _id: id });
    res.status(StatusCodes.OK).json(deletedProperty);
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error deleting propertyt' });
  }
});

module.exports = router;
