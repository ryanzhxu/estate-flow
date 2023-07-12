const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const tenantSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        lease: {
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date,
                required: true
            },
            term: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            fees: [{
                type: {
                    type: String,
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                },
                dueDate: {
                    type: Date,
                    required: true
                }
            }]
        },
        paymentHistory: [{
            type: {
                type: String,
                required: true
            },
            charge: {
                type: Number,
                required: true
            },
            paid: {
                type: Number,
                required: true
            },
            date: {
                type: Date,
                required: true
            }
        }],
        propertyId: {
            type: Schema.Types.ObjectId,
            ref: "Property",
            required: true
        }
    },
    {
        collection: "tenants"
    }
)

const tenant = mongoose.model("Tenant", tenantSchema);

module.exports = tenant;