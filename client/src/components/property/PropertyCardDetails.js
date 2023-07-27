import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { deletePropertyAsync, getPropertiesAsync } from '../../redux/properties/thunks';
import PropertyForm from './PropertyForm';
import '../../shared/styles/listing.css';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProperty = () => {
    dispatch(deletePropertyAsync(property._id)).then(() => {
      dispatch(getPropertiesAsync());
      setIsOpen(false);
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

  const modalContent = (
    <div>
      <p>
        Before you delete this property, a friendly reminder that all tenants associated with this property will also be
        removed.
      </p>
    </div>
  );

  return (
    <div className='listing-card-content'>
      <span>{property.type}</span>
      <h4 style={{ whiteSpace: 'nowrap' }}>{property.address.streetAddress}</h4>
      <p>{`${property.address.city}, ${property.address.province} ${property.address.postalCode}`}</p>
      <div className='listing-card-footer'>
        <div className='listing-card-footer-buttons'>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              handleOpenEditForm();
            }}>
            Edit
          </button>
          <button
            className='btn btn-outline-danger'
            onClick={() => {
              setIsOpen(true);
            }}>
            Delete
          </button>
        </div>
      </div>
      {showEditForm && <PropertyForm editProperty={editProperty} handleCloseForm={handleCloseEditForm} />}
      <DeleteConfirmationModal
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onDelete={handleDeleteProperty}
        modalContent={modalContent}
        modalTitle="You're about to delete this property"
      />
    </div>
  );
};

export default PropertyCardDetails;
