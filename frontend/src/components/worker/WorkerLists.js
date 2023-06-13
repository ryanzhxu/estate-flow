import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAllWorkers } from "./workerSlice";
import { openModal } from "./modalWorker";
import { selectedWorker } from "./modalWorker";
import { isDetailOpen } from "./modalWorker";
import WorkerDetail from "./workerDetail";
import { isADDOpen } from "./modalWorker";
import AddWorkerForm from "./AddWorkerForm";
import { openAddModal } from "./modalWorker";
import React from "react";
import './worker.css';
import { Link } from "react-router-dom";

function WorkerLists() {
    const workers = useSelector(selectAllWorkers)
    const dispatch = useDispatch();
    const detailIsOpen = useSelector(isDetailOpen)
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
                    dispatch(selectedWorker(worker));
                    dispatch(openModal());
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
                    dispatch(openAddModal());
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
                {/*add form*/}
            </section>
        </div>
    )

}

export default WorkerLists
