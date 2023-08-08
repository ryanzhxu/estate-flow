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
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('paymentType');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [paymentHistory, setPaymentHistory] = useState({
    paymentType: '',
    charge: '',
    paid: '',
    paidDate: null,
  });

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

  function sortByType() {
    setSortColumn('paymentType');
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  function sortByDate() {
    setSortColumn('paidDate');
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  // handles the sorting
  const sortedPaymentHistory = [...tenant.paymentHistory].sort((a, b) => {
    if (sortColumn === 'paidDate') {
      if (sortOrder === 'asc') {
        return new Date(a[sortColumn]) - new Date(b[sortColumn]);
      } else {
        return new Date(b[sortColumn]) - new Date(a[sortColumn]);
      }
    } else {
      return a[sortColumn].localeCompare(b[sortColumn]);
    }
  });

  return (
    <div className='payment-history'>
      <div className='payment-history-header'>
        <h5>Payment History</h5>
        <Button appearance='subtle' onClick={() => setIsAddModalOpen(true)}>
          <i className='bi bi-plus-circle' />
        </Button>
      </div>
      <div className='payment-history-container card'>
        <table className='payment-history table table-striped table-responsive m-0'>
          <thead>
            <tr>
              <th scope='col' onClick={sortByDate} style={{ cursor: 'pointer' }}>
                Date
              </th>
              <th scope='col' onClick={sortByType} style={{ cursor: 'pointer' }}>
                Type
              </th>
              <th scope='col'>Charges</th>
              <th scope='col'>Paid</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {sortedPaymentHistory.map((item, index) => (
              <tr key={`payment-${index}`} style={{ verticalAlign: 'middle' }}>
                <td>{new Date(item.paidDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
                <td>{FeesTypes[item.paymentType]}</td>
                <td>${item.charge}</td>
                <td>${item.paid}</td>
                <td width='1px'>
                  <Button appearance='subtle' onClick={() => handleDeletePaymentHistory(item._id)}>
                    <i className='bi bi-trash'></i>
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
          setObject={setPaymentHistory}
          requiredFields={[]}
          onSubmit={handleAddPaymentHistory}
        />
      )}
    </div>
  );
}

export default PaymentHistory;
