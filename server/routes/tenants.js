const express = require('express');
const Tenant = require('../models/tenant');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

// const tenants = [];

// idk if i did this right, might have to debug?
// gets tenant that matches tenant ID provided
router.get('/tenants/:tenantId', async (req, res, next) => {
  const tenantId = req.params.tenantId;
  try {
    const findtenant = await Tenant.findById(tenantId);
    if (findtenant.propertyId) {
      const findTenantWithpropertyId = await Tenant.findById(tenantId).populate('propertyId');
      if (findTenantWithpropertyId) {
        const { address } = findTenantWithpropertyId.propertyId;
        res.status(StatusCodes.OK).json({ ...findTenantWithpropertyId.toObject(), address });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({ error: `Tenant with id ${tenantId} does not exist` });
      }
    } else {
      const customJson = {
        lease: {
          startDate: "",
          endDate: "",
          term: "",
          type: "",
          fees: [
            {
              type: "",
              amount: 0,
              dueDate: "",
              _id: ""
            }
          ]
        },
        _id: tenantId,
        firstName: findtenant.firstName,
        lastName: findtenant.lastName,
        email: findtenant.email,
        phoneNumber: findtenant.phoneNumber,
        paymentHistory: [
          {
            type: "",
            charge: 0,
            paid: 0,
            date: "",
            _id: ""
          }
        ],
        propertyId: null,
        __v: 0,
        address: {
          streetAddress: "",
          city: "",
          province: "",
          postalCode: ""
        }
      };
      res.status(StatusCodes.OK).json(customJson);
    }
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: `Unable to retrieve tenant with id ${tenantId}` });
  }
});
// gets list of all tenants
router.get('/tenants', async (req, res) => {
  try {
    res.status(StatusCodes.OK).json(await Tenant.find());
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error accessing tenants' });
  }
});

// gets all tenants that match property ID
router.get('/properties/:id/tenants', async (req, res) => {
  const propertyId = req.params.id;
  try {
    const tenants = await Tenant.find({ propertyId: propertyId });
    res.status(StatusCodes.OK).json(tenants);
  } catch (e) {
    console.error(e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error accessing tenants' });
  }
});

// add tenant with associated property id
// as of right now, property ID is not an argument when we click add tenant
router.post('/properties/:id/tenant', async (req, res) => {
  const tenant = new Tenant(req.body);
  try {
    res.status(StatusCodes.CREATED).json(await tenant.save());
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error saving tenant to property' });
  }
});

// update Tenant
router.put('/tenants', async (req, res, next) => {
  const { id, firstName, lastName, email, lease, propertyId } = req.body;
  try {
    const foundTenant = await Tenant.updateOne(
      { _id: id },
      { $set: { firstName: firstName, lastName: lastName, email: email, lease: lease, propertyId: propertyId } }
    );

    res.status(StatusCodes.OK).json(foundTenant);
  } catch (e) {
    console.error("What's the problem?", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error updating tenant' });
  }
});

// remove tenant
router.delete('/tenants/:tenantId', async(req, res, next) => {
    const id = req.params.tenantId;
    try {
        const deleteTenant = await Tenant.deleteOne({_id: id})
        const tenants = await Tenant.find()
        res.status(StatusCodes.OK).json(tenants); //
    } catch(e) {
        console.error(e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Error deleting tenant"});
    }
})

module.exports = router;
