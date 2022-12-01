import React from 'react';

const Alert = () => {
    return (
        <div>
            <div className="alert alert-info alert-dismissible alert show">
                <div className="alert-header">
                    <p>Will You Marry Me?</p>
                    <span>Link <a href="http://localhost:3000/" className='alert-link'>Accept</a> </span>
                    <button className='btn-close' 
                    type='button'
                    data-bs-dismiss='alert'>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;