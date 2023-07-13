function PaymentHistory({ paymentHistory }) {
  return (
    <table className='payment-history table table-striped table-responsive m-0'>
      <thead>
        <tr>
          <th scope='col'>Date</th>
          <th scope='col'>Type</th>
          <th scope='col'>Charges</th>
          <th scope='col'>Paid</th>
        </tr>
      </thead>
      <tbody>
        {paymentHistory.map((item) => (
          <tr>
            <td>{new Date(item.date).toLocaleDateString()}</td>
            <td>{item.type}</td>
            <td>${item.charge}</td>
            <td>${item.paid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentHistory;
