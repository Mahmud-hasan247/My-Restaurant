import React from 'react';
import FoodItems from '../components/FoodItems/FoodItems';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import OurSpeciality from '../components/OurSpeciality/OurSpeciality';
import Present from '../components/Present/Present';

const Home = () => {
    return (
        <div>
            <div className="container">
                <Header></Header>
            </div>
            <Present></Present>
            <FoodItems></FoodItems>
            <OurSpeciality></OurSpeciality>
            <Footer></Footer>
        </div>
    );
};

export default Home;