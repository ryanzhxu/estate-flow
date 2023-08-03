import { Modal } from 'react-bootstrap';
import React from 'react';
import './ProfitModal.css';
import { IconButton } from '@mui/material';

function ProfitModal({ mortgageValue, totalRent, isOpen, onClose }) {
  const profit = totalRent - mortgageValue;
  return (
    <Modal className='modal-sm profit-modal' show={isOpen}>
      <Modal.Header className='border-0 profit-modal-header'>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <h5>Result</h5>
        </div>
        <div>
          <IconButton
            style={{ width: '25px', height: '25px', borderRadius: '20%', top: '-5px', right: '2px' }}
            className='close-btn'
            onClick={onClose}
            aria-label='close'
            color='inherit'
            size='small'>
            <span className='close-btn-times' aria-hidden='true'>
              &times;
            </span>
          </IconButton>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='profit-modal-content card-body'>
          <div className='row'>
            <div className='col-sm-6'>
              <p className='mb-0'>Total Rent</p>
            </div>
            <div className='col-sm-4'>
              <p className='text-muted mb-0'>${totalRent}</p>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-sm-6'>
              <p className='mb-0'>Mortgage Fee</p>
            </div>
            <div className='col-sm-4'>
              <p className='text-muted mb-0'>${mortgageValue}</p>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-sm-6'>
              <p className='mb-0'>Profit Per Month</p>
            </div>
            <div className='col-sm-4'>
              <p className='text-muted mb-0'>${profit}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProfitModal;
