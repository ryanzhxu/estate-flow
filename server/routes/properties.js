const express = require('express');
const Property = require('../models/property');
const { StatusCodes } = require('http-status-codes');
const {uploadFile, deleteFiles, isStoredInCloud} = require("../aws/s3");
const {handleMulterError, upload} = require("../aws/multer");

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

router.post('/properties', upload.array("photos", 5), handleMulterError,  async (req, res) => {
  const property = new Property(req.body);

  try {
    if (property.validateSync()) {
      return res.status(StatusCodes.BAD_REQUEST).json(new Error("Property does match schema"));
    }
    if (req.files && req.files.length > 0) {
      const results = await uploadFile(req.files, "demo");
      property.photos = results.map((file) => file.Location);
    }
    await property.save();
    res.status(StatusCodes.CREATED).send(property);
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.put('/properties', upload.array("photos"), handleMulterError, async(req, res) => {
  try {
    const updatedProperty = req.body;
    if (req.files && req.files.length > 0) {
      const results = await uploadFile(req.files, "properties");
      updatedProperty.photos = results.map((file) => file.Location);
    } else if (!updatedProperty.photos) {
      updatedProperty.photos = [];
    }
    const oldProperty = await Property.findByIdAndUpdate(req.body._id, req.body);
    if (oldProperty.photos.length > 0
        && oldProperty.photos[0] !== (updatedProperty.photos.length > 0 ? updatedProperty.photos[0] : null)) {
      await deleteFiles(oldProperty.photos.filter((photo) => isStoredInCloud(photo)));
    }
    res.status(StatusCodes.OK).send();
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/properties/:_id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params._id);

    if (!property) {
      return res.status(StatusCodes.BAD_REQUEST).send('No property found.');
    }

    if (property.photos.length > 0) {
      await deleteFiles(property.photos.filter((photo) => isStoredInCloud(photo)));
    }
    return res.status(StatusCodes.OK).send();
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

module.exports = router;
