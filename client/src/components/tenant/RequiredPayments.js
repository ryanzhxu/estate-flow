import React from 'react';

function RequiredPayments({ fees }) {
  return (
    <div key='required-payments'>
      <div className='card-header'>
        <h5 className='card-title mb-0'>Required Payments</h5>
      </div>
      <div className='card-body'>
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr key={`required-payment-${index}`}>
                <td>{fee.feesType}</td>
                <td>${fee.amount}</td>
                <td>{new Date(fee.dueDate).toLocaleDateString('en-US', { timeZone: 'UTC' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequiredPayments;
