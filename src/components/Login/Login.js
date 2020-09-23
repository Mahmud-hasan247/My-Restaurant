import React from 'react';
import logo from '../../../src/images/logo2.png';
import './Login.css';

const Login = () => {
    return (
        <>
        <div className='form'>
            <img src={logo} alt=""/>
            <form >
                <input className='input' type="text" placeholder='  Name' ></input><br/>
                <input className='input'  type="text" placeholder='  Email' ></input><br/>
                <input className='input'  type="password" placeholder='  Password' ></input><br/>
                <input className='input'  type="password" placeholder='  Confirm Password'></input><br/>
                <input className='input submit' type="submit" value='Sign Up'></input>
            </form>
            <p className='signIn'>Already have an account? <span id='span'>Sign in!</span> </p>
        </div>
        </>
    );
};

export default Login;