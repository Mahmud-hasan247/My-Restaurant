import React from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex full-page">
                    <div className="col-6">
                        <h4>Edit Delivery Details</h4>
                        <form className="delivery-address">
                            <input className='input-box' placeholder="" type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box submit' type="submit" value='Save & Continue'></input> 
                        </form>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;