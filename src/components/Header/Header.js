import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-light ">
            <Link to='/home'>
                    <img src={logo} alt=""></img>
                </Link>
                <form class="form-inline">
                   <Link to="/login">
                   <button className="all-buttons">Login</button>
                   </Link>
                        <Link to="/signup">
                        <button class="all-buttons" >Sign Up</button></Link>
                </form>
            </nav>
        </>
    );
};

export default Header;