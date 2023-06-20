import TenantProfileCard from "./TenantProfileCard";
import TenantOverviewCard from "./TenantOverviewCard";
import LeaseOverviewCard from "./LeaseOverviewCard";
import PaymentHistory from "./PaymentHistory";
import "./Tenant.css";
import RequiredPayments from "./RequiredPayments";

function Tenant( {tenant} ) {

    const demo = [];
    const example =
        {
            date: "2022-01-01",
            type: "Rent",
            charge: 1000,
            paid: 500
        };

    for (let i = 0; i < 6; i++) {
        demo.push(example);
    }

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
                <div className="col-lg-8">
                    <div className="row mb-4">
                        <div className="col-sm-7 tenant-property-info-container">
                            <LeaseOverviewCard tenant={tenant}/>
                        </div>
                        <div className="required-payments-container col-sm-5 card">
                            <RequiredPayments/>
                        </div>
                    </div>
                    <div className="row">
                        <h6>Payment History</h6>
                        <div className="card payment-history-container">
                            <PaymentHistory paymentHistory={demo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tenant;