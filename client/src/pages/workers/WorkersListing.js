import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { addWorkerAsync, getWorkersAsync, sortFilterWorkerAsync } from '../../redux/workers/thunks';
import {expSelectedWorker, isDetailOpen} from '../../redux/workers/workerDetailsReducer';
import '../../shared/styles/listing.css';
import WorkerCard from '../../components/worker/WorkerCard';
import InputFormModal from '../../shared/components/InputFormModal';
import { Tables } from '../../shared/constants/Tables';
import { clearNestedObjectValues, getStandardizedProperty } from '../../shared/services/Helpers';
import { RequiredFields } from '../../shared/constants/worker/RequiredFields';
import WorkerDetail from "../../components/worker/workerDetail";

function WorkersListing() {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);
  const workersArray = Object.values(workers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const detailIsOpen = useSelector(isDetailOpen)


  const worker = {
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
  };

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
            <div className='btn btn-outline-primary' onClick={() => setIsAddModalOpen(true)}>
              Add worker
            </div>
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
          onSubmit={handleAddWorker}
          requiredFields={RequiredFields}
        />
      )}
      {detailIsOpen && <WorkerDetail />}
    </div>
  );

  // const detailIsOpen = useSelector(isDetailOpen);
  // const UpdateIsOpen = useSelector(isUpdateOpen);
  // const addIsOpen = useSelector(isADDOpen);

  // const renderedWorkers = workers.map((worker) => (
  //   <article className='divItem' key={worker._id}>
  //     <h4 className='single-line' id={worker._id}>
  //       {worker.name}
  //     </h4>
  //     <img src={worker.imageUrlInput} alt={worker.name} className='WorkerImg' />
  //     <button
  //       className='btn btn-outline-dark'
  //       style={{ marginTop: '10px' }}
  //       onClick={() => {
  //         dispatch(getWorkerAsync(worker._id));
  //         dispatch(openDetail());
  //       }}>
  //       Details
  //     </button>
  //   </article>
  // ));

  // const addNew = (
  //   <article className='divItem'>
  //     <h4 className='single-line'>New worker</h4>
  //     <img
  //       src={'https://5b0988e595225.cdn.sohucs.com/images/20171113/0108899329264ee5b833f70945195e66.jpeg'}
  //       alt={'Empty Worker'}
  //       className='WorkerImg'
  //     />
  //     <button
  //       className='btn btn-primary'
  //       style={{ marginTop: '10px' }}
  //       onClick={() => {
  //         dispatch(openAddForm());
  //       }}>
  //       Add worker
  //     </button>
  //   </article>
  // );

  // const onSortOption = (e) => setSortOption(e.target.value);
  // const onTradesChanged = (e) => setTrades(e.target.value);
  // const [trades, setTrades] = useState('');
  // const [sortOption, setSortOption] = useState('');
  // const onFilterClicked = () => {
  //   if (trades) {
  //     dispatch(sortFilterWorkerAsync({ tradeType: trades, sortOption }));
  //   } else {
  //     alert('All filed must be filled');
  //   }
  // };
}

export default WorkersListing;
