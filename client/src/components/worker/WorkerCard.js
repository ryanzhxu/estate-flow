import React from 'react';
import '../../shared/styles/listing.css';
import WorkerCardDetails from './WorkerCardDetails';

const WorkerCard = ({ worker }) => {
  return (
    <div className='listing-card'>
      <span>
        <img
          alt={worker._id}
          className='listing-card-image'
          src='https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp'
        />
      </span>
      <WorkerCardDetails worker={worker} />
    </div>
  );
};

export default WorkerCard;
