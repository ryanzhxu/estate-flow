import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAddForm,
  closeUpdate,
  expSelectedWorker,
  openDetail,
} from '../../redux/workersRedux/workerDetailsReducer';
import { updateAsync } from '../../redux/workersRedux/workersThunks';
import WorkerTypes from './workerTypes';
import ImageUploader from '../ImageUploader';

export default function UpdateWorkerFrom() {
  const dispatch = useDispatch();
  const select = useSelector(expSelectedWorker);

  const id = select.id;
  const [name, setName] = useState(select.name);
  const [email, setEmail] = useState(select.email);
  const [phone, setPhone] = useState(select.phone);
  const [address, setAddress] = useState(select.address);
  const [hRate, setHRate] = useState(select.hRate);
  const [trades, setTrades] = useState(select.trades);
  const [pCode, setPCode] = useState(select.pCode);
  const [imageURL, setImageURL] = useState(select.imageURL);

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onHRateChanged = (e) => setHRate(e.target.value);
  const onTradesChanged = (e) => setTrades(e.target.value);
  const onPCodeChanged = (e) => setPCode(e.target.value);

  const onUpdateWorkerClicked = () => {
    if (name && email && phone && address && hRate && trades && pCode && imageURL) {
      dispatch(updateAsync({ id, name, email, phone, address, hRate, trades, pCode, imageURL }));
      dispatch(closeUpdate());
      dispatch(openDetail());
    } else {
      alert('All filed must be filled');
    }
  };
  const onCloseClicked = () => {
    dispatch(closeUpdate());
    dispatch(openDetail());
  };

  const handleImageSelected = (selectedImage) => {
    setImageURL(selectedImage);
  };

  return (
    <div className='form'>
      <h4>Add a New Worker</h4>
      <form id='AddWorkerForm'>
        <label htmlFor='workerName'>Worker Name:</label>
        <input type='text' id='workerName' name='workerName' value={name} onChange={onNameChanged} />

        <label htmlFor='email'>Email: </label>
        <input type='text' id='email' name='email' value={email} onChange={onEmailChanged} />

        <label htmlFor='phone'>phone: </label>
        <input type='text' id='phone' name='phone' value={phone} onChange={onPhoneChanged} />

        <label htmlFor='address'>Address: </label>
        <input type='text' id='address' name='address' value={address} onChange={onAddressChanged} />

        <label htmlFor='hRate'>Hourly Rate: </label>
        <input type='number' step='5' min='0' id='hRate' name='hRate' value={hRate} onChange={onHRateChanged} />

        <label htmlFor='trades'>Trades: </label>
        <select id='trades' name='trades' value={trades} onChange={onTradesChanged}>
          {Object.values(WorkerTypes).map((workerType, index) => (
            <option key={index} value={workerType}>
              {workerType}
            </option>
          ))}
        </select>

        <label htmlFor='pCode'>Postal Code: </label>
        <input type='text' id='pCode' name='pCode' value={pCode} onChange={onPCodeChanged} />

        <label htmlFor='imageURL'>Image: </label>
        <ImageUploader imageURL={imageURL} onImageSelected={handleImageSelected} />

        <section className='button-container'>
          <button
            type='button'
            onClick={() => {
              onUpdateWorkerClicked();
              dispatch(closeAddForm());
            }}>
            SUBMIT Worker
          </button>

          <button
            className='close'
            onClick={() => {
              onCloseClicked();
            }}>
            CLOSE
          </button>
        </section>
      </form>
    </div>
  );
}
