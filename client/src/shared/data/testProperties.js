const testProperties = [
  {
    type: 'Townhouse',
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
    type: 'House',
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
    type: 'Apartment',
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
];

export default testProperties;
