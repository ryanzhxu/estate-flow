const express = require('express');
const Worker = require('../models/workersDB');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/workers', async (req, res) => {
  try {
    res.status(StatusCodes.OK).send(await Worker.find({}));
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/workers/:_id', async (req, res) => {
  const id = req.params._id;

  try {
    const foundWorker = await Worker.findById(id);

    if (foundWorker) {
      res.status(StatusCodes.OK).json(foundWorker);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ error: `Worker with id ${id} does not exist` });
    }
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.post('/workers', async (req, res) => {
  const newWorker = new Worker(req.body);

  try {
    await newWorker.save();
    res.status(StatusCodes.CREATED).send(newWorker);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.put('/workers', async (req, res) => {
  try {
    await Worker.findByIdAndUpdate(req.body._id, req.body);
    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.delete('/workers/:_id', async (req, res) => {
  try {
    const worker = await Worker.findByIdAndDelete(req.params._id);

    if (!worker) {
      res.status(StatusCodes.BAD_REQUEST).send('No worker found.');
    }

    res.status(StatusCodes.OK).send();
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
  }
});

router.get('/workers/sort', async function (req, res, next) {
  const tradeType = req.query.Trades;
  const sortOption = req.query.sort;
  try {
    let workersFiltered;
    if (sortOption === 'Ascending') {
      if (tradeType === 'Selections') {
        workersFiltered = await Worker.find({}).sort({ hRate: 1 });
      } else {
        workersFiltered = await Worker.find({ trades: tradeType }).sort({ hRate: 1 });
      }
    } else if (sortOption === 'Descending') {
      if (tradeType === 'Selections') {
        workersFiltered = await Worker.find({}).sort({ hRate: -1 });
      } else {
        workersFiltered = await Worker.find({ trades: tradeType }).sort({ hRate: -1 });
      }
    } else {
      if (tradeType === 'Selections') {
        workersFiltered = await Worker.find({});
      } else {
        workersFiltered = await Worker.find({ trades: tradeType });
      }
    }
    const renderedPosts = [];
    for (let i = 0; i < workersFiltered.length; ++i) {
      const tmp = {
        id: workersFiltered[i]._id,
        name: workersFiltered[i].name,
        imageUrlInput: workersFiltered[i].imageUrlInput,
      };
      renderedPosts.push(tmp);
    }
    return res.send(workersFiltered);
  } catch (error) {
    console.error('Failed to query MongoDB in workerSort', error);
  }
});

module.exports = router;
