import React from 'react';
import logo from '../../../src/images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="d-flex">
                    <div className="col-md-6 footer-image">
                        <img src={logo} alt=""/>
                        <br/>
                        <br/>
                        <br/>
                        <p>copyright by our Restaurant</p>
                    </div>
                    <div className="col-md-6 d-flex">
                        <ol>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ol>
                        <ol>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;