import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <div className='d-flex justify-content-evenly'>
        //     <Link className="dropdownn-item" to="/">Home</Link>
        //     <Link className="dropdownn-item" to="/accordion">Accordion</Link>
        //     <Link className="dropdownn-item" to="/alert">Alert</Link>
        //     <Link className="dropdownn-item" to="/badge">Badge</Link>
        //     <Link className="dropdownn-item" to="/button">Button</Link>
        //     <Link className="dropdownn-item" to="/dropdown">Dropdown</Link>
        //     <Link className="dropdownn-item" to="/dropdown">Collapse</Link>
        // </div>
        <div className="dropdown dropend text-center m-3">
            <button className="btn btn-lg btn-success dropdown-toggle pe-5 rounded-pill" data-bs-toggle="dropdown" data-bs-auto-close="outside">Select Topics</button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                    <Link className="dropdown-item" to="/">Home</Link>
                </li>
                <li>
                    <span className="dropdown-item-text dropdown-header">Choose :</span>
                </li>
                <hr className="dropdown-divider"/>
                <li>
                    <Link className="dropdown-item" to="/accordion">Accordion</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/alert">Alert</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/badge">Badge</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/button">Button</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/dropdown">Dropdown</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/collapse">Collapse</Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/"></Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;