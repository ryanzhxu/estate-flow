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
    birthDate: {
      type: Date,
      required: false,
      default: null
    },
    occupation: {
      type: String,
      required: false,
    },
    lease: {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      leaseType: {
        type: String,
        required: true,
      },
      fees: [
        {
          feesType: {
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
        paymentType: {
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
        paidDate: {
          type: Date,
          required: false,
        },
      },
    ],
    profileImageUrl: {
        type: String,
        required: false,
        default: null
    },
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
