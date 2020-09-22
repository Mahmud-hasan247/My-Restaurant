import React from 'react';
import Detail from '../components/DetailInfo/Detail';
import Header from '../components/Header/Header';

const DetailPage = () => {
    return (
        <>
            <div className="container">
                <Header></Header>
            </div>
            <Detail></Detail>
        </>
    );
};

export default DetailPage;