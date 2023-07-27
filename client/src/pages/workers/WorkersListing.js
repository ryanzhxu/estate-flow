import { useSelector, useDispatch } from 'react-redux';
import WorkerDetail from '../../components/worker/workerDetail';
import AddWorkerForm from '../../components/worker/AddWorkerForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
// import '../../components/worker/worker.css';
import { Link } from 'react-router-dom';
import { getWorkerAsync, getWorkersAsync, sortFilterWorkerAsync } from '../../redux/workers/thunks';
import {
  openAddForm,
  openDetail,
  isDetailOpen,
  isADDOpen,
  isUpdateOpen,
  expSelectedWorker,
} from '../../redux/workers/workerDetailsReducer';
import UpdateWorkerFrom from '../../components/worker/UpdateWorkerFrom';
import WorkerTypes from '../../components/worker/workerTypes';

import '../../shared/styles/listing.css';

function WorkersListing() {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);
  const workersArray = Object.values(workers);
  const selectedWorker = useSelector(expSelectedWorker);

  useEffect(() => {
    dispatch(getWorkersAsync());
  }, [dispatch]);

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

  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>Workers</h2>
            <div className='btn btn-outline-primary' onClick={undefined}>
              Add worker
            </div>
          </div>
          <div className='listing-cards'>
            {workersArray.map((worker) => (
              <div className='listing-card'>
                <span>
                  <img
                    alt={worker.id}
                    className='listing-card-image'
                    src='https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp'
                  />
                </span>
                <div className='listing-card-content'>
                  <span>{worker.trades}</span>
                  <h4 className='scrollable-text'>{worker.name}</h4>
                  <p>
                    <span>Phone: {worker.phone}</span>
                    <br />
                    <span>Hourly rate: ${worker.hRate}/hr</span>
                  </p>
                  <div className='listing-card-footer'>
                    <div className='listing-card-footer-buttons'>
                      <button className='btn btn-outline-primary' onClick={undefined}>
                        Edit
                      </button>
                      <button className='btn btn-outline-danger' onClick={undefined}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div style={{ padding: '25px' }}>
    //   <div className='worker-top-section'>
    //     <h3>Current Workers</h3>
    //     <Link to='/'>
    //       <button className='btn btn-outline-primary'>Back</button>
    //     </Link>
    //   </div>

    //   <label htmlFor='trades'>Trades: </label>
    //   <select id='trades' name='trades' value={trades} onChange={onTradesChanged}>
    //     {Object.values(WorkerTypes).map((workerType, index) => (
    //       <option key={index} value={workerType}>
    //         {workerType}
    //       </option>
    //     ))}
    //   </select>

    //   <select value={sortOption} onChange={onSortOption}>
    //     <option value=''>No Sorting</option>
    //     <option value='Ascending'>Hourly Rate Ascending</option>
    //     <option value='Descending'>Hourly Rate Descending</option>
    //   </select>

    //   <section className='button-container'>
    //     <button type='button' onClick={onFilterClicked}>
    //       Filter & Sort
    //     </button>
    //   </section>

    //   <section className='sectionContainer'>
    //     {renderedWorkers}
    //     {addNew}
    //     {detailIsOpen && <WorkerDetail />}
    //     {addIsOpen && <AddWorkerForm />}
    //     {UpdateIsOpen && <UpdateWorkerFrom />}
    //   </section>
    // </div>
  );
}

export default WorkersListing;
