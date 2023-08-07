import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCardDetails from './PropertyCardDetails';
import '../../shared/styles/listing.css';

const PropertyCard = ({ property }) => {
  return (
    <div className='listing-card'>
      <Link to={`/properties/${property._id}`}>
        <span>
          <img alt={property._id} className={'property-card-image'} src={property.photos[0]} />
        </span>
      </Link>
      <PropertyCardDetails property={property} />
    </div>
  );
};

export default PropertyCard;
