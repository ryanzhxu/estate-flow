import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTenantsAsync } from '../../redux/tenants/thunks';
import TenantCard from '../../components/tenant/TenantCard';
import '../../shared/styles/listing.css';
import { Link } from 'react-router-dom';

const TenantsListing = () => {
  const dispatch = useDispatch();
  const allTenants = useSelector((state) => state.tenants.tenants);
  const tenantsArray = Object.values(allTenants);

  useEffect(() => {
    dispatch(getTenantsAsync());
  }, [dispatch]);

  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Tenants</h2>
            <br></br>
            <Link to='/'>
            <div className='btn btn-outline-primary'>
            <i className="bi bi-house"></i>
            </div>
            </Link>
          </div>
          <div className='listing-cards'>
            {tenantsArray.map((tenant) => (
              <TenantCard key={tenant._id} tenant={tenant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantsListing;
