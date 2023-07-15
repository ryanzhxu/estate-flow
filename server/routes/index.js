const express = require('express');
const router = express.Router();

const property = require('../models/property'); // TO BE REMOVED

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Express' });
});

/*
  EXAMPLE: TO BE REMOVED
 */
router.get('/demo', async function (req, res, next) {
  try {
    const properties = await property.find();
    res.json(properties);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

module.exports = router;
