import "./LeaseOverviewCard.css";

function LeaseOverviewCard({tenant}) {
    return (
        <div className="tenant-lease-overview card">
            <div className="card-header">
                <h5 className="card-title mb-0">
                    Lease Details <i className="bi bi-caret-down-fill"/>
                </h5>
            </div>
            <div className="card-body">
                <div className="row row-spacing">
                    <div className="col-sm-6">
                        <p className="mb-0">Residence</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted mb-0">
                            2366 Main Mall
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row row-spacing">
                    <div className="col-sm-6">
                        <p className="mb-0">Start Date</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted mb-0">
                            2022-10-11
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row row-spacing">
                    <div className="col-sm-6">
                        <p className="mb-0">End Date</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted mb-0">
                            2022-12-01
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row row-spacing">
                    <div className="col-sm-6">
                        <p className="mb-0">Lease Term</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted mb-0">
                            12 months
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row row-spacing">
                    <div className="col-sm-6">
                        <p className="mb-0">Lease Type</p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-muted mb-0">
                            Month-to-Month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaseOverviewCard;