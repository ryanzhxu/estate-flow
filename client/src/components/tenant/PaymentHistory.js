import Button from '@atlaskit/button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSingleTenantAsync, updateTenantAsync } from '../../redux/tenants/thunks';
import { clearNestedObjectValues } from '../../shared/services/Helpers';
import { FeesTypes } from '../../shared/constants/tenant/FeesTypes';
import './Tenant.css';
import InputFormModal from '../../shared/components/InputFormModal';

function PaymentHistory({ tenant }) {
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const paymentHistory = {
    paymentType: '',
    charge: '',
    paid: '',
    paidDate: null,
  };

  const handleAddPaymentHistory = () => {
    const tenantToBeUpdated = {
      ...tenant,
      paymentHistory: [...tenant.paymentHistory, { ...paymentHistory }],
    };

    dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
      clearNestedObjectValues(paymentHistory);
      dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
      setIsAddModalOpen(false);
    });
  };

  const handleDeletePaymentHistory = (_id) => {
    const paymentHistoryIndex = tenant.paymentHistory.findIndex((item) => item._id === _id);

    if (paymentHistoryIndex !== -1) {
      const updatedPaymentHistory = [
        ...tenant.paymentHistory.slice(0, paymentHistoryIndex),
        ...tenant.paymentHistory.slice(paymentHistoryIndex + 1),
      ];

      const tenantToBeUpdated = {
        ...tenant,
        paymentHistory: updatedPaymentHistory,
      };

      dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
        dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
      });
    }
  };

  return (
    <div style={{ width: '100%', paddingRight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
        <h5>Payment History</h5>
        <Button appearance='primary' onClick={() => setIsAddModalOpen(true)}>
          Add payment history
        </Button>
      </div>
      <div className='payment-history-container card'>
        <table className='payment-history table table-striped table-responsive m-0'>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Type</th>
              <th scope='col'>Charges</th>
              <th scope='col'>Paid</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {tenant.paymentHistory.map((item, index) => (
              <tr key={`payment-${index}`} style={{ verticalAlign: 'middle' }}>
                <td>{new Date(item.paidDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                <td>{FeesTypes[item.paymentType]}</td>
                <td>${item.charge}</td>
                <td>${item.paid}</td>
                <td width='1px'>
                  <Button appearance='subtle' onClick={() => handleDeletePaymentHistory(item._id)}>
                    Delete
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
          type='Payment history'
          object={paymentHistory}
          requiredFields={[]}
          onSubmit={handleAddPaymentHistory}
        />
      )}
    </div>
  );
}

export default PaymentHistory;
