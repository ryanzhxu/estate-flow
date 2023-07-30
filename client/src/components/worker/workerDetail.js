import { useDispatch, useSelector } from 'react-redux';
import { closeDetail, expSelectedWorker } from '../../redux/workers/workerDetailsReducer';
import React from 'react';
import './worker.css';

const WorkerDetail = () => {
  const select = useSelector(expSelectedWorker);
  const dispatch = useDispatch();
  return (
    <div className='workerDetail'>
      <div className='details'>
        <div className='contents'>
          <div>
            <p className='single-line'>Name:</p>
            <p className='single-line'>Email:</p>
            <p className='single-line'>Phone:</p>
            <p className='single-line'>Address:</p>
            <p className='single-line'>Hourly rate:</p>
            <p className='single-line'>Trades:</p>
            <p className='single-line'>Postal code:</p>
          </div>
          <div>
            <p>{select.firstName}</p>
            <p>{select.lastName}</p>
            <p>{select.email}</p>
            <p>{select.phoneNumber}</p>
            <p>${select.address.streetAddress}/hr</p>
            <p>{select.address.city}</p>
            <p>{select.address.province}</p>
            <p>{select.address.postalCode}</p>
            <p>{select.hourlyRate}</p>
            <p>{select.trades}</p>
          </div>
        </div>
        <div className='worker-detail-buttons'>
          <button
            className='btn btn-outline-secondary'
            onClick={() => {
              dispatch(closeDetail());
            }}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetail;
