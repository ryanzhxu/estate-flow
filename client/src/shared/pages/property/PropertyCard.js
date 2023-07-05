import React from 'react';
import PropertyCardDetails from './PropertyCardDetails';
import './PropertyListing.css';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-listing-card">
      <Link to={`/properties/${property.id}`}>
        <span>
          <img alt={property.id} className={`property-image`} src={property.photos[0]} />
        </span>
      </Link>
      <PropertyCardDetails property={property} />
    </div>
  );
};

export default PropertyCard;
