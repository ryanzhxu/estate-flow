import { useDispatch, useSelector } from 'react-redux';
import { closeDetail, expSelectedWorker } from '../../redux/workers/workerDetailsReducer';
import React from 'react';
import './worker.css';

const WorkerDetail = () => {
  const select = useSelector(expSelectedWorker);
  const dispatch = useDispatch();
  let streetAddress = "";
  let city = "";
  let province = "";
  let postalCode = "";
  if (select.address) {
    streetAddress = select.address.streetAddress ? select.address.streetAddress : "";
    city = select.address.city ? select.address.city : "";
    province = select.address.province ? select.address.province : "";
    postalCode = select.address.postalCode ? select.address.postalCode : "";
  }

  return (
      <div className='workerDetail'>
        <div className='details'>
          <div className='contents'>
            <div>
              <p className='single-line'>Name: </p>
              <p className='single-line'>Email: </p>
              <p className='single-line'>Phone: </p>
              <p className='single-line'>Hourly rate ($/hr): </p>
              <p className='single-line'>Trades: </p>
              <p className='single-line'>Address: </p>
            </div>
            <div>
              <p> {select.firstName} {select.lastName}</p>
              <p> {select.email}</p>
              <p> {select.phoneNumber}</p>
              <p> {select.hourlyRate}</p>
              <p> {select.trades}</p>
              <p> {streetAddress}</p>
              <p> {city}, {province}, {postalCode}</p>
            </div>
          </div>
          <div className='worker-detail-buttons' >
            <button
                onClick={() => {
                  dispatch(closeDetail());
                }}
            >
              CLOSE DETAILS
            </button>
          </div>
        </div>
      </div>
  );
};

export default WorkerDetail;
