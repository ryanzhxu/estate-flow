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
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((payment, index) => (
              <tr key={`req-payment-${index}`}>
                <td>{payment.type}</td>
                <td>${payment.amount}</td>
                <td>{new Date(payment.dueDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequiredPayments;
