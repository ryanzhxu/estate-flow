const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  hRate: Number,
  trades: String,
  pCode: String,
  imageUrlInput: String,
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
