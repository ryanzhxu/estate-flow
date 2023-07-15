const express = require('express');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');
const { response } = require('../app');

const router = express.Router();

router.get('/properties', async (req, resp) => {
  try {
    resp.status(StatusCodes.OK).json(await Property.find());
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/properties/:id', async (req, resp) => {
  const id = req.params.id;

  try {
    const foundProperty = await Property.findById(id);

    if (foundProperty) {
      resp.status(StatusCodes.OK).json(foundProperty);
    } else {
      resp.status(StatusCodes.NOT_FOUND).json({ error: `Property with id ${id} does not exist` });
    }
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.post('/properties', async (req, resp) => {
  const newProperty = new Property(req.body);

  try {
    await newProperty.save();
    resp.status(StatusCodes.CREATED).send(newProperty);
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.put('/properties/:id', async (req, resp) => {
  try {
    await Property.findByIdAndUpdate(req.params.id, req.body);
    resp.status(StatusCodes.OK).send();
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/properties/:id', async (req, resp) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      resp.status(StatusCodes.NO_CONTENT).send('No property found.');
    }

    resp.status(StatusCodes.OK).send();
  } catch (e) {
    resp.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

module.exports = router;
