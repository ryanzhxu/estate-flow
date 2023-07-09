const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const Property = require("../models/property")

// TO BE REMOVED:
const PropertyTypes = {
  Apartment: 'Apartment',
  Townhouse: 'Townhouse',
  Duplex: 'Duplex',
  Detached: 'Detached',
  Office: 'Office',
  Retail: 'Retail',
  Industrial: 'Industrial',
};

const properties = [
  {
    id: uuid(),
    type: PropertyTypes.Detached,
    name: 'ICCS',
    address: {
      streetAddress: '1234 Main Mall',
      city: 'Vancouver',
      province: 'BC',
      postalCode: 'V6T 1Z4',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    ],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Detached,
    name: 'ICCS',
    address: {
      streetAddress: '3456 University Drive',
      city: 'Burnaby',
      province: 'BC',
      postalCode: 'V5H 0J8',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    ],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Detached,
    name: 'ICCS',
    address: {
      streetAddress: '5678 No.3 Rd',
      city: 'Richmond',
      province: 'BC',
      postalCode: 'V7C 2N4',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    ],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Townhouse,
    name: 'ICCS',
    address: {
      streetAddress: '19-7700 Abercrombie Dr.',
      city: 'Richmond',
      province: 'BC',
      postalCode: 'V6Y 3X8',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: ['https://cache-w12.housesigma.com/file/pix-rebgv/262723843/bf7ba_1.jpg?36285a70'],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Apartment,
    name: 'ICCS',
    address: {
      streetAddress: '2105-2378 Alpha Ave.',
      city: 'Burnaby',
      province: 'BC',
      postalCode: 'V5H 1C8',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: ['https://cache-w13.housesigma.com/file/pix-rebgv/262810431/b418d_1.jpg?fd6e3cc8'],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Apartment,
    name: 'ICCS',
    address: {
      streetAddress: 'PH7-418 E Broadway St.',
      city: 'Vancouver',
      province: 'BC',
      postalCode: 'V5T 1X2',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: ['https://cache-w12.housesigma.com/file/pix-rebgv/262808298/c6d7f_16.jpg?5fa1207b'],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
  {
    id: uuid(),
    type: PropertyTypes.Apartment,
    name: 'ICCS',
    address: {
      streetAddress: '2401-277 Thurlow St.',
      city: 'Vancouver',
      province: 'BC',
      postalCode: 'V6C 0C1',
    },
    bed: 2,
    bath: 2,
    description: 'abcdefg',
    rent: 1000,
    amenities: ['Pool', 'Washing Machine', 'Dryer'],
    photos: ['https://cache-w10.housesigma.com/file/pix-rebgv/262781211/be877_3.jpg?c3e5bf42'],
    tenants: [
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'someone@example.com',
        phoneNumber: '111-222-3333',
      },
    ],
  },
];

router.get('/', async(req, res, next) => {
  try {
    res.status(200).json(await Property.find());
  } catch (e) {
    console.error(e);
    res.status(500).json({error: "Error accessing properties"})
  }
});

router.get('/:propertyId', async(req, res, next) => {
  const id = req.params.propertyId;
  try {
    const property = await Property.findById(id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(400).json({error: `Property with id ${id} does not exist`})
    }
  } catch(e) {
    console.error(e);
    res.status(500).json({error: `Error finding property with id ${id}`})
  }
});

router.post('/', async(req, res, next) => {
  if (!req.body.address) {
    res.status(400).json({message: "Property must have an address"})
  }
  const property = new Property(req.body);
  try {
    res.status(201).json(await property.save());
  } catch(e) {
    console.error(e);
    res.status(500).json({error: "Error saving property"});
  }
});

router.put('/', (req, res, next) => {
  const { id, type, name, address, bed, bath, description, rent, amenities, photos, tenants } = req.body;

  const foundproperty = properties.find((property) => property.id === id);

  if (!foundproperty) {
    return res.status(404).send('Could not find property!');
  }

  foundproperty.type = type;
  foundproperty.name = name;
  foundproperty.address = address;
  foundproperty.bed = bed;
  foundproperty.bath = bath;
  foundproperty.description = description;
  foundproperty.rent = rent;
  foundproperty.amenities = amenities;
  foundproperty.photos = photos;
  foundproperty.tenants = tenants;

  return res.send(properties);
});

router.delete('/:propertyId', async(req, res, next) => {
  const id = req.params.propertyId;
  try {
    const deletedProperty = await Property.deleteOne({_id: id})
    res.status(200).json(deletedProperty);
  } catch(e) {
    console.error(e);
    res.status(500).json({error: "Error deleting propertyt"});
  }
});

module.exports = router;
