import React from 'react';
import './Detail.css';

const Detail = () => {
    return (
        <>
            <div className="container detail-container">
            <div className="d-flex">
                <div className="col-6 information">
                    <h1>Name of Food item</h1>
                    <p>vero molestias, id dicta velit a consequatur. Rem sequi unde blanditiis, corporis rerum tempore sint repellat dolore esse eveniet laborum assumenda distinctio, culpa omnis sit sunt veritatis? Pariatur iure doloribus in odit corporis itaque ratione quis, quos placeat. Quas debitis odio error laudantium minus illum, soluta illo!</p>
                    <h4>Price: $49</h4>
                </div>
                <div className="col-6 image">
                    <h1>hare is image</h1>
                </div>
            </div>
            </div>
        </>
    );
};

export default Detail;