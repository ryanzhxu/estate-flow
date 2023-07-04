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
        const tenants = await Tenant.find({propertyId: propertyId});
        res.status(200).json(tenants);
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Error accessing tenants"});
    }
})

router.post("/properties/:id/tenant", async(req, res) => {
    const tenant = new Tenant(req.body);
    try {
        res.status(201).json(await tenant.save());
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(500).json({error: "Error saving tenant to property"})
    }
})

module.exports = router;