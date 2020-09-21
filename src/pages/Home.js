import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Present from '../components/Present/Present';

const Home = () => {
    return (
        <div>
            <div className="container">
                <Header></Header>
            </div>
            <Present></Present>
            <Footer></Footer>
        </div>
    );
};

export default Home;