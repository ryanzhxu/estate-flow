const express = require('express');
const { v4: uuid } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const Worker = require('../models/workersDB');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const workers = await Worker.find({});
    return res.send(workers);
});
router.post('/', async function (req, res, next) {
    if (!req.body.name) {return res.status(StatusCodes.BAD_REQUEST).send({ message: 'User must have a name!' })}
    const worker = new Worker({ id: uuid(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        hRate: req.body.hRate,
        trades: req.body.trades,
        pCode: req.body.pCode,
        imageURL: req.body.imageURL
    });
    await worker.save();
    const workers = await Worker.find({})
    return res.send(workers);
});
router.delete('/', async function (req, res, next) {
    const workerId = req.body.id;
    await Worker.deleteOne({id:workerId})
    const workers = await Worker.find({});
    return res.send(workers);
});
router.put('/:userId', async function(req, res, next){
    try {
    const foundWorker = await Worker.updateOne({ id: req.params.userId}, {$set: 
        {
            name: req.body.name,
            email:req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            hRate: req.body.hRate,
            trades: req.body.trades,
            pCode: req.body.pCode,
            imageURL: req.body.imageURL}});
            console.log("ans",foundWorker);

        const worker = await Worker.findOne({ id: req.params.userId})
        return  res.status(StatusCodes.OK).send(worker);
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error updating worker"})
    }
});
router.get('/:workerId', async function (req, res, next)  {
    const foundWorker = await Worker.findOne({ id: req.params.workerId });
    if (!foundWorker) return res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found 46 404' });
    return res.send(foundWorker);
});



module.exports = router;