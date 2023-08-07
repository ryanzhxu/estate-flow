import React from 'react';
import Amenities from '../../shared/constants/property/Amenities';
import './PropertyOverview.css';

function PropertyOverview({ property }) {
  return (
    property.amenities && (
      <div className='property-overview card'>
        <h3 className='card-header'>Overview</h3>
        <div className='card-body property-overview-details'>
          <div className='row'>
            <div className='col-md-6 mb-1'>
              <p>
                <strong>Property type:</strong> {property.type}
              </p>
              <p>
                <strong>Bedrooms:</strong> {property.bed}
              </p>
              <p>
                <strong>Bathrooms:</strong> {property.bath}
              </p>
              <p>
                <strong>Description:</strong> {property.description}
              </p>
            </div>
            <div className='col-md-6 mb-1'>
              <div>
                <strong>Amenities:</strong>
                <ul className='amenities-list list-group'>
                  {property.amenities.map((amenity, i) => (
                    <li className={`d-flex no-block card-body ${i > 0 ? 'border-top' : ''}`} key={i}>
                      {Amenities[amenity]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default PropertyOverview;
