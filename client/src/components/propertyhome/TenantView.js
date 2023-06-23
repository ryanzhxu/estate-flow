import "./TenantView.css";
import TenantViewCard from "./TenantViewCard";

function TenantView({ tenants }) {
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0">
            <div className="d-flex align-items-center flex-shrink-0 p-2 link-dark text-decoration-none border-bottom">
                <h5 className="tenants">Tenants</h5>
            </div>
            <div className="list-group list-group-flush border-bottom scrollarea">
                {tenants.map((tenant) =>
                    <TenantViewCard tenant={tenant}/>
                )}
            </div>
        </div>
    )
}

export default TenantView;