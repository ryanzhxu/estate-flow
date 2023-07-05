import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesAsync } from '../../../redux/properties/thunks';
import PropertyCard from './PropertyCard';
import './PropertyListing.css';
import AddPropertyForm from '../../../components/property/AddPropertyForm';
import { Routes, Route } from 'react-router-dom';
import PropertyHome from '../../../components/propertyhome/PropertyHome';

const PropertyListing = () => {
  const properties = useSelector((state) => state.properties.properties);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(getPropertiesAsync()).then((resp) => {
      console.log('resp: ', resp);
    });
  }, [dispatch]);

  const handleOpenAddForm = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
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
            <div className="btn btn-outline-primary" onClick={handleOpenAddForm}>
              Add property
            </div>
          </div>
          <div className="property-listing-cards">
            <Routes>
              <Route path="/" element={<PropertyHome />} />
              <Route path="/properties/:id" element={<PropertyHome />} />
            </Routes>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
      {showAddForm && <AddPropertyForm handleCloseForm={handleCloseAddForm} />}
    </div>
  );
};

export default PropertyListing;
