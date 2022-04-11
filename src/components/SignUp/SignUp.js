import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlue = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordBlue = e => {
        setConfirmPassword(e.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate("/login");
    }


    const handleSubmitForm = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password not match");
            return;
        }

        if (password.length < 6 || confirmPassword.length < 6) {
            setError("Password should be 6 character or longer.");
            return;
        }

        setError("");

        createUserWithEmailAndPassword(email, password);


    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitForm}>
                <h2 className='form-title'>Sign Up</h2>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlue} type="password" name="password" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlue} type="password" name="confirmPassword" id="" required />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
                <div>
                    <p className='text'>
                        Already have a account? <Link className='signup' to="/login">Login</Link>
                    </p>
                </div>
            </form>

        </div>
    );
};

export default SignUp;