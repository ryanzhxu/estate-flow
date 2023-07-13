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
import searching from '../loading/loading-lottie.json';

function PropertyHome() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.propertySelected);
  const [showLoading, setShowLoading] = useState(true);

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
              <button className='property-action'>Edit Tenants</button>
              <button className='property-action'>Edit Details</button>
              <button className='property-action'>Calculate Profit</button>
              <button className='property-action'>Add Property</button>
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
          </div>
        </div>
      </div>
    );
  };

  return <>{showLoading || !property ? <Loading animationData={searching} /> : getContent()}</>;
}

export default PropertyHome;
