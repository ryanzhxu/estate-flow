import React, {useState} from 'react';
import '../../shared/styles/listing.css';
import WorkerCardDetails from './WorkerCardDetails';
import WorkerDetail from "./workerDetail";
import {useDispatch, useSelector} from "react-redux";
import {getWorkerAsync} from "../../redux/workers/thunks";
import {closeDetail, isDetailOpen, openDetail} from "../../redux/workers/workerDetailsReducer";


const WorkerCard = ({ worker }) => {
    const dispatch = useDispatch()
    const detailIsOpen = useSelector(isDetailOpen)

    const handleCardClick = () => {
        dispatch(getWorkerAsync(worker._id));
        dispatch(openDetail());
    };

    return (
        <div className='listing-card' >
            <span onClick={handleCardClick}>
                <img alt={worker._id} className='listing-card-image'
                     src='https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp'
                />
            </span>
            <WorkerCardDetails worker={worker} />
        </div>
    );
};

export default WorkerCard;
