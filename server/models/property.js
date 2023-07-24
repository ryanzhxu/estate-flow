const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
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
    bed: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    rent: {
      type: Number,
      default: '',
    },
    amenities: {
      type: [String],
      default: [],
    },
    photos: {
      type: [String],
      default: [],
    },
  },
  {
    collection: 'properties',
  }
);

const property = mongoose.model('Property', propertySchema);

module.exports = property;
