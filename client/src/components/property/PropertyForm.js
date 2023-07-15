import React from 'react';
import PropertyTypes from './propertyTypes';
import './property.css';
import Amenities from '../../shared/constants/property/Amenities';
import { useDispatch } from 'react-redux';
import { addPropertyAsync, getPropertiesAsync, updatePropertyAsync } from '../../redux/properties/thunks';
import { Provinces } from '../../shared/constants/property/Provinces';
import {
  clearNestedObjectValues,
  getSelectedIndex,
  getSelectOptions,
  saveValueToObject,
} from '../../shared/services/Helpers';
import InputField from '../../shared/components/InputField';

export default function PropertyForm({ handleCloseForm, editProperty }) {
  const property = {
    type: editProperty?.type ?? '',
    name: editProperty?.name ?? '',
    address: editProperty?.address
      ? {
          streetAddress: editProperty.address.streetAddress ?? '',
          city: editProperty.address.city ?? '',
          province: editProperty.address.province ?? '',
          postalCode: editProperty.address.postalCode ?? '',
        }
      : {
          streetAddress: '',
          city: '',
          province: '',
          postalCode: '',
        },
    bed: editProperty?.bed ?? '',
    bath: editProperty?.bath ?? '',
    description: editProperty?.description ?? '',
    rent: editProperty?.rent ?? '',
    amenities: editProperty?.amenities ?? [],
    photos: editProperty?.photos ?? [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg',
    ],
  };

  const requiredFields = ['type', 'streetAddress', 'city', 'province', 'postalCode', 'bed', 'bath'];
  const inputFields = Object.keys(property);
  const addressFields = Object.keys(property.address);

  const dispatch = useDispatch();

  const handleAddProperty = () => {
    dispatch(addPropertyAsync(property)).then(() => {
      clearNestedObjectValues(property);
      handleCloseForm();
      dispatch(getPropertiesAsync());
    });
  };

  const handleEditProperty = () => {
    if (editProperty && editProperty._id) {
      property._id = editProperty._id;
    }

    dispatch(updatePropertyAsync(property)).then(() => {
      clearNestedObjectValues(property);
      handleCloseForm();
      dispatch(getPropertiesAsync());
    });
  };

  console.log('property[amenities]: ', property.amenities);

  return (
    <div className='form'>
      <form className='add-property-form'>
        <h4>Add property</h4>
        {inputFields.map((field) => {
          if (field === 'address') {
            return (
              <div className='address-fields' key={field}>
                {addressFields.map((addressField) => (
                  <div key={addressField}>
                    {addressField === 'province' ? (
                      <InputField
                        field={addressField}
                        options={getSelectOptions(Provinces)}
                        defaultValue={getSelectedIndex(Provinces, property.address.province)}
                        onChange={(selectedOption) => {
                          property.address[addressField] = selectedOption.value;
                        }}
                        isRequired={requiredFields.indexOf(addressField) > -1}
                        isSelect
                      />
                    ) : (
                      <InputField
                        field={addressField === 'streetAddress' ? 'Street address' : addressField}
                        defaultValue={property.address[addressField]}
                        isRequired={requiredFields.indexOf(addressField) > -1}
                        onChange={(e) => saveValueToObject(property, addressField, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={field}>
                {field === 'type' || field === 'amenities' ? (
                  <InputField
                    field={field}
                    options={getSelectOptions(field === 'type' ? PropertyTypes : Amenities)}
                    defaultValue={
                      field === 'type' ? getSelectedIndex(PropertyTypes, property.type) : property[field] ?? ''
                    }
                    isRequired={requiredFields.indexOf(field) > -1}
                    isSelect
                    isMulti={field === 'amenities'}
                    onChange={(selectedOptions) => {
                      if (!Array.isArray(selectedOptions)) {
                        const selectedValue = selectedOptions ? selectedOptions.value : '';
                        property.type = selectedValue;
                      } else {
                        property.amenities = selectedOptions.map((option) => option.value);
                      }
                    }}
                  />
                ) : (
                  <InputField
                    field={field}
                    defaultValue={field !== 'photos' ? property[field] : ''}
                    isNumeric={field === 'bed' || field === 'bath' || field === 'rent'}
                    isRequired={requiredFields.indexOf(field) > -1}
                    onChange={(e) => saveValueToObject(property, field, e.target.value)}
                  />
                )}
              </div>
            );
          }
        })}

        <section className='buttons'>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={editProperty ? handleEditProperty : handleAddProperty}>
            Submit
          </button>
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={() => {
              clearNestedObjectValues(property);
            }}>
            Clear
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={handleCloseForm}>
            Close
          </button>
        </section>
      </form>
    </div>
  );
}