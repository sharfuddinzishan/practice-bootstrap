import React from 'react';

const Dropdown = () => {
    return (
        <div>
            {/* With btn-group class */}
            <div className="btn-group">
                <button 
                className="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown">
                    Dept
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://www.google.com">CSE</a></li>
                    <li><a className="dropdown-item" href="https://www.google.com">BBA</a></li>
                    <li><a className="dropdown-item" href="https://www.google.com">EEE</a></li>
                </ul>
            </div>
            {/* With dropdown class  */}
            <div className="dropdown text-center">
                <button 
                className="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown">
                    Team
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="">Brazil</a></li>
                    <li><a className="dropdown-item" href="">Argentina</a></li>
                    <li><a className="dropdown-item" href="">France</a></li>
                </ul>
            </div>
            {/* a link as buttton  */}
            <div className="dropdown">
                <a className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">List</a>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="https://www.google.com">Rice</a></li>
                    <li><a className="dropdown-item" href="https://www.google.com">Daal</a></li>
                    <hr />
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="https://www.google.com">Beef</a></li>
                </ul>
            </div>

            <div className="dropdown text-center">
                <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">DEPT</button>
                <ul className="dropdown-menu dropdown-menu-start">
                    <li>
                        <h1 className="dropdown-header">Departments</h1>
                    </li>
                    <li>
                        <hr className="dropdpwn-divider"/>
                    </li>
                    <li>
                        <button className="dropdown-item">CSE</button>
                    </li>
                    <li>
                        <button className="dropdown-item">BBA</button>
                    </li>
                    <li>
                        <button className="dropdown-item">ETE</button>
                    </li>
                </ul>
            </div>
<hr />
{/* dropdown-menu-dark  */}
{/* drop-end  */}
            <div className="dropend text-center">
                <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">Major</button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                        <h1 className="dropdown-header">Departments</h1>
                    </li>
                    <li>
                        <hr className="dropdpwn-divider"/>
                    </li>
                    <li>
                        <button className="dropdown-item">CSE</button>
                    </li>
                    <li>
                        <button className="dropdown-item">BBA</button>
                    </li>
                    <li>
                        <button className="dropdown-item">ETE</button>
                    </li>
                </ul>
            </div>


            <hr />
{/* dropdown-menu-dark  */}
{/* drop-end  */}
            <div className="btn-group d-block col-6 text-center">
                <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown">Major</button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                        <span className="dropdown-item-text">Departments</span>
                    </li>
                    <li>
                        <hr className="dropdpwn-divider"/>
                    </li>
                    <li>
                        <button className="dropdown-item">CSE</button>
                    </li>
                    <li>
                        <button className="dropdown-item">BBA</button>
                    </li>
                    <li>
                        <button className="dropdown-item">ETE</button>
                    </li>
                </ul>
            </div>

             {/* data-bs-auto-close outside inside true false  */}
            <div className="btn-group">
                <button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                >List of Items</button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><button className="dropdown-item" >Rice</button></li>
                    <li><button className="dropdown-item" >Daal</button></li>
                    <hr />
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><button className="dropdown-item" >Beef</button></li>
                </ul>
            </div>           
<hr />

        </div>
    );
};

export default Dropdown;