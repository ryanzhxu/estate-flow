import PropertyDetailCard from './PropertyDetailCard';
import PropertyOverview from './PropertyOverview';
import PropertyPhotoGallery from './PropertyPhotoGallery';
import './PropertyHome.css';
import TenantView from './TenantView';
import React, { useEffect, useState } from 'react';
import AddPropertyForm from '../property/AddPropertyForm';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyAsync } from '../../redux/properties/thunks';

function PropertyHome() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [property, setProperty] = useState<Object>({});

  useEffect(() => {
    dispatch(getPropertyAsync(id)).then((resp) => {
      console.log('resp: ', resp);
      setProperty(resp);
    });
  }, [dispatch, id]);

  if (!property) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="home-container">
      <div className="property-card" id="property-home-header">
        <PropertyDetailCard address={property.address} id={property.id} name={property.name} />
        <div className="property-actions-container">
          <div className="property-actions">
            <button className="property-action">Edit Tenants</button>
            <button className="property-action">Edit Details</button>
            <button className="property-action">Calculate Profit</button>
            <button className="property-action">Add Property</button>
            {/* <AddPropertyForm /> */}
          </div>
        </div>
      </div>
      <div className="property-home-main-content-container">
        <div className="property-home-main-content">
          <div className="property-overview-container">
            <PropertyOverview property={property} />
          </div>
          <div className="gallery-container">
            <PropertyPhotoGallery photos={property.photos} />
          </div>
        </div>
        <div className="tenants-view-container border-left">
          <TenantView tenants={property.tenants} />
        </div>
      </div>
    </div>
  );
}

export default PropertyHome;
