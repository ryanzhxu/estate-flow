import TenantProfileCard from "./TenantProfileCard";
import TenantOverviewCard from "./TenantOverviewCard";
import LeaseOverviewCard from "./LeaseOverviewCard";
import UtilitiesCard from "./UtilitiesCard";
import PaymentHistory from "./PaymentHistory";
import "./Tenant.css";

function Tenant( {tenant} ) {
    return (
        <div className="container py-5 tenant-container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="tenant-profile-container card mb-4">
                        <TenantProfileCard tenant={tenant}
                                           address={{
                                               city: "Vancouver",
                                               province: "BC"
                                           }}
                        />
                    </div>
                    <div className="tenant-overview-container card mb-4">
                        <TenantOverviewCard tenant={tenant}/>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="tenant-property-info-container mb-4">
                        <LeaseOverviewCard tenant={tenant}/>
                    </div>
                    <div className="payment-history-container card">

                        <PaymentHistory/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="utilities-container">
                        <UtilitiesCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tenant;