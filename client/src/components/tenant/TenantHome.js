import TenantProfileCard from './TenantProfileCard';
import TenantOverviewCard from './TenantOverviewCard';
import LeaseOverviewCard from './LeaseOverviewCard';
import PaymentHistory from './PaymentHistory';
import './Tenant.css';
import RequiredPayments from './RequiredPayments';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSingleTenantAsync } from '../../redux/tenants/thunks';
import React from 'react';
import sandGlass from '../loading/loading_sand_glass.json';
import Loading from '../loading/Loading';

function TenantHome() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const tenant = useSelector((state) => state.tenants.tenantSelected);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    dispatch(getSingleTenantAsync(_id));

    return () => {
      clearTimeout(timer);
    };
  }, [_id, dispatch]);

  const getContents = () => {
    return (
      <div className='container py-5 tenant-container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='tenant-profile-container card mb-4'>
              <TenantProfileCard tenant={tenant} />
            </div>
            <div className='tenant-overview-container card mb-4'>
              <TenantOverviewCard tenant={tenant} />
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='row mb-4 tenant-home-page-right-section'>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div className='col-sm-7 tenant-property-info-container'>
                  <LeaseOverviewCard tenant={tenant} />
                </div>
                <div className='required-payments-container col-sm-5 card'>
                  <RequiredPayments tenant={tenant} />
                </div>
              </div>
              <PaymentHistory tenant={tenant} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{showLoading || !tenant ? <Loading animationData={sandGlass} /> : getContents()}</>;
}

export default TenantHome;
