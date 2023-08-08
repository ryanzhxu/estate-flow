import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWorkerAsync, getWorkersAsync, updateWorkerAsync } from '../../redux/workers/thunks';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { RequiredFields } from '../../shared/constants/worker/RequiredFields';
import {
  getFormattedPhoneNum,
  getMappedEditObject,
  getStandardizedProperty,
} from '../../shared/services/Helpers';
import DeleteConfirmationModal from '../property/DeleteConfirmationModal';

const WorkerCardDetails = ({ worker }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editWorker, setEditWorker] = useState(getMappedEditObject(worker));

  const handleEditWorker = () => {
    if (!editWorker._id) {
      editWorker._id = worker._id;
    }

    dispatch(updateWorkerAsync(getStandardizedProperty(editWorker))).then(() => {
      setIsEditModalOpen(false);
      setEditWorker(getMappedEditObject(editWorker));
      dispatch(getWorkersAsync());
    });
  };

  const handleDeleteWorker = () => {
    dispatch(deleteWorkerAsync(worker._id)).then(() => {
      dispatch(getWorkersAsync());
      setIsDeleteModalOpen(false);
    });
  };

  const deleteWorkerModalContent = (
    <div>
      <p>
        You are about to delete the worker {worker.firstName} {worker.lastName}. This action cannot be undone.
      </p>
      <p>Are you sure you want to proceed with this deletion?</p>
    </div>
  );

  return (
    <div className='listing-card-content'>
      <span>{worker.trades}</span>
      <h4 className='scrollable-text'>
        {worker.firstName} {worker.lastName}
      </h4>
      <p>
        <span>{getFormattedPhoneNum(worker.phoneNumber)}</span>
        <br />
        <span>Hourly rate: ${worker.hourlyRate}/hr</span>
      </p>
      <div className='listing-card-footer'>
        <div className='listing-card-footer-buttons'>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              setIsEditModalOpen(true);
            }}>
            Edit
          </button>
          <button
            className='btn btn-outline-danger'
            onClick={() => {
              setIsDeleteModalOpen(true);
            }}>
            Delete
          </button>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteWorker}
        type={Tables.Worker}
        modalContent={deleteWorkerModalContent}
      />
      {isEditModalOpen && (
        <InputFormModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          type={Tables.Worker}
          object={editWorker}
          setObject={setEditWorker}
          requiredFields={RequiredFields}
          onSubmit={handleEditWorker}
          isEdit
        />
      )}
    </div>
  );
};

export default WorkerCardDetails;
