import React from 'react';

const Badge = () => {
    return (
        <div>
            <h1>Argentina <span className='badge bg-primary text-danger'>0</span> 
            Brazil <span className='badge bg-success'>1</span></h1>
            <button type='button' className='btn btn-secondary mx-auto d-block  position-relative'>
                Apply <span className='badge bg-info rounded-pill position-absolute top-0 start-100 translate-middle'>100+</span>
            </button>
        </div>
    );
};

export default Badge;