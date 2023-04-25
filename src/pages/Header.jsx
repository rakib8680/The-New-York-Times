import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" className="cursor-pointer">Home</NavLink>
        </nav>
    );
};

export default Header;