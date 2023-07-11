// eslint-disable-next-line
import { useState } from "react";
import React from "react";

import "../property/property.css";
//import "./property.css";

import Button from '@atlaskit/button';
import { useDispatch } from "react-redux";
import { addTenantAsync, getTenantsAsync } from "../../redux/tenants/tenantsThunks";

export default function AddPropertyForm({ handleCloseForm }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [lease, setLease] = useState('')
    // const [paymentHistory, setPaymentHistory] = useState('')

    const dispatch = useDispatch();
    
    const onClearClickedProp = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setLease('')
        // setPaymentHistory('')
    }

    const handleAddTenant = () => {
        const tenant = {
            firstName: '',
            lastName: '',
            email: email ?? 'guest@estateflow.ca',
            phoneNumber: phoneNumber ?? '604-123-4567',
            lease: lease,
            paymentHistory: [],
            propertyID: '',
        }

        dispatch(addTenantAsync(tenant))
            .then(() => {
                onClearClickedProp();
                handleCloseForm();
                dispatch(getTenantsAsync());
            })
    };

    return (
        <div className="form">
            <form className="add-tenant-form">

                <h4>Adding a new tenant</h4>

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
                
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    placeholder="604-123-4567"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label htmlFor="lease">Lease:</label>
                <input
                    type="file"
                    id="lease"
                    name="lease"
                    value={lease}
                    required
                    onChange={(e) => setLease(e.target.value)}
                />

                    <section className="buttons">
                    <Button appearance="subtle" onClick={handleAddTenant}>Add tenant</Button>
                    <Button appearance="subtle" onClick={onClearClickedProp}>Clear fields</Button>
                    <Button appearance="subtle" onClick={handleCloseForm}>Close</Button>
                </section>
            </form>
        </div>

    )

}