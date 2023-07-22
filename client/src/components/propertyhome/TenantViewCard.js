import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TenantViewCard({ tenant }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)} className='list-group-item list-group-item-action py-2 lh-tight tenant-card'>
        <h6 className='mb-0'>
          {tenant.firstName} {tenant.middleName ? `${tenant.middleName.charAt(0)}.` : ''} {tenant.lastName}
        </h6>
        <p className='mb-0 text-muted small'>
          <small>
            {tenant.phoneNumber} | {tenant.email}
          </small>
        </p>
      </div>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Header>
          <Modal.Title>Tenant Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Name</strong>
            </p>
            <p className='col-sm-8'>
              {tenant.firstName} {tenant.middleName ? `${tenant.middleName.charAt(0)}.` : ''} {tenant.lastName}
            </p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Phone</strong>
            </p>
            <p className='col-sm-8'>{tenant.phoneNumber}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Email</strong>
            </p>
            <p className='col-sm-8'>{tenant.email}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Lease Term</strong>
            </p>
            <p className='col-sm-8'>12 months</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Rent</strong>
            </p>
            <p className='col-sm-8'>$1000</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/tenants/${tenant._id}`}>
            <button className='tenant-modal-button'>More Details</button>
          </Link>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TenantViewCard;
