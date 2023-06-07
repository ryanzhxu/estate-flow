import PropertyTypes from './PropertyTypes.js';
const PropertyFormInputs = {
    Required: {
        // Either have users put in the property's data, or make a dropdown list that users can select a list of existing properties
        UnitNumber: 'Unit Number',
        StreetAddress: 'Street Address', // street Number Street name
        // PropertyTypes: {
        //     label: "Property Type",
        //     Options: PropertyTypes.values,
        // },
        Size: "Square footage/square meters",
        City: 'City',
        Province: 'Province',
        Country: 'Country',
        PostalCode: 'Postal Code',
    },
    Optional: {
        PropertyName: "Property Name",
        Description: "Description",
        NumberBedrooms: "Number of Bedrooms",
        NumberBathrooms: "Number of Bathrooms",
        Amenities: "Amenities included with Property",
        // Photos: {
        //     label: "Photos",
        //     type: "file",
        //     },
        ContactInformation: "Contact Information",
    },
};

export default PropertyFormInputs;