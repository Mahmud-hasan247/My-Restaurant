import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import foods from '../../Data/Data';
import More from '../More/More';

const Detail = () => {
    const [amount, setAmount] = useState(0);
    
    const Plus = () => {
        setAmount(amount + 1);
    }
    const Minus = () => {
        setAmount(amount - 1);
    }    

    const {name} = useParams();
    const getInfo = foods.find(data => data.name === name);
    return (
        <>
            <div className="container detail-container">
            <div className="d-flex">
                <div className="col-6 information">
                    <h1>{getInfo.name}</h1>
                    <p>vero molestias, id dicta velit a consequatur. Rem sequi unde blanditiis, corporis rerum tempore sint repellat dolore esse eveniet laborum assumenda distinctio, culpa omnis sit sunt veritatis? Pariatur iure doloribus in odit corporis itaque ratione quis, quos placeat. Quas debitis odio error laudantium minus illum, soluta illo!</p>
                    <br/>
                    <div className="d-flex">
                        <h4>${getInfo.price}</h4>
                        <div className="plus-minus d-flex">
                            <h3 className='p-m' onClick={Minus}>-</h3>
                            <h5 className='p-m amount'>{amount}</h5>
                            <h3 className='p-m' onClick={Plus}>+</h3>
                        </div>
                    </div>
                    <button className='all-buttons'>add</button>
                    <More></More>
                </div>
                <div className="col-6 image">
                    <img src={getInfo.image} alt=""/>
                </div>
            </div>
            </div>
        </>
    );
};

export default Detail;