function PaymentHistory() {
    const demo = [1, 2, 3, 4];
    const example = (
        <tr>
            <td>2022-12-01</td>
            <td>Rent</td>
            <td>5000</td>
            <td>1000</td>
            <td>4000</td>
        </tr>
    )
    return (
        <table className="payment-history table table-striped table-responsive m-0">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Total Due</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Pending</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2022-12-01</td>
                    <td>Rent</td>
                    <td>5000</td>
                    <td>1000</td>
                    <td>4000</td>
                </tr>
                <tr>
                    <td>2022-08-01</td>
                    <td>Hydro</td>
                    <td>200</td>
                    <td>100</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>2021-12-12</td>
                    <td>4000</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                {demo.map((num, i) => example)}
            </tbody>
        </table>
    )
}

export default PaymentHistory;