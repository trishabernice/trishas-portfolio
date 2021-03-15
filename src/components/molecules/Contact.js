import React from 'react';
import '../../App.css';

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";


const Contact = () => {
    return(
        <div id="contact" className="contact">
            <h1 className="section-titles"  style={{color: "#F6F6F4"}}>Contact</h1>
            <div>
                <a href="https://www.instagram.com/trishabernice/" rel="noopener noreferrer" target="_blank"><FaInstagramSquare size={35} className="icons"/></a>
                <a href="https://www.linkedin.com/in/trisha-bernice/" rel="noopener noreferrer" target="_blank"><FaLinkedin size={35} className="icons"/></a>
                <a href="https://github.com/trishabernice" rel="noopener noreferrer" target="_blank"><FaGithubSquare size={35} className="icons"/></a>
                <a href="https://www.facebook.com/trisha.bernice.9" rel="noopener noreferrer" target="_blank"><FaFacebookSquare size={35} className="icons"/></a>
                <a href="mailto:trisha.bernice@gmail.com" rel="noopener noreferrer" target="_blank"><FaEnvelopeSquare size={35} className="icons"/></a>
            </div>
            <p style ={{color: '#F6F6F4'}}>+62 818 0433 0103</p>
        </div>
    );
}

export default Contact;