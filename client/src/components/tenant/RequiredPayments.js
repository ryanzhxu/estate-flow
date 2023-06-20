function RequiredPayments() {
    return (
        <div>
            <div className="card-header">
                <h5 className="card-title mb-0">Required Payments</h5>
            </div>
            <div className="card-body">
                <table className="table table-responsive">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Deadline</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Rent</td>
                        <td>$1000</td>
                        <td>May 1</td>
                    </tr>
                    <tr>
                        <td>Hydro</td>
                        <td>$30</td>
                        <td>May 1</td>
                    </tr>
                    <tr>
                        <td>Electricity</td>
                        <td>$30</td>
                        <td>May 1</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequiredPayments;