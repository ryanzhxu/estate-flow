const express = require('express');
const router = express.Router();

const Tenant = require("../models/tenant")

// const tenants = [];

// idk if i did this right, might have to debug?
// gets tenant that matches tenant ID provided
router.get('/:tenantId', async(req, res, next) => {
    const tenantId = req.params.tenantId;
    try {
    const foundTenant = await Tenant.findById(tenantId);
    res.status(200).json(foundTenant);
    } catch(e) {
        console.error(e);
        res.status(404).send("Could not find Tenant");
    }
}) 

// gets list of all tenants
router.get("/tenants", async(req, res) => {
    try {
        res.status(200).json(await Tenant.find());
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Error accessing tenants"})
    }
})

// gets all tenants that match property ID
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

// add tenant with associated property id
// as of right now, property ID is not an argument when we click add tenant
router.post("/properties/:id/tenant", async(req, res) => {
    const tenant = new Tenant(req.body);
    try {
        res.status(201).json(await tenant.save());
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(500).json({error: "Error saving tenant to property"})
    }
})

// update Tenant
router.put('/', async(req, res, next) => {
    const { id, firstName, lastName, email, lease, propertyId } = req.body;
    try {
    const foundTenant = await Tenant.updateOne({_id: id}, {$set: 
        {firstName: firstName,
        lastName: lastName,
        email: email,
        lease: lease,
        propertyId: propertyId}});

        res.status(200).json(foundTenant);
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(500).json({error: "Error updating tenant"})
    }
    });

// remove tenant
router.delete('/:tenantId', async(req, res, next) => {
    const id = req.params.tenantId;
    try {
        const deleteTenant = await Tenant.deleteOne({_id: id})
        res.status(200).json(deleteTenant);
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Error deleting tenant"});
    }
})

module.exports = router;
