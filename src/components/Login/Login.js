import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlue = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitForm}>
                <h2 className='form-title'>Login</h2>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlue} type="password" name="password" id="" required />
                </div>
                <p style={{ color: "red" }}>{error?.message}</p>
                <input className='form-submit' type="submit" value="Login" />
                <div>
                    <p className='text'>
                        New to Ema-John? <Link className='signup' to="/signup">Create New Account</Link>
                    </p>
                </div>
                <div className='or-part'>
                    <div className="line"></div>
                    <div className="text">Or</div>
                    <div className="line"></div>
                </div>

                <div className="google">
                    <img className='google-icon' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <p>Sign In Google</p>
                </div>
            </form>

        </div>
    );
};

export default Login;