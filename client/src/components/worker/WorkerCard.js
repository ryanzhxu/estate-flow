import React, { useState } from 'react';
import '../../shared/styles/listing.css';
import WorkerCardDetails from './WorkerCardDetails';
import { Modal } from 'react-bootstrap';
import { getFormattedPhoneNum } from '../../shared/services/Helpers';
import { Trades } from '../../shared/constants/worker/Trades';

const WorkerCard = ({ worker }) => {
  const [isWorkerDetailOpen, setIsWorkerDetailOpen] = useState(false);
  let workerImg
  let workerType = worker.trades
  switch (workerType) {
    case "Electrician":
      workerImg = 'https://fluorescentmanlighting.com/images/page_uploads/1638587135/FML---Blog---Tips-For-Choosing-The-Best-Electrician-In-Calgary.jpg';
      break;
    case "Mechanic":
      workerImg = 'https://news.bpx.co.uk/wp-content/uploads/2022/10/shutterstock_1927241273.jpg';
      break;
    case "HVAC":
      workerImg = 'https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2021/11/what-does-hvac-technician-do.jpg';
      break;
    case "IT":
      workerImg = 'https://www.greenfieldreporter.com/wp-content/uploads/2023/02/130733204_web1_20230220dr-COMM-Peyten-Grant1.jpg';
      break;
    case "Telecommunications":
      workerImg = 'https://www.cimtcollege.com/cimt/images/telecommunications-technology-1.jpg';
      break;
    case "Instrumentation":
      workerImg = 'https://iticollege.edu/wp-content/uploads/2022/06/Instrument-Technician-Course-.jpg';
      break;
    case "Plumber":
      workerImg = 'https://cdn-boadd.nitrocdn.com/dFVpCkCQuyKKGCvsieWgIJjyQLauwWHh/assets/images/optimized/rev-acc6a50/wp-content/uploads/2015/11/VIGILANT-plumber-fixing-a-sink-shutterstock_132523334-e1448389230378-620x400.jpg';
      break;
    case "Elevator":
      workerImg = 'https://macleans.ca/wp-content/uploads/2017/05/MAY24_CAMPBELL07.jpg';
      break;
    default:
      workerImg = 'https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp';
      break;
  }
  return (
    <div className='listing-card'>
      <div>
        <span onClick={() => setIsWorkerDetailOpen(true)}>
          <img
            alt={worker._id}
            className='listing-card-image'
            src={ workerImg }
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
