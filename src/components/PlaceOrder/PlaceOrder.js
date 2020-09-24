import React from 'react';
import OrderedItems from '../OrderedItems/OrderedItems';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex full-page">
                    <div className="col-6">
                        <h4 id='h4'>Edit Delivery Details</h4>
                        <form className="delivery-address">
                            <input className='input-box' placeholder="" type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box' type="text"></input> <br/>
                            <input className='input-box submit' type="submit" value='Save & Continue'></input> 
                        </form>
                    </div>
                    <div className="col-6 order-detail" style={{paddingLeft:'200px'}}>
                        <small>From <span id="restaura">Gulshan Plaza Restaura GPR</span> </small><br/>
                        <small>Arriving in 20-30 min</small><br/>
                        <small>107 Road no 8</small><br/>
                        <OrderedItems></OrderedItems>
                        <div className="d-flex payment-detail">
                            <div className="">
                                <small>SubTotal:</small><br/>
                                <small>Tax:</small><br/>
                                <small>Delivery fee:</small><br/>
                                <h6>Total:</h6>
                            </div>
                            <div className="amounts">
                                <small>$320</small><br/>
                                <small>$5</small><br/>
                                <small>$10</small><br/>
                                <h6>$335</h6>
                            </div>
                        </div>
                        <input className='place-order' type="submit" value='Place Order'></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;