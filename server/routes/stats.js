const express = require('express');
const Tenant = require('../models/tenant');
const { StatusCodes } = require('http-status-codes');
const mongoose = require("mongoose");

const router = express.Router();

router.get("/profit", async(req, res) => {
    const propertyIds = req.body;

    try {
        const results = await Tenant.aggregate([
            {
                $match: {
                    propertyId: {
                        $in: propertyIds.map(propertyId => new mongoose.Types.ObjectId(propertyId)),
                    },
                },
            },
            {
                $unwind: "$lease.fees",
            },
            {
                $match: {
                    "lease.fees.feesType": "Rent",
                },
            },
            {
                $group: {
                    _id: null,
                    totalRent: { $sum: "$lease.fees.amount" },
                },
            }
        ]);
        res.status(StatusCodes.OK).json({
            totalRent: results.length > 0 ? results[0].totalRent : 0
        });
    } catch (e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: e.message})
    }
})

// router.get('/properties/profit', async (req, res) => {
//     try {
//         const results = await Property.find(
//             {
//                 address: { $ne: null, $exists: true },
//                 rent: { $ne: null, $exists: true }
//             },
//             {address: 1}
//         )
//
//         results.map((property))
//
//         res.status(StatusCodes.OK).json(results);
//     } catch (e) {
//         console.error(e);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
//     }
// });

module.exports = router;