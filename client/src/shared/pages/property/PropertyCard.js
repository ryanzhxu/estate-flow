import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCardDetails from './PropertyCardDetails';
import './PropertyListing.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-listing-card">
      <Link to={`/properties/${property._id}`}>
        <span>
          <img alt={property._id} className={`property-image`} src={property.photos[0]} />
        </span>
      </Link>
      <PropertyCardDetails property={property} />
    </div>
  );
};

export default PropertyCard;
