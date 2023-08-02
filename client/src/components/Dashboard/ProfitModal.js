import {Button, Modal} from "react-bootstrap";
import React from "react";

function ProfitModal({mortgageValue, totalRent, isOpen, onClose}) {
    const profit = totalRent - mortgageValue;
    return (
        <Modal className="modal-sm" show={isOpen}>
            <Modal.Body>
                <h6>Result</h6>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <p className='mb-0'>Total Rent</p>
                        </div>
                        <div className="col-sm-4">
                            <p className='text-muted mb-0'>${totalRent}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className='mb-0'>Mortgage Fee</p>
                        </div>
                        <div className="col-sm-4">
                            <p className='text-muted mb-0'>${mortgageValue}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className='mb-0'>Profit Per Month</p>
                        </div>
                        <div className="col-sm-4">
                            <p className='text-muted mb-0'>${profit}</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Button onClick={onClose}>Close</Button>
        </Modal>
    )
}

export default ProfitModal;