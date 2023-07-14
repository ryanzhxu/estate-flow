const mongoose = require('mongoose');

// create schema
const workerSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    hRate: Number,
    trades: String,
    pCode: String,
    imageURL: String
});

// create model
const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;