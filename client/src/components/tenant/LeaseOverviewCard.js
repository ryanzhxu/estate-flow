import React from 'react';
import './LeaseOverviewCard.css';
import Button from '@atlaskit/button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getSingleTenantAsync, updateTenantAsync } from '../../redux/tenants/thunks';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { RequiredFields } from '../../shared/constants/tenant/RequiredFields';
import { getConvertedDate } from '../../shared/services/Helpers';

function LeaseOverviewCard({ tenant }) {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const lease = tenant.lease;
  const address = tenant.address
  const { startDate, endDate, leaseType} = tenant.lease;
  const editTenant = { startDate, endDate, leaseType};

  const handleEditTenant = () => {

    const tenantToBeUpdated = {
      ...tenant,
      lease: {
        ...tenant.lease,
        startDate: editTenant.startDate,
        endDate: editTenant.endDate,
        leaseType: editTenant.leaseType,
      },
    };

    dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
      dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
      setIsEditModalOpen(false);
    });
  };

  return (
    <div className='tenant-lease-overview card'>
      <div className='card-header'>
        <h5 className='card-title mb-0'>
          Lease Details 
          <button className="button-link" onClick={() => (true)}>
            <i className="bi bi-arrow-down-circle"></i>
          </button>
        </h5>
        <Button appearance='primary' spacing="compact" onClick={() => setIsEditModalOpen(true)}>
          Edit Lease Details
        </Button>
      </div>
      <div className='card-body'>
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Residence</p>
          </div>
          <div className='col-sm-5'>
            <span className='text-muted mb-0'>{address.streetAddress}</span>
            <br />
            <span className='text-muted mb-0'>
              {address.city} {address.province} {address.postalCode}
            </span>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Start Date</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{getConvertedDate(lease.startDate)}</p>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>End Date</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{getConvertedDate(lease.endDate)}</p>
          </div>
        </div>
        <hr />
        <div className='row row-spacing'>
          <div className='col-sm-6'>
            <p className='mb-0'>Lease Type</p>
          </div>
          <div className='col-sm-5'>
            <p className='text-muted mb-0'>{lease.leaseType}</p>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <InputFormModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          type={Tables.Tenant}
          object={editTenant}
          requiredFields={RequiredFields}
          onSubmit={handleEditTenant}
          isEdit
        />
      )}
    </div>
  );
}

export default LeaseOverviewCard;
