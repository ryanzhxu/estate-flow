import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "./modalWorker";
import {openModal} from "./modalWorker";
import modalWorker from "./modalWorker";
import {expSelectedWorker} from "./modalWorker";
import {deleteWorker} from "./workerSlice";

const WorkerDetail = () => {
    const select = useSelector(expSelectedWorker)
    const dispatch = useDispatch();
    //console.log(select.email)
    return(
        <div className='workerDetail'>
            <div className='details'>
                <h2 className="single-line">{select.name}</h2>
                <h2 className="single-line">{select.email}</h2>
                <h2 className="single-line">{select.phone}</h2>
                <h2 className="single-line"> {select.address}</h2>
                <h2 className="single-line">${select.hRate}/hour</h2>
                <h2 className="single-line">Trades: {select.trades}</h2>
                <h2 className="single-line">Postal Code: {select.pCode}</h2>
                <img src={select.imageURL} alt={select.name} className="WorkerImg" />
                <button
                    className="close"
                    onClick={ () => {
                        dispatch(closeModal());
                    } }>
                    CLOSE
                </button>
                <button
                    className="close"
                    onClick={ () => {
                        dispatch(deleteWorker(select.id))
                        dispatch(closeModal())
                    } }
                >
                    DELETE
                </button>


            </div>

        </div>
    )
}

export default WorkerDetail;