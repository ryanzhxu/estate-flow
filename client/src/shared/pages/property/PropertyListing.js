import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesAsync } from '../../../redux/properties/thunks';
import PropertyCard from './PropertyCard';
import './PropertyListing.css';
import PropertyForm from '../../../components/property/PropertyForm';

const PropertyListing = () => {
  const properties = useSelector((state) => state.properties.properties);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  const handleOpenAddForm = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className='property-listing-page'>
      <div className='property-listing-contents'>
        <div className='property-listing-left'>
          <h2>Search</h2>
        </div>
        <div className='property-listing-right'>
          <div className='property-listing-header'>
            <h2>Properties</h2>
            <div className='btn btn-outline-primary' onClick={handleOpenAddForm}>
              Add property
            </div>
          </div>
          <div className='property-listing-cards'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </div>
      {showAddForm && <PropertyForm handleCloseForm={handleCloseAddForm} editProperty={null} />}
    </div>
  );
};

export default PropertyListing;
