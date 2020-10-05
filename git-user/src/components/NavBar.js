import React from 'react';
import Logo from '../images/logo.png';
import '../App.css';

const NavBar = () => {
    return(
        <div>
            <img className="logo" src={Logo} alt="Logo" />
        </div>
    );
};

export default NavBar;