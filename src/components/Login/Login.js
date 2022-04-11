import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
const Login = () => {
    return (
        <div className='form-container'>
            <form>
                <h2 className='form-title'>Login</h2>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>

                <input className='form-submit' type="button" value="Login" />
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