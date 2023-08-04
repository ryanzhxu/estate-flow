const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  trades: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  gender: {
    type: String,
    required: false,
  },
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
