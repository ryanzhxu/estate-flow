import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddForm, closeUpdate, expSelectedWorker, openDetail } from '../../redux/workers/workerDetailsReducer';
import { updateWorkerAsync } from '../../redux/workers/thunks';
import WorkerTypes from './workerTypes';
import ImageUploader from '../ImageUploader';

export default function UpdateWorkerFrom() {
  const dispatch = useDispatch();
  const select = useSelector(expSelectedWorker);

  const _id = select._id;
  const [name, setName] = useState(select.name);
  const [email, setEmail] = useState(select.email);
  const [phone, setPhone] = useState(select.phone);
  const [address, setAddress] = useState(select.address);
  const [hRate, setHRate] = useState(select.hRate);
  const [trades, setTrades] = useState(select.trades);
  const [postalCode, setPostalCode] = useState(select.postalCode);
  const [imageURL, setImageURL] = useState(select.imageURL);

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onHRateChanged = (e) => setHRate(e.target.value);
  const onTradesChanged = (e) => setTrades(e.target.value);
  const onPostalCodeChanged = (e) => setPostalCode(e.target.value);

  const onUpdateWorkerClicked = () => {
    let imageUrlInput = imageURL
      ? imageURL
      : 'https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp';
    if (name && email && phone && address && hRate && trades && postalCode && imageUrlInput) {
      dispatch(updateWorkerAsync({ _id, name, email, phone, address, hRate, trades, postalCode, imageUrlInput }));
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

        <label htmlFor='postalCode'>Postal Code: </label>
        <input type='text' id='postalCode' name='postalCode' value={postalCode} onChange={onPostalCodeChanged} />

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
