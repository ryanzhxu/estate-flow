import "./TenantView.css";

function TenantView({ tenants }) {
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0">
            <div className="d-flex align-items-center flex-shrink-0 p-2 link-dark text-decoration-none border-bottom">
                <h5 className="fs-5 fw-semibold">Tenants</h5>
            </div>
            <div className="list-group list-group-flush border-bottom scrollarea">
                {tenants.map((tenant, i) =>
                    <a href="#" className="list-group-item list-group-item-action py-2 lh-tight tenant-card" key={i}>
                        <div>
                            <h6 className="mb-0">{tenant.firstName} {tenant.lastName}</h6>
                            <p className="mb-0 text-muted small"><small>{tenant.phoneNumber} | {tenant.email}</small></p>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default TenantView;