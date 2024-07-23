import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                </div>

                <div className='rememberMe-forgotPass'>
                    <label> <input type='checkbox'/>Remember me </label>
                    <a href='#'>Forgot password?</a>
                </div>

                <div className='submit'>
                    <button type='submit'>Login</button>
                </div>

                <div className='user-registration'>
                    <p>Don't have an account? <a href='#'>Sign up</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;