const express = require('express');
const router = express.Router();

const Property = require("../models/property")

router.get('/', async(req, res) => {
  try {
    res.status(200).json(await Property.find());
  } catch (e) {
    console.error(e);
    res.status(500).json({error: "Error accessing properties"})
  }
});

router.get('/:propertyId', async(req, res) => {
  const id = req.params.propertyId;
  try {
    const property = await Property.findById(id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(400).json({error: `Property with id ${id} does not exist`})
    }
  } catch(e) {
    console.error(e);
    res.status(500).json({error: `Error finding property with id ${id}`})
  }
});

router.post('/', async(req, res) => {
  if (!req.body.address) {
    res.status(400).json({message: "Property must have an address"})
  }
  const property = new Property(req.body);
  try {
    res.status(201).json(await property.save());
  } catch(e) {
    console.error(e);
    res.status(500).json({error: "Error saving property"});
  }
});

router.put('/', async(req, res) => {
  const {_id, ...updatedProperty} = req.body;

  try {
    const result = await Property.updateOne({_id}, updatedProperty);
    if (result.modifiedCount === 0) {
      res.status(400).json({error: `Property with id ${_id} does not exist`})
    } else {
      res.status(200).json(result);
    }
  } catch(e) {
    console.error(e);
    res.status(500).json({error: "Error updating property"})
  }
});

router.delete('/:propertyId', async(req, res) => {
  const id = req.params.propertyId;
  try {
    const deletedProperty = await Property.deleteOne({_id: id})
    res.status(200).json(deletedProperty);
  } catch(e) {
    console.error(e);
    res.status(500).json({error: "Error deleting propertyt"});
  }
});

module.exports = router;
