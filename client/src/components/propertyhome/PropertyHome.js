import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyAsync, updatePropertyAsync } from '../../redux/properties/thunks';
import { useDispatch, useSelector } from 'react-redux';
import PropertyDetailCard from './PropertyDetailCard';
import PropertyOverview from './PropertyOverview';
import PropertyPhotoGallery from './PropertyPhotoGallery';
import './PropertyHome.css';
import TenantView from './TenantView';
import Loading from '../loading/Loading';
import sandGlass from '../loading/loading_sand_glass.json';
import {
  clearNestedObjectValues,
  getMappedEditObject,
  getStandardizedProperty,
  getStandardizedTenant,
} from '../../shared/services/Helpers';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { RequiredFields as PropertyRequiredFields } from '../../shared/constants/property/RequiredFields';
import { RequiredFields as TenantRequiredFields } from '../../shared/constants/tenant/RequiredFields';
import { addTenantAsync, getTenantsFromPropertyAsync } from '../../redux/tenants/thunks';
import HomeButton from '../../shared/components/HomeButton';

function PropertyHome() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => state.properties.propertySelected);
  const [showLoading, setShowLoading] = useState(true);

  const [isAddTenantModalOpen, setIsAddTenantModalOpen] = useState(false);
  const [isEditPropertyModalOpen, setIsEditPropertyModalOpen] = useState(false);

  const editProperty = getMappedEditObject(property);
  delete editProperty.rent;

  const tenant = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: null,
    occupation: '',
    startDate: null,
    endDate: null,
    leaseType: '',
  };

  const handleAddTenant = () => {
    tenant.propertyId = property._id;

    if (new Date(tenant.endDate) < new Date(tenant.startDate)) {
      alert('Lease end date cannot be older than start date.');
    } else if (!tenant.startDate || !tenant.endDate) {
      alert('Tenant must have a lease start date and end date.');
    } else {
      dispatch(addTenantAsync(getStandardizedTenant(tenant))).then(() => {
        clearNestedObjectValues(tenant);
        setIsAddTenantModalOpen(false);
        dispatch(getTenantsFromPropertyAsync(property._id));
      });
    }
  };

  const handleEditProperty = () => {
    if (!editProperty._id) {
      editProperty._id = property._id;
    }

    dispatch(updatePropertyAsync(getStandardizedProperty(editProperty))).then(() => {
      setIsEditPropertyModalOpen(false);
      dispatch(getPropertyAsync(editProperty._id));
    });
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
          <PropertyDetailCard property={property} />
          <div className='property-actions-container'>
            <div className='property-actions'>
              <HomeButton />
              <div className='btn btn-outline-primary' onClick={() => setIsAddTenantModalOpen(true)}>
                Add tenant
              </div>
              <div className='btn btn-outline-secondary' onClick={() => setIsEditPropertyModalOpen(true)}>
                Edit property
              </div>
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
        {isAddTenantModalOpen && (
          <InputFormModal
            isModalOpen={isAddTenantModalOpen}
            setIsModalOpen={setIsAddTenantModalOpen}
            type={Tables.Tenant}
            object={tenant}
            requiredFields={TenantRequiredFields}
            onSubmit={handleAddTenant}
          />
        )}
        {isEditPropertyModalOpen && (
          <InputFormModal
            isModalOpen={isEditPropertyModalOpen}
            setIsModalOpen={setIsEditPropertyModalOpen}
            type={Tables.Property}
            object={editProperty}
            requiredFields={PropertyRequiredFields}
            onSubmit={handleEditProperty}
            isEdit
          />
        )}
      </div>
    );
  };

  return <>{showLoading || !property ? <Loading animationData={sandGlass} /> : getContent()}</>;
}

export default PropertyHome;
