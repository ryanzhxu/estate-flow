const express = require('express');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/properties', async (req, res) => {
  try {
    res.status(StatusCodes.OK).json(await Property.find());
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/properties/dashboard', async (req, res) => {
  try {
    const results = await Property.find(
        {address: { $ne: null, $exists: true }},
        {address: 1}
    )
    res.status(StatusCodes.OK).json(results);
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/properties/:_id', async (req, res) => {
  const id = req.params._id;

  try {
    const foundProperty = await Property.findById(id);

    if (foundProperty) {
      res.status(StatusCodes.OK).json(foundProperty);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ error: `Property with id ${id} does not exist` });
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.post('/properties', async (req, res) => {
  const newProperty = new Property(req.body);

  try {
    await newProperty.save();
    res.status(StatusCodes.CREATED).send(newProperty);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.put('/properties', async (req, res) => {
  try {
    await Property.findByIdAndUpdate(req.body._id, req.body);
    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/properties/:_id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params._id);

    if (!property) {
      res.status(StatusCodes.BAD_REQUEST).send('No property found.');
    }

    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/properties', async (req, res) => {
  try {
    await Property.deleteMany({});
    res.status(StatusCodes.OK).json({ message: 'All properties deleted successfully.' });
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message });
  }
});

module.exports = router;
