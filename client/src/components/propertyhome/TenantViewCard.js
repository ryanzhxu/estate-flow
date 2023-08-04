import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FeesTypes } from '../../shared/constants/tenant/FeesTypes';
import { getDateDifference, getFormattedPhoneNum, getPluralS } from '../../shared/services/Helpers';

function TenantViewCard({ tenant }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateDifference = getDateDifference(tenant.lease.startDate, tenant.lease.endDate);
  const hasRentFees = tenant.lease.fees.find((fee) => fee.type === FeesTypes.Rent);
  const rent = hasRentFees ? `$${hasRentFees.amount}/mo` : 'Not provided';

  return (
    <div>
      <div onClick={() => setIsOpen(true)} className='list-group-item list-group-item-action py-2 lh-tight tenant-card'>
        <h6 className='mb-0'>
          {tenant.firstName} {tenant.lastName}
        </h6>
        <p className='mb-0 text-muted small'>
          <small>
            {tenant.phoneNumber} | {tenant.email}
          </small>
        </p>
      </div>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Header>
          <Modal.Title>Tenant details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Name</strong>
            </p>
            <p className='col-sm-8'>
              {tenant.firstName} {tenant.lastName}
            </p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Phone</strong>
            </p>
            <p className='col-sm-8'>{getFormattedPhoneNum(tenant.phoneNumber)}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Email</strong>
            </p>
            <p className='col-sm-8'>{tenant.email}</p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Lease remaining</strong>
            </p>
            <p className='col-sm-8'>
              {dateDifference.years} year{getPluralS(dateDifference.years)}, {dateDifference.months} month
              {getPluralS(dateDifference.months)}, and {dateDifference.days} day{getPluralS(dateDifference.days)}
            </p>
          </div>
          <div className='row'>
            <p className='col-sm-4'>
              <strong>Rent</strong>
            </p>
            <p className='col-sm-8'>{rent}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/tenants/${tenant._id}`}>
            <div className='btn btn-outline-primary'>More details</div>
          </Link>
          <div className='btn btn-outline-dark' onClick={() => setIsOpen(false)}>
            Close
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TenantViewCard;
