import React from 'react';
import InputFormModal from '../../shared/components/InputFormModal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@atlaskit/button';
import { clearNestedObjectValues } from '../../shared/services/Helpers';
import { getSingleTenantAsync, updateTenantAsync } from '../../redux/tenants/thunks';
import './Tenant.css';
import { FeesTypes } from '../../shared/constants/tenant/FeesTypes';

function RequiredPayments({ tenant }) {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const fees = tenant.lease.fees;

  const requiredPayment = {
    feesType: '',
    amount: '',
    dueDate: null,
  };

  const handleAddRequiredPayment = () => {
    const tenantToBeUpdated = {
      ...tenant,
      lease: {
        ...tenant.lease,
        fees: [...tenant.lease.fees, requiredPayment],
      },
    };

    dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
      clearNestedObjectValues(requiredPayment);
      dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
      setIsAddModalOpen(false);
    });
  };

  const handleDeleteRequiredPayment = (_id) => {
    const requiredPaymentIndex = tenant.lease.fees.findIndex((item) => item._id === _id);

    if (requiredPaymentIndex !== -1) {
      const updatedFees = [
        ...tenant.lease.fees.slice(0, requiredPaymentIndex),
        ...tenant.lease.fees.slice(requiredPaymentIndex + 1),
      ];

      const tenantToBeUpdated = {
        ...tenant,
        lease: {
          ...tenant.lease,
          fees: updatedFees,
        },
      };

      dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
        dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
      });
    }
  };

  return (
    <div key='required-payments'>
      <div className='card-header'>
        <h5 className='card-title mb-0'>Required Payments</h5>
        <Button appearance='subtle' onClick={() => setIsAddModalOpen(true)}>
          <i className='bi bi-plus-circle' />
        </Button>
      </div>
      <div className='card-body'>
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Due</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr key={`required-payment-${index}`}>
                <td>{FeesTypes[fee.feesType]}</td>
                <td>${fee.amount}</td>
                <td>{new Date(fee.dueDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                <td width='1px'>
                  <Button appearance='subtle' onClick={() => handleDeleteRequiredPayment(fee._id)}>
                    <i className='bi bi-trash' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddModalOpen && (
        <InputFormModal
          isModalOpen={isAddModalOpen}
          setIsModalOpen={setIsAddModalOpen}
          type='Required Payments'
          object={requiredPayment}
          requiredFields={[]}
          onSubmit={handleAddRequiredPayment}
        />
      )}
    </div>
  );
}

export default RequiredPayments;
