const LeaseFormInputs = {
  Required: {
    // // Either have users put in the tenant's data, or make a dropdown list that users can select a list of existing customers
    TenantFirstName: "Tenant's First Name",
    TenantLastName: "Tenants's Last Name",

    // Either have users put in the property's data, or make a dropdown list that users can select a list of existing properties
    UnitNumber: 'Unit Number',
    StreetAddress: 'Street Address', // street Number Street name
    City: 'City',
    Province: 'Province',
    Country: 'Country',
    PostalCode: 'Postal Code',
  },
  Optional: {
    OptionalField: 'This is a optional field',
  },
};

export default LeaseFormInputs;
