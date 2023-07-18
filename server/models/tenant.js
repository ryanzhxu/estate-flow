const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tenantSchema = new mongoose.Schema(
  {
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
    lease: {
      startDate: {
        type: Date,
        required: false,
      },
      endDate: {
        type: Date,
        required: false,
      },
      term: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: false,
      },
      fees: [
        {
          type: {
            type: String,
            required: false,
          },
          amount: {
            type: Number,
            required: false,
          },
          dueDate: {
            type: Date,
            required: false,
          },
        },
      ],
    },
    paymentHistory: [
      {
        type: {
          type: String,
          required: false,
        },
        charge: {
          type: Number,
          required: false,
        },
        paid: {
          type: Number,
          required: false,
        },
        date: {
          type: Date,
          required: false,
        },
      },
    ],
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
  },
  {
    collection: 'tenants',
  }
);

const tenant = mongoose.model('Tenant', tenantSchema);

module.exports = tenant;