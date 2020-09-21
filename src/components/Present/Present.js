import React from 'react';
import './Present.css';

const Present = () => {
    return (
        <div id="present">
            <div className="welcome">
                <h1 className="text text-center">Welcome to our Restaurant!</h1>
                <form className="search-form ">
                    <input className="search" type="text" placeholder="Search food items"></input>
                    <input id="search" type="submit" value="Search"></input>
                </form>
            </div>
        </div>
    );
};

export default Present;