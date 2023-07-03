const express = require('express');
const router = express.Router();

const Tenant = require("../models/tenant")

router.get("/tenants", async(req, res) => {
    try {
        res.status(200).json(await Tenant.find());
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Error accessing tenants"})
    }
})

router.get("/properties/:id/tenants", async(req, res) => {
    const propertyId = req.params.id;
    try {
        res.status(200).json(await Tenant.find({propertyId: propertyId}));
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Error accessing tenants"});
    }
})

module.exports = router;