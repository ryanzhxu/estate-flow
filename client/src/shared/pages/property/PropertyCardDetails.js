import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deletePropertyAsync, getPropertiesAsync} from '../../../redux/properties/thunks';
import PropertyForm from '../../../components/property/PropertyForm';
import ConfirmationModal from "./ConfirmationModal";

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProperty = () => {
    dispatch(deletePropertyAsync(property._id)).then(() => {
      dispatch(getPropertiesAsync());
      setIsOpen(false)
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
        <p>Before you delete this property, a friendly reminder that:</p>
        <ul>
          <li>
            Property address: {property.address.streetAddress} {property.address.city},{' '}
            {property.address.province} {property.address.postalCode}
          </li>
          {property.tenants.length === 0 ? (
              <li>There is currently no tenants living in this property</li>
          ) : (
              <li>
                There {property.tenants.length === 1 ? 'is' : 'are'} currently {property.tenants.length} tenant
                {property.tenants.length > 1 && 's'} attached to this property.
              </li>
          )}
        </ul>
      </div>
  );

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
      <ConfirmationModal
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onConfirm={handleDeleteProperty}
          property={property}
          modalContent={modalContent}
          modalTitle="You're about to delete this property"
      />
    </div>
  );
};

export default PropertyCardDetails;
