import { useSelector, useDispatch } from "react-redux";
import WorkerDetail from "./workerDetail";
import AddWorkerForm from "./AddWorkerForm";
import React from "react";
import {useEffect} from "react";
import './worker.css';
import { Link } from "react-router-dom";
import {getDetailAsync, getWorkersAsync} from "../../redux/workersRedux/workersThunks";
import {
    openAddForm,
    openDetail,
    isDetailOpen,
    isADDOpen,
    isUpdateOpen, expSelectedWorker
} from "../../redux/workersRedux/workerDetailsReducer";
import UpdateWorkerFrom from "./UpdateWorkerFrom";

function WorkerLists() {
    const select = useSelector(expSelectedWorker)
    useEffect(() => {
        dispatch(getWorkersAsync());
    },[select])
    const workers = useSelector(state => state.workers.list)
    const dispatch = useDispatch();
    const detailIsOpen = useSelector(isDetailOpen)
    const UpdateIsOpen = useSelector(isUpdateOpen)
    const addIsOpen = useSelector(isADDOpen)


    const renderedWorkers = workers.map((worker) => (
        <article className="divItem" key={worker.id}>
            <h4 className="single-line" id={worker.id} >
                {worker.name}
            </h4>
            <img src={worker.imageURL} alt={worker.name} className="WorkerImg" />
            <button
                className="btn btn-outline-dark"
                style={{ marginTop: '10px' }}
                onClick={() => {
                    dispatch(getDetailAsync(worker.id));
                    dispatch(openDetail());
                }}
            >
                Details
            </button>
        </article>
    ))

    const addNew = (
        <article className="divItem">
            <h4 className="single-line">
                New worker
            </h4>
            <img src={"https://5b0988e595225.cdn.sohucs.com/images/20171113/0108899329264ee5b833f70945195e66.jpeg"}
                alt={"Empty Worker"} className="WorkerImg" />
            <button
                className="btn btn-primary"
                style={{ marginTop: '10px' }}
                onClick={() => {
                    dispatch(openAddForm());
                }}
            >
                Add worker
            </button>
        </article>
    )

    return (
        <div style={{ padding: '25px' }}>
            <div className='worker-top-section'>
                <h3>Current Workers</h3>
                <Link to="/">
                    <button className='btn btn-outline-primary'>Back</button>
                </Link>
            </div>
            <section className="sectionContainer">
                {renderedWorkers}
                {addNew}
                {detailIsOpen && <WorkerDetail />}
                {addIsOpen && <AddWorkerForm />}
                {UpdateIsOpen && <UpdateWorkerFrom />}

                {/*add form*/}
            </section>
        </div>
    )

}

export default WorkerLists
