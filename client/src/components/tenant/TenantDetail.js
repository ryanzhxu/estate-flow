import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {closeTenantDetail, expSelectedTenant} from "../../redux/tenants/tenantsReducer";

// need to change css
import '../worker/worker.css';


const TenantDetails = () => {
    const select = useSelector(expSelectedTenant)

    const dispatch = useDispatch();

    return (
        <div className='workerDetail'>
            <div className='details'>
                <div className='contents'>
                    {/*not sure what info to display here, need to change later*/}
                    <div>
                        <p className="single-line">Name:</p>
                        <p className="single-line">Email:</p>
                        <p className="single-line">Phone:</p>
                        <p className="single-line">Address:</p>
                        <p className="single-line">Hourly rate:</p>
                        <p className="single-line">Trades:</p>
                        <p className="single-line">Postal code:</p>
                    </div>
                    <div>
                        <p>{select.name}</p>
                        <p>{select.email}</p>
                        <p>{select.phone}</p>
                        <p>{select.address}</p>
                        <p>${select.hRate}/hr</p>
                        <p>{select.trades}</p>
                        <p>{select.pCode}</p>
                    </div>
                </div>
                <div className="worker-detail-buttons">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            dispatch(closeTenantDetail());
                        }}>
                        CLOSE
                    </button>





                </div>
            </div>

        </div>
    )
}

export default TenantDetails;