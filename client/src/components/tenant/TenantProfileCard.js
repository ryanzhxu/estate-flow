function TenantProfileCard({tenant, address}) {
    return (
        <div className="card-body text-center">
            <h5 className="my-3">{tenant.firstName} {tenant.middleName ? `${tenant.middleName.charAt(0)}.` : ""} {tenant.lastName}</h5>
            <img src="https://cdn-icons-png.flaticon.com/512/65/65581.png" alt="avatar"
                 className="rounded-circle img-fluid"
                 style={{width: "150px"}}
            />
            <div className="d-flex justify-content-center mt-3 mb-2">
                <button className="btn btn-primary" type="button">Edit</button>
                <button className="btn btn-outline-primary ms-1" type="button">Delete</button>
            </div>
        </div>
    );
}

// https://mdbootstrap.com/docs/standard/extended/profiles/

export default TenantProfileCard;