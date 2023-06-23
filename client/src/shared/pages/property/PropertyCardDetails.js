import React, { useState } from 'react';
import Button from '@atlaskit/button';
import { useDispatch } from 'react-redux';
import { deletePropertyAsync, getPropertiesAsync } from '../../../redux/properties/thunks';
import EditPropertyForm from '../../../components/property/EditPropertyForm';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);

  const handleDeleteProperty = (id) => {
    dispatch(deletePropertyAsync(id)).then(() => {
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
    <div className="property-card-content">
      <span>{property.type}</span>
      <h4 style={{ whiteSpace: 'nowrap' }}>{property.address.streetAddress}</h4>
      <p>{`${property.address.city}, ${property.address.province} ${property.address.postalCode}`}</p>
      <div className="property-card-footer">
        {/* <p>{`id: ${property.id}`}</p> */}
        <div className="property-card-footer-buttons">
          <Button onClick={handleOpenEditForm}>Edit</Button>
          <Button
            appearance="danger"
            onClick={() => {
              handleDeleteProperty(property.id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      {showEditForm && <EditPropertyForm property={editProperty} handleCloseEditForm={handleCloseEditForm} />}
    </div>
  );
};

export default PropertyCardDetails;
