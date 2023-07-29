import React from 'react';
import './PropertyDetailCard.css';
function PropertyDetailCard({ property }) {
  return (
    property.address && (
      <div className='property-card'>
        <div className='property-detail'>
          <header>{property.name ? property.name : property._id}</header>
          <p className='property-address'>{property.address.streetAddress}</p>
          <p className='property-zone-info'>
            <small>
              {property.address.city}, {property.address.province} {property.address.postalCode}
            </small>
          </p>
        </div>
      </div>
    )
  );
}
export default PropertyDetailCard;
