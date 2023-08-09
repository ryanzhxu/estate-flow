import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import {deletePropertyAsync, getPropertiesAsync, updatePropertyAsync} from '../../redux/properties/thunks';
import '../../shared/styles/listing.css';
import {Tables} from '../../shared/constants/Tables';
import {convertJsonToFormData, getMappedEditObject, getStandardizedProperty} from '../../shared/services/Helpers';
import InputFormModal from '../../shared/components/InputFormModal';
import {RequiredFields} from '../../shared/constants/property/RequiredFields';

const PropertyCardDetails = ({ property }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState(getMappedEditObject(property));

  const initialPropertyPhotoUrl = property.photos.length > 0 ? property.photos[0] : null;
  const [propertyPhoto, setPropertyPhoto] = useState(
      {file: null, url: initialPropertyPhotoUrl}
  );

  const handleEditProperty = () => {
    if (!editProperty._id) {
      editProperty._id = property._id;
    }

    const formData = new FormData();
    if (propertyPhoto.url !== initialPropertyPhotoUrl) {
        if (propertyPhoto.file) {
            console.log("Reached line 32")
            formData.append("photos", propertyPhoto.file)
        }
        editProperty.photos = [];
    } else {
        editProperty.photos = [initialPropertyPhotoUrl];
    }

    convertJsonToFormData(getStandardizedProperty(editProperty), formData);
    dispatch(updatePropertyAsync(formData)).then(() => {
      setIsEditModalOpen(false);
      setEditProperty(getMappedEditObject(editProperty));
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
          onImageUpload={(image) => setPropertyPhoto({file: image.file, url: image.url})}
          imageUrl={initialPropertyPhotoUrl}
          isEdit
        />
      )}
    </div>
  );
};

export default PropertyCardDetails;
