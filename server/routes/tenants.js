const express = require('express');
const Tenant = require("../models/tenant")
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

// const tenants = [];

// idk if i did this right, might have to debug?
// gets tenant that matches tenant ID provided
router.get('/tenants/:tenantId', async(req, res, next) => {
    const tenantId = req.params.tenantId;
    try {
        const foundTenant = await Tenant.findById(tenantId).populate("propertyId");
        if (foundTenant) {
            const { address } = foundTenant.propertyId;
            res.status(StatusCodes.OK).json({ ...foundTenant.toObject(), address });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({error: `Tenant with id ${tenantId} does not exist`})
        }

    } catch(e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: `Unable to retrieve tenant with id ${tenantId}`});
    }
}) 

// gets list of all tenants
router.get("/tenants", async(req, res) => {
    try {
        res.status(StatusCodes.OK).json(await Tenant.find());
    } catch(e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error accessing tenants"})
    }
})

// gets all tenants that match property ID
router.get("/properties/:id/tenants", async(req, res) => {
    const propertyId = req.params.id;
    try {
        const tenants = await Tenant.find({propertyId: propertyId});
        res.status(StatusCodes.OK).json(tenants);
    } catch(e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error accessing tenants"});
    }
})

// add tenant with associated property id
// as of right now, property ID is not an argument when we click add tenant
router.post("/properties/:id/tenant", async(req, res) => {
    const tenant = new Tenant(req.body);
    try {
        res.status(StatusCodes.CREATED).json(await tenant.save());
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error saving tenant to property"})
    }
})

// update Tenant
router.put('/tenants', async(req, res, next) => {
    const { id, firstName, lastName, email, lease, propertyId } = req.body;
    try {
    const foundTenant = await Tenant.updateOne({_id: id}, {$set: 
        {firstName: firstName,
        lastName: lastName,
        email: email,
        lease: lease,
        propertyId: propertyId}});

        res.status(StatusCodes.OK).json(foundTenant);
    } catch(e) {
        console.error("What's the problem?", e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error updating tenant"})
    }
    });

// remove tenant
router.delete('/tenants/:tenantId', async(req, res, next) => {
    const id = req.params.tenantId;
    try {
        const deleteTenant = await Tenant.deleteOne({_id: id})
        res.status(StatusCodes.OK).json(deleteTenant);
    } catch(e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error deleting tenant"});
    }
})

module.exports = router;
