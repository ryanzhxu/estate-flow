var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

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

router.get('/', (req, res, next) => {
  return res.send(properties);
});

router.get('/:propertyId', (req, res, next) => {
  const foundproperty = properties.find((property) => property.id === req.params.propertyId);

  if (!foundproperty) {
    res.status(404).send('Could not find property!');
  }

  return res.send(foundproperty);
});

router.post('/', (req, res, next) => {
  const { type, name, address, bed, bath, description, rent, amenities, photos, tenants } = req.body;

  if (!address) {
    return res.status(400).send({ message: 'property must have an address!' });
  }

  const property = {
    id: uuid(),
    type: type,
    name: name,
    address: address,
    bed: bed,
    bath: bath,
    description: description,
    rent: rent,
    amenities: amenities,
    photos: photos,
    tenants: tenants,
  };
  properties.push(property);
  return res.send(properties);
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

router.delete('/:propertyId', (req, res, next) => {
  const propertyIndex = properties.findIndex((property) => property.id === req.params.propertyId);

  if (propertyIndex === -1) {
    return res.status(404).send('Could not find property!');
  }

  const deleteproperty = properties[propertyIndex];
  properties.splice(propertyIndex, 1);

  return res.send(deleteproperty);
});

module.exports = router;
