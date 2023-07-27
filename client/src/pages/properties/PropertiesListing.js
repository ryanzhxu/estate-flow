import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesAsync } from '../../redux/properties/thunks';
import PropertyForm from '../../components/property/PropertyForm';
import '../../shared/styles/listing.css';
import PropertyCard from '../../components/property/PropertyCard';

const PropertiesListing = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const propertiesArray = Object.values(properties);
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
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-left'>
          <h2>Search</h2>
        </div>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Properties</h2>
            <div className='btn btn-outline-primary' onClick={handleOpenAddForm}>
              Add property
            </div>
          </div>
          <div className='listing-cards'>
            {propertiesArray.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </div>
      {showAddForm && <PropertyForm handleCloseForm={handleCloseAddForm} editProperty={null} />}
    </div>
  );
};

export default PropertiesListing;
