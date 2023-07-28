// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import '../property/property.css';
//import "./property.css";
import Button from '@atlaskit/button';
// import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux';
import {
  clearNestedObjectValues,
  getSelectedIndex,
  getSelectOptions,
  saveValueToObject,
} from '../../shared/services/Helpers';
import {
  addTenantAsync,
  getTenantsFromPropertyAsync,
  updateTenantAsync
} from '../../redux/tenants/tenantsThunks';
import {closeTenantADD} from '../../redux/tenants/tenantsReducer';
import { LeaseTypes } from '../../shared/constants/tenant/LeaseTypes';
import InputField from '../../shared/components/InputField';

export default function AddTenantForm({propertyId, editingTenant}) {
  const tenant = {
    firstName: editingTenant?.firstName ?? '',
    lastName: editingTenant?.lastName ?? '',
    email: editingTenant?.email ?? '',
    phoneNumber: editingTenant?.phoneNumber ?? '',
    birthDate: editingTenant?.birthDate ?? '',
    occupation: editingTenant?.occupation ?? '',
    lease: editingTenant?.lease
      ? {
          startDate: editingTenant.lease.startDate ?? '',
          endDate: editingTenant.lease.endDate ?? '',
          term: editingTenant.lease.term ?? '',
          type: editingTenant.lease.type ?? '',
        }
      : {
          startDate: '',
          endDate: '',
          term: '',
          type: '',
        },
  }
  const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber',
                          'startDate', 'endDate', 'term', 'type'];
  const inputFields = Object.keys(tenant);
  const leaseFields = Object.keys(tenant.lease);

  const dispatch = useDispatch();

  const handleAddTenant = () => {
    const tenant2 = {
      firstName: tenant.firstName,
      lastName: tenant.lastName,
      email: tenant.email,
      phoneNumber: tenant.phoneNumber,
      birthDate: tenant.birthDate,
      occupation: tenant.occupation,
      lease: tenant.lease,
      paymentHistory: [],
      propertyId: propertyId,
    } 
    dispatch(addTenantAsync(tenant2)).then(() => {
      clearNestedObjectValues(tenant2);
      clearNestedObjectValues(tenant);
      handleCloseForm();
      dispatch(getTenantsFromPropertyAsync(propertyId));
    });
  };

  const handleCloseForm = () => {
    dispatch(closeTenantADD());
  };

  const handleEditTenant = () => {
    if (editingTenant && editingTenant._id) {
      tenant._id = editingTenant._id;
    }

    dispatch(updateTenantAsync(tenant)).then(() => {
      clearNestedObjectValues(tenant);
      handleCloseForm();
      dispatch(getTenantsFromPropertyAsync(propertyId));
    });
  };

  return (
    <div className='form'>
      <form className='add-tenant-form'>
        <h4>Add Tenant</h4>
        {inputFields.map((field) => {
          if (field === 'lease') {
            return (
              <div className='lease-fields' key={field}>
                {leaseFields.map((leaseField) => (
                  <div key={leaseField}>
                    {leaseField === 'type' ? (
                      <InputField
                        field={"Leasing " + leaseField}
                        options={getSelectOptions(LeaseTypes)}
                        defaultValue={getSelectedIndex(LeaseTypes, tenant.lease.type)}
                        onChange={(selectedOption) => {
                          tenant.lease[leaseField] = selectedOption.value;
                        }}
                        isRequired={requiredFields.indexOf(leaseField) > -1}
                        isSelect
                      />
                    ) : (
                      <InputField
                        field={leaseField === 'startDate' ? 'Start Date' : leaseField === 'endDate' ? 'End Date' : "Lease " + leaseField}
                        type={leaseField === 'startDate' || leaseField === 'endDate' ? 'date' : 'text'}
                        defaultValue={tenant.lease[leaseField]}
                        isRequired={requiredFields.indexOf(leaseField) > -1}
                        onChange={(e) => saveValueToObject(tenant, leaseField, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={field}>
                  <InputField
                    field={field}
                    defaultValue={tenant[field]}
                    type={field === 'phoneNumber' ? 'tel' : field === 'birthDate' ? 'date' : 'text'}
                    isRequired={requiredFields.indexOf(field) > -1}
                    onChange={(e) => saveValueToObject(tenant, field, e.target.value)}
                  />
              </div>
            );
          }
        })}
        <section className='buttons'>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={editingTenant ? handleEditTenant : handleAddTenant}>
            Submit
          </button>
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={() => {
              clearNestedObjectValues(tenant);
            }}>
            Clear
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={handleCloseForm}>
            Close
          </button>
        </section>
      </form>
    </div>
  );
}