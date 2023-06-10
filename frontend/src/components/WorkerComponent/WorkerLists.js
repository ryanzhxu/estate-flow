import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { selectAllWorkers } from "./workerSlice";
import "./worker.css";
import {openModal} from "./modalWorker";
import {selectedWorker} from "./modalWorker";
import {isDetailOpen} from "./modalWorker";
import WorkerDetail from "./workerDetail";
import {isADDOpen} from "./modalWorker";
import AddWorkerForm from "./AddWorkerForm";
import {openAddModal} from "./modalWorker";

function WorkerLists(){
    const workers = useSelector(selectAllWorkers)
    const dispatch = useDispatch();
    const detailIsOpen = useSelector(isDetailOpen)
    const addIsOpen = useSelector(isADDOpen)

    console.log("addIsOpen is " + addIsOpen)


    const renderedWorkers = workers.map((worker) => (
        <article className="divItem" key={worker.id}>
            <h4 className="single-line" id = {worker.id} >
                {worker.name}
            </h4>
            <img src={worker.imageURL} alt={worker.name} className="WorkerImg" />
            <div className='btn-container'>
                <button
                    className="btn detail-btn"
                    onClick={ () => {
                        dispatch(selectedWorker(worker));
                        dispatch(openModal());
                    } }>
                    DETAIL
                </button>
            </div>

        </article>

    ))

    const addNew = (
    <article className="divItem">
        <img src={"https://5b0988e595225.cdn.sohucs.com/images/20171113/0108899329264ee5b833f70945195e66.jpeg"}
             alt={"Empty Worker"} className="WorkerImg" />
        <button
            className="btn detail-btn"

            onClick={ () => {
                dispatch(openAddModal());
            } }

        >
            Add New Worker
        </button>

    </article>
    )

    return (
        <>
            <h3>Current Workers</h3>
            <section className="sectionContainer">
                {renderedWorkers}
                {addNew}
                {detailIsOpen && <WorkerDetail />}

                {addIsOpen && <AddWorkerForm />}

                {/*add form*/}


            </section>
        </>
    )

}

export default WorkerLists
