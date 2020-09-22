import React from 'react';
import fast from '../../../src/images/fast-delivery.png';
import home from '../../../src/images/home-delivery.png';
import responder from '../../../src/images/Responder.png';
import FastDelivery from '../../../src/images/FastDelivery.png';
import QuickResponder from '../../../src/images/QuickResponder.png';
import HomeDelivery from '../../../src/images/HomeDelivery.png';
import './OurSpeciality.css';



const OurSpeciality = () => {
    const cardStyle = {
        border:'none',
        boxShadow:'3px 3px 15px lightGray',
        borderRadius:'15px'
    }
    const footerStyle = {
        border:'none',
        borderRadius:'15px',
        margin: '3px auto',
        cursor:'pointer',
        color:' rgb(5, 224, 151)'
    }

    return (
        <>
            <div className="container cards">
                <h2>Why You Choose us!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Consequuntur culpa tempora quasi, suscipit saepe magni!</p>
                <div class="card-deck">
                    <div style={cardStyle} class="card">
                        <img src={FastDelivery} class="card-img-top cardImage" alt="..." />
                        <div class="card-body d-flex">
                            <img class="icon" src={fast} alt="" />
                            <div>
                                <h5 class="card-title">Fast Delivery</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div style={footerStyle} >
                            <h6 >See more</h6>
                        </div>
                    </div>
                    <div style={cardStyle} class="card">
                        <img src={QuickResponder} class="card-img-top cardImage" alt="..." />
                        <div class="card-body d-flex">
                            <img class="icon" src={responder} alt="" />
                            <div>
                                <h5 class="card-title">Quick Responder</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div style={footerStyle} >
                            <h6 >See more</h6>
                        </div>
                    </div>
                    <div style={cardStyle} class="card">
                        <img src={HomeDelivery} class="card-img-top cardImage" alt="..."></img>
                        <div class="card-body d-flex">
                            <img class="icon" src={home} alt="" />
                            <div>
                                <h5 class="card-title">Home Delivery</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div style={footerStyle} >
                            <h6 >See more</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurSpeciality;