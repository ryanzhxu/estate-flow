import { useDispatch, useSelector } from "react-redux";
import {closeDetail, expSelectedWorker, openUpdate} from "../../redux/workersRedux/workerDetailsReducer";
import React from "react";
import './worker.css';
import {deleteWorkerAsync} from "../../redux/workersRedux/workersThunks";


const WorkerDetail = () => {
    const select = useSelector(expSelectedWorker)

    const dispatch = useDispatch();

    return (
        <div className='workerDetail'>
            <div className='details'>
                <div className='contents'>
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
                            dispatch(closeDetail());
                        }}>
                        CLOSE
                    </button>

                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            dispatch(closeDetail())
                            dispatch(openUpdate())
                        }}
                    >
                        UPDATE
                    </button>

                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            dispatch(deleteWorkerAsync(select.id))
                            dispatch(closeDetail())
                        }}
                    >
                        DELETE
                    </button>

                </div>
            </div>

        </div>
    )
}

export default WorkerDetail;