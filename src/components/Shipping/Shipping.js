import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleNameBlue = e => {
        setName(e.target.value);
    }

    const handleAddressBlue = e => {
        setAddress(e.target.value);
    }
    const handlePhoneBlue = e => {
        setPhone(e.target.value);
    }
    const handleSubmitForm = e => {
        e.preventDefault();

    }
    console.log(email, name, address, phone);
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitForm}>
                <h2 className='form-title'>Shipping Info</h2>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleNameBlue} type="text" name="name" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlue} type="text" name="address" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="phone">Phone</label>
                    <input onBlur={handlePhoneBlue} type="text" name="phone" id="" required />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <input className='form-submit' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Shipping;