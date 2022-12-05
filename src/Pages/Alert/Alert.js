import React from 'react';

const Alert = () => {
    return (
        <div>
            <div className="alert alert-info alert-dismissible">
                <div className="alert-heading">
                    <h1>Welcome To Programming</h1>
                    <p><a href="https://www.google.com"="http://www.google.com" className='alert-link'>Javascript</a> is an asynchronous non-blocking single threaded language</p>
                </div>
                <button className="btn-close btn-close-white" data-bs-dismiss="alert"></button>
            </div>
            {/* <div className="alert alert-info alert-dismissible alert show">
                <div className="alert-header">
                    <p>Will You Marry Me?</p>
                    <span>Link <a href="https://www.google.com"="http://localhost:3000/" className='alert-link'>Accept</a> </span>
                    <button className='btn-close' 
                    type='button'
                    data-bs-dismiss='alert'>
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Alert;