import './Navbar.css';
import React from 'react';
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {

        return (
            <nav className = "navbar">
                <h1><FontAwesomeIcon icon={faBeer} /> Beer Fun!</h1>
            </nav>
        )
}


export default Navbar