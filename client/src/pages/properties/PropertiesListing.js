import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAsync, getPropertiesAsync } from '../../redux/properties/thunks';
import '../../shared/styles/listing.css';

import PropertyCard from '../../components/property/PropertyCard';
import PropertySearch from '../../components/property/PropertySearch';
import InputFormModal from '../../shared/components/InputFormModal';

import { Tables } from '../../shared/constants/Tables';
import { RequiredFields } from '../../shared/constants/property/RequiredFields';
import {convertJsonToFormData, getStandardizedProperty} from '../../shared/services/Helpers';
import HomeButton from '../../shared/components/HomeButton';

const PropertiesListing = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [photo, setPhoto] = useState(null);

  const initialState = {
    type: '',
    name: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    bed: '',
    bath: '',
    description: '',
    amenities: '',
    photos: [],
  }
  const [property, setProperty] = useState(initialState);

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  useEffect(() => {
    setPropertiesArray(properties);
    setFilteredProperties(properties);
  }, [properties]);

  const handleAddProperty = () => {
    const formData = new FormData();
    if (photo) {
      formData.append("photos", photo);
    }
    delete property.photos;
    convertJsonToFormData(getStandardizedProperty(property), formData);

    dispatch(addPropertyAsync(formData)).then(() => {
      setProperty(initialState);
      setIsAddModalOpen(false);
      dispatch(getPropertiesAsync());
    });
  };

  const handleFilterProperties = (selectedTypes) => {
    if (selectedTypes.length === 0) {
      setFilteredProperties(propertiesArray);
    } else {
      const filteredProperties = propertiesArray.filter((property) => selectedTypes.includes(property.type));
      setFilteredProperties(filteredProperties);
    }
  };

  const handleResetProperties = () => {
    setFilteredProperties(propertiesArray);
  };

  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-left'>
          <div className='listing-header'>
            <h2>Filter</h2>
          </div>
          <PropertySearch onFilterProperties={handleFilterProperties} onResetProperties={handleResetProperties} />
        </div>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Properties</h2>
            <br></br>
            <div className='btn btn-outline-primary' onClick={() => setIsAddModalOpen(true)}>
              Add property
            </div>
            <HomeButton />
          </div>
          <div className='listing-cards'>
            {filteredProperties.map((property) => (
              <PropertyCard key={`property-${property._id}-card`} property={property} />
            ))}
          </div>
        </div>
      </div>
      {isAddModalOpen && (
        <InputFormModal
          isModalOpen={isAddModalOpen}
          setIsModalOpen={setIsAddModalOpen}
          type={Tables.Property}
          object={property}
          setObject={setProperty}
          requiredFields={RequiredFields}
          onSubmit={handleAddProperty}
          onImageUpload={(image) => (setPhoto(image))}
        />
      )}
    </div>
  );
};

export default PropertiesListing;
