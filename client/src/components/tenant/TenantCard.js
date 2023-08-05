import React from 'react';
import { Link } from 'react-router-dom';
import '../../shared/styles/listing.css';

const TenantCard = ({ tenant }) => {
  return (
    <div className='listing-card'>
      <Link to={`/tenants/${tenant._id}`}>
        <span>
          <img
            alt='avatar'
            className='listing-card-image'
            src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
          />
        </span>
      </Link>
      <div className='listing-card-content'>
        <span>Tenant</span>
        <h4 className='scrollable-text'>
          {tenant.firstName} {tenant.lastName}
        </h4>
        <p>
          <span>{tenant.address.streetAddress}</span>
          <br />
          <span>
            {tenant.address.city} {tenant.address.province} {tenant.address.postalCode}
          </span>
        </p>
        <div className='listing-card-footer' />
      </div>
    </div>
  );
};

export default TenantCard;
