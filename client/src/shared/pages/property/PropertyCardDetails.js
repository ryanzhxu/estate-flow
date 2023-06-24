import React, { useCallback, useState } from 'react';
import Button from '@atlaskit/button';
import { useDispatch } from 'react-redux';
import { deletePropertyAsync, getPropertiesAsync } from '../../../redux/properties/thunks';
import EditPropertyForm from '../../../components/property/EditPropertyForm';

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProperty, setEditProperty] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleOpenModal = () => {
    openModal();
  }

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
            onClick={handleOpenModal}
          // onClick={() => {
          //   handleDeleteProperty(property.id);
          // }}
          >
            Delete
          </Button>

          <ModalTransition>
            {isOpen && (
              <Modal onClose={closeModal}>
                <ModalHeader>
                  <ModalTitle appearance="danger">
                    You're about to delete this page
                  </ModalTitle>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Before you delete it permanently, there's some things you should
                    know:
                  </p>
                  <ul>
                    <li>4 pages have links to this page that will break</li>
                    <li>2 child pages will be left behind in the page tree</li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button appearance="subtle" onClick={closeModal}>Cancel</Button>
                  <Button appearance="danger" onClick={() => { handleDeleteProperty(property.id) }} autoFocus>
                    Delete
                  </Button>
                </ModalFooter>
              </Modal>
            )}
          </ModalTransition>

        </div>
      </div>
      {showEditForm && <EditPropertyForm property={editProperty} handleCloseEditForm={handleCloseEditForm} />}
    </div>
  );
};

export default PropertyCardDetails;
