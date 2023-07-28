import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyAsync } from '../../redux/properties/thunks';
import { useDispatch, useSelector } from 'react-redux';
import PropertyDetailCard from './PropertyDetailCard';
import PropertyOverview from './PropertyOverview';
import PropertyPhotoGallery from './PropertyPhotoGallery';
import './PropertyHome.css';
import TenantView from './TenantView';
import Loading from '../loading/Loading';
// import searching from '../loading/loading-lottie.json';
import sandGlass from '../loading/loading_sand_glass.json';
import { openTenantADD, isTenantAddOpen } from '../../redux/tenants/reducer';
import AddTenantForm from '../tenant/AddTenantForm';
import PropertyForm from '../property/PropertyForm';

function PropertyHome() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.propertySelected);
  const [showLoading, setShowLoading] = useState(true);
  const tenantAddIsOpen = useSelector(isTenantAddOpen);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);

  const handleOpenEditForm = () => {
    if (!editProperty || editProperty.Id !== property.id) {
      setEditProperty(property);
      setShowEditForm(true);
    }
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setEditProperty(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    dispatch(getPropertyAsync(_id));

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, _id]);

  const getContent = () => {
    return (
      <div className='home-container'>
        <div className='property-card' id='property-home-header'>
          <PropertyDetailCard address={property.address} id={property._id} name={property.name} />
          <div className='property-actions-container'>
            <div className='property-actions'>
              <button className='property-action' onClick={() => dispatch(openTenantADD())}>
                Add Tenant
              </button>
              <button
                className='property-action'
                onClick={() => {
                  handleOpenEditForm();
                }}>
                Edit Details
              </button>
              <button className='property-action'>Calculate Profit</button>
            </div>
          </div>
        </div>
        <div className='property-home-main-content-container'>
          <div className='property-home-main-content'>
            <div className='property-overview-container'>
              <PropertyOverview property={property} />
            </div>
            <div className='gallery-container'>
              <PropertyPhotoGallery photos={property.photos} />
            </div>
          </div>
          <div className='tenants-view-container border-left'>
            <TenantView propertyId={property._id} />
            <section className='sectionContainer'>
              {tenantAddIsOpen && <AddTenantForm propertyId={property._id} />}
              {showEditForm && <PropertyForm editProperty={editProperty} handleCloseForm={handleCloseEditForm} />}
            </section>
          </div>
        </div>
      </div>
    );
  };

  return <>{showLoading || !property ? <Loading animationData={sandGlass} /> : getContent()}</>;
}

export default PropertyHome;
