import React, { useState } from 'react';
import './FoodItems.css';
import foods from '../../Data/Data';

const FoodItems = () => {
    const [newFood, setNewFood] = useState(foods);
    return (
        <>
            <div className="container ">
                <ul className="d-flex headings">
                    <h6 className='catagories'>Breakfast</h6>
                    <h6 className='catagories'>Lunch</h6>
                    <h6 className='catagories'>Dinner</h6>
                </ul>
                <div className="row ">
                    {
                        newFood.map(data => <div className="col-3 food-box boxes">
                        <img src={data.image} alt=""/>
                        <h5 className="text-center">{data.name}</h5>
                        <p className="text-center">{data.description}</p>
                        <h6 className="text-center">${data.price}</h6>
                    </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default FoodItems;