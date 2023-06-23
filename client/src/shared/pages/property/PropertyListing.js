import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesAsync } from '../../../redux/properties/thunks';
import PropertyCard from './PropertyCard';
import './PropertyListing.css';
import AddPropertyForm from '../../../components/property/AddPropertyForm';

const PropertyListing = () => {
  const properties = useSelector((state) => state.properties.properties);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  const handleAddItem = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="property-listing-page">
      <div className="property-listing-contents">
        <div className="property-listing-left">
          <h2>Search</h2>
        </div>
        <div className="property-listing-right">
          <div className="property-listing-header">
            <h2>Properties</h2>
            <div className="btn btn-outline-primary" onClick={handleAddItem}>
              Add property
            </div>
          </div>
          <div className="property-listing-cards">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
      {showForm && <AddPropertyForm handleCloseForm={handleCloseForm} />}
    </div>
  );
};

export default PropertyListing;
