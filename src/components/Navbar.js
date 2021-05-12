import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onFormSubmit }) => {
    return(
        <nav className="myNavbar d-flex flex-row">
            <img className="navLogo ms-5" src="https://www.freeiconspng.com/uploads/white-youtube-logo-png-28.png" alt="" />
            <SearchBar 
                onFormSubmit={onFormSubmit} 
            />
        </nav>
    )
}

export default Navbar;