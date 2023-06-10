import {useState} from "react";
import {useDispatch} from "react-redux";
import {addWorker} from "./workerSlice";
import WorkerTypes from "./workerTypes";
import {closeAddModal, closeModal} from "./modalWorker";

export default function AddWorkerForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [hRate, setHRate] = useState('')
    const [trades, setTrades] = useState('')
    const [pCode, setPCode] = useState('')
    const [imageURL, setImageURL] = useState('')


    const onNameChanged = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPhoneChanged = e => setPhone(e.target.value)
    const onAddressChanged = e => setAddress(e.target.value)
    const onHRateChanged = e => setHRate(e.target.value)
    const onTradesChanged = e => setTrades(e.target.value)
    const onPCodeChanged = e => setPCode(e.target.value)
    const onImageURLChanged = e => setImageURL(e.target.value)


    const onSaveWorkerClicked = () => {
        let imageUrlInput = imageURL ? imageURL : "https://pic4.zhimg.com/80/v2-32636e587d66426cc682e74eaafd2163_1440w.webp";
        if (name && email && phone && address && hRate && trades && pCode){
            dispatch(
                addWorker(name, email, phone, address, hRate, trades, pCode, imageUrlInput)
            )
            onClearClicked()

        }else{
            console.log(name+ email+phone+address+ hRate+trades+pCode)
            alert("All filed must be filled")
        }
    }
    const onClearClicked = () => {
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setHRate('')
        setTrades('')
        setPCode('')
        setImageURL('')



    }

    /*const onDeleteClicked = () => {
        dispatch(
            deleteAll()
        )

    }*/

    return (
        <div className="form">
            <h4>Add a New Worker</h4>
            <form id = "AddWorkerForm">

                <label htmlFor="workerName">Worker Name:</label>
                <input
                    type="text"
                    id="workerName"
                    name="workerName"
                    value={name}
                    onChange={onNameChanged}
                />

                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onEmailChanged}
                />

                <label htmlFor="phone">phone: </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={onPhoneChanged}
                />

                <label htmlFor="address">Address: </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={onAddressChanged}
                />

                <label htmlFor="hRate">Hourly Rate: </label>
                <input
                    type="number"
                    step="5" min="0"
                    id="hRate"
                    name="hRate"
                    value={hRate}
                    onChange={onHRateChanged}
                />

                <label htmlFor="trades">Trades: </label>
                <select
                    id="trades"
                    name="trades"
                    value={trades}
                    onChange={onTradesChanged}
                >
                    {Object.values(WorkerTypes).map((workerType, index) => (
                        <option key={index} value={workerType}>
                            {workerType}
                        </option>
                    ))}
                </select>

                <label htmlFor="pCode">Postal Code: </label>
                <input
                    type="text"
                    id="pCode"
                    name="pCode"
                    value={pCode}
                    onChange={onPCodeChanged}
                />

                <label htmlFor="imageURL">imageURL: </label>
                <input
                    type="url"
                    id="imageURL"
                    name="imageURL"
                    value={imageURL}
                    onChange={onImageURLChanged}
                />

                <section className="button-container">
                    <button
                        type="button"
                        onClick={() => {
                            onSaveWorkerClicked();
                           // dispatch(closeAddModal());
                        }}
                    >
                        Add Worker
                    </button>

                    <button
                        type="button"
                        onClick={onClearClicked}
                    >Clear
                    </button>
                    <button
                        className="close"
                        onClick={ () => {
                            dispatch(closeAddModal());
                        } }>
                        CLOSE
                    </button>



                </section>

            </form>
        </div>


    )

}