import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { deletePropertyAsync, getPropertiesAsync, updatePropertyAsync } from '../../redux/properties/thunks';
import '../../shared/styles/listing.css';
import { Tables } from '../../shared/constants/Tables';
import { clearNestedObjectValues, getMappedEditObject, getStandardizedProperty } from '../../shared/services/Helpers';
import InputFormModal from '../../shared/components/InputFormModal';
import { RequiredFields } from '../../shared/constants/property/RequiredFields';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState(getMappedEditObject(property));

  const handleEditProperty = () => {
    if (!editProperty._id) {
      editProperty._id = property._id;
    }

    dispatch(updatePropertyAsync(getStandardizedProperty(editProperty))).then(() => {
      clearNestedObjectValues(editProperty);
      setIsEditModalOpen(false);
      dispatch(getPropertiesAsync());
    });
  };

  const handleDeleteProperty = () => {
    dispatch(deletePropertyAsync(property._id)).then(() => {
      dispatch(getPropertiesAsync());
      setIsDeleteModalOpen(false);
    });
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
          <button className='btn btn-outline-primary' onClick={() => setIsEditModalOpen(true)}>
            Edit
          </button>
          <button className='btn btn-outline-danger' onClick={() => setIsDeleteModalOpen(true)}>
            Delete
          </button>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteProperty}
        modalContent={modalContent}
        type={Tables.Property}
      />
      {isEditModalOpen && (
        <InputFormModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          type={Tables.Property}
          object={editProperty}
          setObject={setEditProperty}
          requiredFields={RequiredFields}
          onSubmit={handleEditProperty}
          isEdit
        />
      )}
    </div>
  );
};

export default PropertyCardDetails;
