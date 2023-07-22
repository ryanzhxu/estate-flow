import Button from '@atlaskit/button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getSingleTenantAsync, updateTenantAsync } from '../../redux/tenants/tenantsThunks';
import InputField from '../../shared/components/InputField';
import { getSelectOptions, getSelectedIndex, saveValueToObject } from '../../shared/services/Helpers';
import { PaymentTypes } from '../../shared/constants/tenant/PaymentTypes';
import './Tenant.css';

function PaymentHistory({ tenant }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const paymentHistory = {
    date: null,
    type: '',
    charge: '',
    paid: '',
  };

  const handleAddPaymentHistory = () => {
    const tenantToBeUpdated = {
      ...tenant,
      paymentHistory: [...tenant.paymentHistory, { ...paymentHistory }],
    };
    dispatch(updateTenantAsync(tenantToBeUpdated)).then(() => {
      dispatch(getSingleTenantAsync(tenantToBeUpdated._id));
    });
    setIsOpen(false);
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
        <h6>Payment History</h6>
        <Button
          appearance='primary'
          onClick={() => {
            setIsOpen(true);
          }}>
          Add payment history
        </Button>

        <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
          <Modal.Header>
            <Modal.Title>Add payment history</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-content panel-warning' style={{ border: 'none' }}>
            <form
              key='payment-history-add-form'
              className='add-payment-history-form'
              style={{ display: 'grid', gap: '15px' }}>
              {Object.keys(paymentHistory).map((field) => {
                if (field === 'type') {
                  return (
                    <div key={field}>
                      <InputField
                        field={field}
                        options={getSelectOptions(PaymentTypes)}
                        defaultValue={getSelectedIndex(PaymentTypes, tenant.paymentHistory.type)}
                        onChange={(selectedOptions) => {
                          const selectedValue = selectedOptions ? selectedOptions.value : '';
                          saveValueToObject(paymentHistory, field, selectedValue);
                        }}
                        isRequired
                        isSelect
                      />
                    </div>
                  );
                } else if (field === 'date') {
                  return (
                    <div key={field}>
                      <InputField
                        type={field}
                        field={field}
                        defaultValue={''}
                        onChange={(e) => saveValueToObject(paymentHistory, field, e.target.value)}
                        isRequired
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={field}>
                      <InputField
                        field={field}
                        defaultValue={tenant.paymentHistory[field] ?? ''}
                        type='number'
                        onChange={(e) => saveValueToObject(paymentHistory, field, e.target.value)}
                        isRequired
                      />
                    </div>
                  );
                }
              })}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button appearance='subtle' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button appearance='primary' onClick={handleAddPaymentHistory}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
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
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{PaymentTypes[item.type]}</td>
                <td>${item.charge}</td>
                <td>${item.paid}</td>
                <td width='1px'>
                  <Button
                    appearance='subtle'
                    onClick={() => {
                      handleDeletePaymentHistory(item._id);
                    }}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;
