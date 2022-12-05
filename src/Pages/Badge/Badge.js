import React from 'react';

const Badge = () => {
    return (
        <div>
            <h1>Total User: <span className="badge bg-info">10</span></h1>
            <button className="btn btn-primary">Notification: 
                <span className="badge text-danger bg-warning rounded-pill">04</span>
            </button>
            <hr />
            <button className='btn btn-warning position-relative'>Users <span className="badge bg-danger text-info position-absolute translate-middle top-0 start-100 border border-light rounded-circle">05
            <span className="visually-hidden">Unread Messages</span>
            </span></button>
        </div>
        // <div>
        //     <h1>Argentina <span className='badge bg-primary text-danger'>0</span> 
        //     Brazil <span className='badge bg-success'>1</span></h1>
        //     <button type='button' className='btn btn-secondary mx-auto d-block  position-relative'>
        //         Apply <span className='badge bg-info rounded-pill position-absolute top-0 start-100 translate-middle'>100+</span>
        //     </button>
        // </div>
    );
};

export default Badge;