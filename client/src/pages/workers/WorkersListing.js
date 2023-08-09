import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { addWorkerAsync, getWorkersAsync } from '../../redux/workers/thunks';
import '../../shared/styles/listing.css';
import WorkerCard from '../../components/worker/WorkerCard';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { clearNestedObjectValues, getStandardizedProperty } from '../../shared/services/Helpers';
import { RequiredFields } from '../../shared/constants/worker/RequiredFields';
import HomeButton from '../../shared/components/HomeButton';

function WorkersListing() {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);
  const workersArray = Object.values(workers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [worker, setWorker] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    hourlyRate: '',
    trades: '',
  });

  useEffect(() => {
    dispatch(getWorkersAsync());
  }, [dispatch]);

  const handleAddWorker = () => {
    dispatch(addWorkerAsync(getStandardizedProperty(worker))).then(() => {
      clearNestedObjectValues(worker);
      setIsAddModalOpen(false);
      dispatch(getWorkersAsync());
    });
  };

  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Workers</h2>
            <br></br>
            <div className='btn btn-outline-primary' onClick={() => setIsAddModalOpen(true)}>
              Add worker
            </div>
            <HomeButton />
          </div>
          <div className='listing-cards'>
            {workersArray.map((worker) => (
              <WorkerCard key={`worker-${worker._id}-card`} worker={worker} />
            ))}
          </div>
        </div>
      </div>
      {isAddModalOpen && (
        <InputFormModal
          isModalOpen={isAddModalOpen}
          setIsModalOpen={setIsAddModalOpen}
          type={Tables.Worker}
          object={worker}
          setObject={setWorker}
          onSubmit={handleAddWorker}
          requiredFields={RequiredFields}
        />
      )}
    </div>
  );
}

export default WorkersListing;
