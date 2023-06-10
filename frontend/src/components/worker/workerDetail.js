import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalWorker";
import { openModal } from "./modalWorker";
import modalWorker from "./modalWorker";
import { expSelectedWorker } from "./modalWorker";
import { deleteWorker } from "./workerSlice";
import React from "react";
import './worker.css';

const WorkerDetail = () => {
    const select = useSelector(expSelectedWorker)
    const dispatch = useDispatch();

    return (
        <div className='workerDetail'>
            <div className='details'>
                <div className='contents'>
                    <h2 className="single-line">{select.name}</h2>
                    <h2 className="single-line">{select.email}</h2>
                    <h2 className="single-line">{select.phone}</h2>
                    <h2 className="single-line"> {select.address}</h2>
                    <h2 className="single-line">${select.hRate}/hour</h2>
                    <h2 className="single-line">Trades: {select.trades}</h2>
                    <h2 className="single-line">Postal Code: {select.pCode}</h2>
                </div>
                <div className="worker-detail-buttons">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            dispatch(closeModal());
                        }}>
                        CLOSE
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            dispatch(deleteWorker(select.id))
                            dispatch(closeModal())
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