import React, { useState } from 'react';
import './OrderedItems.css';

const OrderedItems = () => {
    const [amount, setAmount] = useState(0);
    const increment = () => {
        setAmount(amount + 1)
    }
    const decrement = () => {
        setAmount(amount - 1)
    }
    return (
        <>
            <div className="item-box d-flex">
                <img src="https://lh3.googleusercontent.com/WA9ogMKsQwPOVNoK2MyKds_izCILSGMqDIR59IW5D3YrluhfkZ_MaOdw8jfm3HDyQc0P35yrEzLQFcUH_Di0pkVJLiFygh45uLdutBwnF6nb6D2k-FJE7j0rqub7P0er8SpiYY7JDHZYK_TEyyQVvHcEpKmFLGMQlbPBDRPm-MV-nJizQ8KtWhvFGfy1DLnu1HHqBmimd8vWcnDnrsOYzmStnf6fSlIlSePKaRR1lUQLhs_8kzHyxcdYHsLXfAL1HFBUaAX-anIZX6bjn_m-UFlyspRXXFk7ycJ3_z4oJT7PH4kUhcYqTGR-wxyipiD5PVzOaHZq6EDjSwQiGq7_1jBVr89QGRDFy2REYmcv_TcLXNlhpx5BwAcDTZp6rcM0Fsr3QHt2KWfJxfhaIQkNW9qE9R_4JphTmxmujETmDTBFF8Eso6sNPpG3AdlJk9ocWDMlmYm25ook8q0spEUGkoizYz46kDjvmrysy_74m6HAz_BkPtSXpwc7MssOdhUivKcJu_RMhhgb-jJQQAles51qHMJfDXr-LmOlvXFZ5evJXGJ5RSTaOVwke_fcU1-Xbb6xtzUvpXyzySyW_KD9chH7ExLJljgB28ho72hWQpZUlfS3xsiFwFjdSmTylcF12FqnQp1BFglC7DESzcLFtrdDN-aFwhPx7DDfeDG3rbg-wKIBztAeTTqpu1RvTw=w323-h325-no?authuser=0" alt=""/>
                <div className="name-price">
                    <small id='name-of-product'>Name of Product</small>
                    <h6 style={{color: 'rgb(243, 17, 66)'}}>$20</h6>
                </div>
                <div className="increment d-flex">
                    <small onClick={decrement} className="incre-decre">-</small>
                    <h6 id="item-amount">{amount}</h6>
                    <small onClick={increment} className="incre-decre">+</small>
                </div>
            </div>
        </>
    );
};

export default OrderedItems;