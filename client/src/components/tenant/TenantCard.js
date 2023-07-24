import React from 'react';
import '../../shared/pages/property/PropertyListing.css';
import { Link } from 'react-router-dom';

const TenantCard = ({ tenant }) => {
  return (
    <div className='property-listing-card'>
      <Link to={`/tenants/${tenant._id}`}>
        <span>
          <img src='https://cdn-icons-png.flaticon.com/512/65/65581.png' alt='avatar' className='property-image' />
        </span>
      </Link>
      <div className='property-card-content'>
        <span>Tenant</span>
        <h4>
          {tenant.firstName} {tenant.lastName}
        </h4>
        <p>{`Address: TBD`}</p>
        <div className='property-card-footer' />
      </div>
    </div>
  );
};

export default TenantCard;
