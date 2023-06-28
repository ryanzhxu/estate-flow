const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        address: {
            streetAddress: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            province: {
                type: String,
                required: true
            },
            bed: {
                type: Number,
                required: true
            },
            bath: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                default: ""
            },
            amenities: {
                type: [String],
                default: []
            },
            photos: {
                type: [String],
                default: []
            },
            tenants: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tenant"
            }]
        }
    },
    {
        collection: "properties"
    }
)

const property = mongoose.model("Property", propertySchema);

module.exports = property;