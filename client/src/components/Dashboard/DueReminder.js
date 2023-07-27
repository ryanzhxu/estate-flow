import React from 'react';
import { Link } from 'react-router-dom';
import { getConvertedDate } from '../../shared/services/Helpers';
import './DueReminder.css';

export default function DueReminder({ tenantWithDue }) {
  return (
    <Link to={`/tenants/${tenantWithDue._id}`}>
      <div className='reminder-card'>
        <div className='reminder-card-top-section'>
          <h5 className='name'>{tenantWithDue.fullName}</h5>
          {!tenantWithDue.address ? (
            'propertyId is invalid'
          ) : (
            <p className='address'>{`${tenantWithDue.address.streetAddress}, ${tenantWithDue.address.city}, ${tenantWithDue.address.province} ${tenantWithDue.address.postalCode}`}</p>
          )}
        </div>
        <div className='fees'>
          <h6>Fees due:</h6>
          <ul>
            {tenantWithDue.fees.map((fee, index) => (
              <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                {fee.type} - ${fee.amount} (Due date: {getConvertedDate(fee.dueDate)})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
