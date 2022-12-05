import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-evenly'>
            <Link to="/">Home</Link>
            <Link to="/accordion">Accordion</Link>
            <Link to="/alert">Alert</Link>
            <Link to="/badge">Badge</Link>
            <Link to="/button">Button</Link>
            <Link to="/dropdown">Dropdown</Link>
        </div>
    );
};

export default Header;