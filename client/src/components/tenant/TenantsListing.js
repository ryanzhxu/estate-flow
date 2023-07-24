import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTenantAsync, getTenantsAsync } from '../../redux/tenants/tenantsThunks';
import '../../shared/pages/property/PropertyListing.css';

// need to change css
import '../worker/worker.css';

import { Link } from 'react-router-dom';
import TenantCard from './TenantCard';

const TenantsListing = () => {
  const allTenants = useSelector((state) => state.tenants.tenants);
  const dispatch = useDispatch();

  const tenantsArray = Object.values(allTenants);

  useEffect(() => {
    dispatch(getTenantsAsync());
  }, [dispatch]);

  // TODO: to be removed
  //   let renderedPosts = [];
  //   // all styles need to be changed after here.
  //   if (Array.isArray(allTenants)) {
  //     if (allTenants.length !== 0) {
  //       renderedPosts = allTenants.map((singleTenant) => (
  //         <article className='divItem' key={singleTenant._id}>
  //           {/*not sure what info to display here, need to change later*/}
  //           <h4 className='single-line' id={singleTenant._id}>
  //             {singleTenant.firstName} {singleTenant.lastName}
  //             <br />
  //             {singleTenant.email}
  //             <br />
  //             {singleTenant.phoneNumber}
  //           </h4>
  //           <button className='btn btn-outline-dark' style={{ marginTop: '10px' }}>
  //             <Link to={`/tenants/${singleTenant._id}`}>DETAIL</Link>
  //           </button>

  //           <button
  //             className='btn btn-outline-dark'
  //             style={{ marginTop: '10px' }}
  //             onClick={() => {
  //               dispatch(deleteTenantAsync(singleTenant._id));
  //             }}>
  //             DELETE
  //           </button>
  //         </article>
  //       ));
  //     }
  //   }

  return (
    <div className='property-listing-page'>
      <div className='property-listing-contents'>
        <div className='property-listing-right'>
          <div className='property-listing-header'>
            <h2>Tenants</h2>
          </div>
          <div className='property-listing-cards'>
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
