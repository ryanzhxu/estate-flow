var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

const tenants = [];

router.get('/', (rewq, res, next) => {
    return res.send(tenants);
})

router.get('./:tenantId', (req, res, next) => {
    const foundTenant = tenants.find((tenant) => tenant.id === req.params.tenantId);

    if (!foundTenant) {
        res.status(404).send("Could not find Tenant");
    }

    return res.send(foundTenant);
}) 

router.post('/', (req, res, next) => {
    const { firstName, lastName, email, lease } = req.body;

    const tenant = {
        id: uuid(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        lease: lease,
        paymentHistory: [],
        propertyId: 0
    }
    tenants.push(tenant);
    return res.send(tenants);
})

router.put('/', (req, res, next) => {
    const { id, firstName, lastName, email, lease, propertyId } = req.body;
    const foundTenant = tenants.find((tenant) => tenant.id === id);

    if (!foundTenant) {
        return res.status(404).send("Could not find Tenant");
    }

    foundTenant.firstName = firstName;
    foundTenant.lastName = lastName;
    foundTenant.email = email;
    foundTenant.lease = lease;
    foundTenant.propertyId = propertyId;

    return res.send(tenants);
})

router.delete('/:tenantId', (req, res, next) => {
    const tenantIndex = tenants.findIndex((tenant) => tenant.id === req.params.tenantId);

    if (tenantIndex === -1) {
        return res.status(404).send("Could not find Tenant");
    }

    const deleteTenant = tenants[tenantIndex];
    tenants.splice(tenantIndex, 1);

    return res.send(deleteTenant);
})

module.exports = router;