import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePropertyAsync, getPropertiesAsync } from '../../../redux/properties/thunks';
import PropertyForm from '../../../components/property/PropertyForm';
import { Modal } from 'react-bootstrap';

import Button from '@atlaskit/button';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProperty = () => {
    dispatch(deletePropertyAsync(property._id)).then(() => {
      dispatch(getPropertiesAsync());
    });
  };

  const handleOpenEditForm = () => {
    if (!editProperty || editProperty.Id !== property.id) {
      setEditProperty(property);
      setShowEditForm(true);
    }
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setEditProperty(null);
  };

  return (
    <div className='property-card-content'>
      <span>{property.type}</span>
      <h4 style={{ whiteSpace: 'nowrap' }}>{property.address.streetAddress}</h4>
      <p>{`${property.address.city}, ${property.address.province} ${property.address.postalCode}`}</p>
      <div className='property-card-footer'>
        <div className='property-card-footer-buttons'>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              handleOpenEditForm();
            }}>
            Edit
          </button>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setIsOpen(true);
            }}>
            Delete
          </div>

          <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
            <Modal.Header className='bg-danger text-white'>
              <Modal.Title>You're about to delete this property</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-content panel-warning'>
              <p>Before you delete it permanently, there's some things you should know:</p>
              <ul>
                {property.tenants.length === 0 ? (
                  <li>There is currently no tenants living in this property</li>
                ) : (
                  <li>
                    There are currently {property.tenants?.length} tenant{property.tenants?.length > 1 && 's'} attached
                    to this property.
                  </li>
                )}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button appearance='subtle' onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button appearance='danger' onClick={handleDeleteProperty}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {showEditForm && <PropertyForm editProperty={editProperty} handleCloseForm={handleCloseEditForm} />}
    </div>
  );
};

export default PropertyCardDetails;
