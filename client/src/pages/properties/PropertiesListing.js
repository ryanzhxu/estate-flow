import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAsync, getPropertiesAsync } from '../../redux/properties/thunks';
import '../../shared/styles/listing.css';
import PropertyCard from '../../components/property/PropertyCard';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { RequiredFields } from '../../shared/constants/property/RequiredFields';
import { clearNestedObjectValues, getStandardizedProperty } from '../../shared/services/Helpers';

const PropertiesListing = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const propertiesArray = Object.values(properties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const property = {
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
  };

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  const handleAddProperty = () => {
    dispatch(addPropertyAsync(getStandardizedProperty(property))).then(() => {
      clearNestedObjectValues(property);
      setIsAddModalOpen(false);
      dispatch(getPropertiesAsync());
    });
  };

  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-left'>
          <h2>Search</h2>
        </div>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Properties</h2>
            <div className='btn btn-outline-primary' onClick={() => setIsAddModalOpen(true)}>
              Add property
            </div>
          </div>
          <div className='listing-cards'>
            {propertiesArray.map((property) => (
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
          requiredFields={RequiredFields}
          onSubmit={handleAddProperty}
        />
      )}
    </div>
  );
};

export default PropertiesListing;
