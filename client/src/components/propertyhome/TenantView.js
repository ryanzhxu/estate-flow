import './TenantView.css';
import TenantViewCard from './TenantViewCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTenantsFromPropertyAsync } from '../../redux/tenants/thunks';
import React from 'react';

function TenantView({ propertyId }) {
  const tenants = useSelector((state) => state.tenants.tenants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenantsFromPropertyAsync(propertyId));
  }, [propertyId, dispatch]);

  return (
    <div className='d-flex flex-column align-items-stretch flex-shrink-0'>
      <div className='d-flex align-items-center flex-shrink-0 p-2 link-dark text-decoration-none border-bottom'>
        <h5 className='fs-5 fw-semibold'>Tenants</h5>
      </div>
      <div className='list-group list-group-flush border-bottom scrollarea'>
        {tenants.map((tenant) => (
          <TenantViewCard key={`tenant-${tenant._id}-view-card`} tenant={tenant} />
        ))}
      </div>
    </div>
  );
}

export default TenantView;
