import React from 'react';
import { Modal } from 'react-bootstrap';

const DeleteConfirmationModal = ({ isOpen, onCancel, onDelete, type, modalContent }) => {
  return (
    <Modal show={isOpen} onHide={onCancel} centered>
      <Modal.Header className='bg-danger text-white'>
        <Modal.Title>{`You're about to delete this ${type}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-content panel-warning'>{modalContent}</Modal.Body>
      <Modal.Footer>
        <div className='btn btn-outline-danger' onClick={onDelete}>
          Delete
        </div>
        <div className='btn btn-outline-primary' onClick={onCancel}>
          Cancel
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
