const express = require('express');
const { v4: uuid } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const Worker = require('../models/workersDB');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const workers = await Worker.find({});
    return res.send(workers);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error finding workers' });
  }
});

router.post('/', async function (req, res, next) {
  try {
    if (!req.body.name) {
      return res.status(StatusCodes.BAD_REQUEST).send({ message: 'User must have a name!' });
    }
    console.log(req.body.imageUrlInput)
    const worker = new Worker({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      hRate: req.body.hRate,
      trades: req.body.trades,
      pCode: req.body.pCode,
      imageUrlInput: req.body.imageUrlInput,
    });
    await worker.save();
    const workers = await Worker.find({});
    return res.send(workers);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error adding worker' });
  }
});

router.delete('/', async function (req, res, next) {
  try {
    const workerId = req.body._id;
    await Worker.deleteOne({ _id: workerId });
    const workers = await Worker.find({});
    return res.send(workers);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error deleting worker' });
  }
});

router.put('/:userId', async function (req, res, next) {
  try {
    const foundWorker = await Worker.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          hRate: req.body.hRate,
          trades: req.body.trades,
          pCode: req.body.pCode,
          imageUrlInput: req.body.imageUrlInput,
        },
      }
    );
    const worker = await Worker.findOne({ _id: req.params.userId });
    return res.status(StatusCodes.OK).send(worker);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error updating worker' });
  }
});

router.get('/sort', async function (req, res, next) {

  const tradeType = req.query.Trades;
  const sortOption = req.query.sort;
  try {
    let workersFiltered;
    if (sortOption === "Ascending") {
      if(tradeType === "Selections"){
        workersFiltered = await Worker.find({}).sort({ hRate: 1 });
      }else{
        workersFiltered = await Worker.find({ trades: tradeType }).sort({ hRate: 1 });
      }
    } else if (sortOption === "Descending") {
      if(tradeType === "Selections"){
        workersFiltered = await Worker.find({}).sort({ hRate: -1 });
      }else{
        workersFiltered = await Worker.find({ trades: tradeType }).sort({ hRate: -1 });
      }
    }else{
      if(tradeType === "Selections"){
        workersFiltered = await Worker.find({});
      }else{
        workersFiltered = await Worker.find({trades: tradeType});
      }
    }
    const renderedPosts = [];
    for(let i = 0; i < workersFiltered.length; ++i){
      const tmp = {id: workersFiltered[i]._id,
        name: workersFiltered[i].name,
        imageUrlInput: workersFiltered[i].imageUrlInput
      };
      renderedPosts.push(tmp)
    }
    return res.send(workersFiltered);
  } catch (error) {
    console.error('Failed to query MongoDB in workerSort', error);
  }
});


router.get('/:workerId', async function (req, res, next) {
  try {
    const foundWorker = await Worker.findOne({ _id: req.params.workerId });
    if (!foundWorker) return res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found 404' });
    return res.send(foundWorker);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error finding the worker' });
  }
});

module.exports = router;
