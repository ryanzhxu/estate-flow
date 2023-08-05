import React, { useState } from 'react';
import '../../shared/styles/listing.css';
import WorkerCardDetails from './WorkerCardDetails';
import { Modal } from 'react-bootstrap';
import { getFormattedPhoneNum } from '../../shared/services/Helpers';
import { Trades } from '../../shared/constants/worker/Trades';

const WorkerCard = ({ worker }) => {
  const [isWorkerDetailOpen, setIsWorkerDetailOpen] = useState(false);

  return (
    <div className='listing-card'>
      <div>
        <span onClick={() => setIsWorkerDetailOpen(true)}>
          <img
            alt={worker._id}
            className='listing-card-image'
            src={
              worker.imageUrl !== ''
                ? worker.imageUrl
                : 'https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp'
            }
          />
        </span>
        <WorkerCardDetails worker={worker} />
      </div>
      <Modal show={isWorkerDetailOpen} onHide={() => setIsWorkerDetailOpen(false)} centered>
        <Modal.Header>
          <Modal.Title>Worker details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Name</strong>
            </p>
            <p className='col-sm-8'>
              {worker.firstName} {worker.lastName}
            </p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Email</strong>
            </p>
            <p className='col-sm-8'>{worker.email}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Phone</strong>
            </p>
            <p className='col-sm-8'>{getFormattedPhoneNum(worker.phoneNumber)}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Hourly rate</strong>
            </p>
            <p className='col-sm-8'>{worker.hourlyRate}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Trades</strong>
            </p>
            <p className='col-sm-8'>{Trades[worker.trades] ?? worker.trades}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Address</strong>
            </p>
            <p className='col-sm-8'>
              {worker.address.streetAddress}, {worker.address.city}, {worker.address.province}{' '}
              {worker.address.postalCode}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='btn btn-outline-dark' onClick={() => setIsWorkerDetailOpen(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WorkerCard;
