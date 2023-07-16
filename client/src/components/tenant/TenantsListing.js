import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTenantAsync, getTenantsAsync } from '../../redux/tenants/tenantsThunks';
import {
    isTenantAddOpen,
    isTenantDetailOpen,
    openTenantADD,
} from '../../redux/tenants/tenantsReducer';
import TenantDetails from './TenantDetail';
// need to change css
import '../worker/worker.css';
import AddPropertyForm from './AddTenantForm';

import { Link } from 'react-router-dom';


const TenantsListing = () => {
    const dispatch = useDispatch();
    const tenantDetailIsOpen = useSelector(isTenantDetailOpen);
    const tenantAddIsOpen = useSelector(isTenantAddOpen);
    useEffect(() => {
        dispatch(getTenantsAsync());
    }, [dispatch]);
    const allTenants = useSelector((state) => state.tenants.tenants);
    let renderedPosts = [];
    // all styles need to be changed after here.

    if (Array.isArray(allTenants)) {
        if (allTenants.length !== 0) {
            renderedPosts = allTenants.map((singleTenant) => (
                <article className='divItem' key={singleTenant._id}>
                    {/*not sure what info to display here, need to change later*/}
                    <h4 className='single-line' id={singleTenant._id}>
                        {singleTenant.firstName} {singleTenant.lastName}
                        <br />
                        {singleTenant.email}
                        <br />
                        {singleTenant.phoneNumber}
                        <br />
                        {singleTenant.propertyId ? `Property Rented` : 'No Property Rented'}
                    </h4>
                    <button className='btn btn-outline-dark' style={{ marginTop: '10px' }}>
                        <Link to={`/tenants/${singleTenant._id}`}>DETAIL</Link>
                    </button>

                    <button className='btn btn-outline-dark' style={{ marginTop: '10px' }}
                            onClick={() => {
                                dispatch(deleteTenantAsync(singleTenant._id));
                            }}>
                        DELETE
                    </button>
                </article>
            ));
        }
    }

    return (
        <div className='property-listing-page'>
            <div className='property-listing-contents'>
                <div className='property-listing-left'>
                    <h2>Search</h2>
                </div>
                <div className='property-listing-right'>
                    <div className='property-listing-header'>
                        <h2>Tenants</h2>
                        <div className='btn btn-outline-primary' onClick={() => dispatch(openTenantADD())}>
                            Add a Tenant
                        </div>
                    </div>
                    <section className='sectionContainer'>
                        <div>{renderedPosts}</div>
                        {tenantDetailIsOpen && <TenantDetails />}
                        {tenantAddIsOpen && <AddPropertyForm />}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TenantsListing;
