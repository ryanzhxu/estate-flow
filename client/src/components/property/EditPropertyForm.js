import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AmenitiesChoices from './AmenitiesChoices';
import React from 'react';
// import Button from '@atlaskit/button';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { getPropertiesAsync, updatePropertyAsync } from '../../redux/properties/thunks';
import PropertyTypes from './propertyTypes';
import './property.css';

const EditPropertyForm = ({ property, handleCloseEditForm }) => {
  const [size, setSize] = useState('');

  const [propertyName, setPropertyName] = useState(property.propertyName ?? '');
  const [propertyType, setPropertyType] = useState(property.propertyType ?? '');

  const [streetAddress, setStreetAddress] = useState(property.address.streetAddress ?? '');
  const [city, setCity] = useState(property.address.city ?? '');
  const [province, setProvince] = useState(property.address.province ?? '');
  const [postalCode, setPostalCode] = useState(property.address.postalCode ?? '');

  const [bedrooms, setBedrooms] = useState(property.bed ?? '');
  const [bathrooms, setBathrooms] = useState(property.bath ?? '');
  const [description, setDescription] = useState(property.description ?? '');
  //   const [amenities, setAmenities] = useState(property.amenities ?? []);

  const dispatch = useDispatch();

  const onClearClickedProp = () => {
    setPropertyName('');
    setPropertyType('');

    setStreetAddress('');
    setCity('');
    setProvince('');
    setPostalCode('');

    setBedrooms('');
    setBathrooms('');
    setDescription('');

    setSize('');
    // setAmenities([]);
  };
  const handleAmenitiesChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    // setAmenities(selectedValues);
  };

  const amenityOptions = Object.entries(AmenitiesChoices).map(([value, label]) => ({
    value,
    label,
  }));

  const handlePropertyTypeChange = (selectedOption) => {
    setPropertyType(selectedOption.value);
  };

  const propertyTypeOptions = Object.entries(PropertyTypes).map(([value, label]) => ({
    value,
    label,
  }));

  const handleEditProperty = () => {
    const editProperty = {
      id: property.id,
      type: propertyType,
      name: propertyName,
      address: {
        streetAddress: streetAddress,
        city: city,
        province: province,
        postalCode: postalCode,
      },
      bed: bedrooms,
      bath: bathrooms,
      description: description,
      rent: property.rent,
      amenities: [],
      photos: property.photos,
      tenants: property.tenants,
    };

    dispatch(updatePropertyAsync(editProperty)).then(() => {
      handleCloseEditForm();
      dispatch(getPropertiesAsync());
    });
  };

  return (
    <div className='form'>
      <form className='add-property-form' onSubmit={handleEditProperty}>
        <h4>Editing property</h4>

        <label>Property Id: {property.id}</label>

        <label htmlFor='streetAddress'>Street Address: </label>
        <input
          type='text'
          id='streetAddress'
          name='streetAddress'
          value={streetAddress}
          required
          onChange={(e) => setStreetAddress(e.target.value)}
        />

        <label htmlFor='propertyType'>Property Type: </label>
        <Select
          id='propertyType'
          name='propertyType'
          options={propertyTypeOptions}
          defaultValue={propertyTypeOptions.find((option) => option.value === propertyType)}
          onChange={handlePropertyTypeChange}
        />

        <label htmlFor='size'>Size: </label>
        <input type='number' id='size' name='size' value={size} required onChange={(e) => setSize(e.target.value)} />

        <label htmlFor='city'>City: </label>
        <input type='text' id='city' name='city' required value={city} onChange={(e) => setCity(e.target.value)} />

        <label htmlFor='province'>Province: </label>
        <input id='province' name='province' required value={province} onChange={(e) => setProvince(e.target.value)} />

        <label htmlFor='country'>Country: </label>
        <input type='text' id='country' name='country' required />

        <label htmlFor='postal'>Postal Code: </label>
        <input
          type='text'
          id='postal'
          name='postal'
          required
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <label htmlFor='propertyName'>Property Name: </label>
        <input
          type='text'
          id='propertyName'
          name='propertyName'
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />

        <label htmlFor='description'>Description: </label>
        <input
          type='text'
          id='description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor='bedrooms'>Number of Bedrooms: </label>
        <input
          type='number'
          id='bedrooms'
          name='bedrooms'
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />

        <label htmlFor='bathrooms'>Number of Bathrooms: </label>
        <input
          type='number'
          id='bathrooms'
          name='bathrooms'
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />

        <label htmlFor='amenities'>Amenities:</label>
        <Select
          id='amenities'
          name='amenities'
          options={amenityOptions}
          isMulti
          value={[]}
          onChange={handleAmenitiesChange}
        />

        <section className='buttons'>
          <Button appearance='subtle' type='submit' onClick={handleEditProperty}>
            Submit changes
          </Button>
          <Button appearance='subtle' onClick={onClearClickedProp}>
            Clear fields
          </Button>
          <Button appearance='subtle' onClick={handleCloseEditForm}>
            Close
          </Button>
        </section>
      </form>
    </div>
  );
};

export default EditPropertyForm;
