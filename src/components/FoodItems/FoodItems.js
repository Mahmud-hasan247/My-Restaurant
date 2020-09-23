import React, { useState } from 'react';
import './FoodItems.css';
import foods from '../../Data/Data';
import { useHistory } from 'react-router-dom';

const FoodItems = () => {
    const [category, setCategory] = useState('Lunch');

    const FoodItems = foods.filter(food => food.category === category)

    const history = useHistory()
    const showDetails = (name) => {
        history.push(`/detail/${name}`)
    }

    const Dinner = () => {
        setCategory('Dinner');
    }
    const Breakfast = () => {
        setCategory('Breakfast');
    }
    const Lunch = () => {
        setCategory('Lunch');
    }

    return (
        <>
            <div className="container ">
                <ul className="d-flex headings">
                    <h6 className='catagories' onClick={Breakfast}>Breakfast</h6>
                    <h6 className='catagories' onClick={Lunch}>Lunch</h6>
                    <h6 className='catagories' onClick={Dinner}>Dinner</h6>
                </ul>
                <div className="row ">
                    {
                        FoodItems.map(data => <div onClick={() => showDetails(data.name)} className="col-3 food-box boxes">
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