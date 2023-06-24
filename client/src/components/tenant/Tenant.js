import TenantProfileCard from "./TenantProfileCard";
import TenantOverviewCard from "./TenantOverviewCard";
import LeaseOverviewCard from "./LeaseOverviewCard";
import PaymentHistory from "./PaymentHistory";
import "./Tenant.css";
import RequiredPayments from "./RequiredPayments";

function Tenant( {tenant, address} ) {
    return (
        <div className="container py-5 tenant-container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="tenant-profile-container card mb-4">
                        <TenantProfileCard tenant={tenant}
                                           address={address}
                        />
                    </div>
                    <div className="tenant-overview-container card mb-4">
                        <TenantOverviewCard tenant={tenant}/>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row mb-4">
                        <div className="col-sm-7 tenant-property-info-container">
                            <LeaseOverviewCard address={address} lease={tenant.lease}/>
                        </div>
                        <div className="required-payments-container col-sm-5 card">
                            <RequiredPayments fees={tenant.lease.fees}/>
                        </div>
                    </div>
                    <div className="row">
                        <h6>Payment History</h6>
                        <div className="card payment-history-container">
                            <PaymentHistory paymentHistory={tenant.paymentHistory}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tenant;