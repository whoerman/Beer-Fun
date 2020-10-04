import './Toptext.css';
import React from 'react';
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let questionText = "What is the random beer question?";

const Toptext = () => {

        return (
            <nav className = "toptext">
                <h1><FontAwesomeIcon icon={faBeer} /> {questionText}</h1>
            </nav>
        )
}


export default Toptext