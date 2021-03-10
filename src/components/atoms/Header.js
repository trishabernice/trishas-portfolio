import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../../App.css';

export default class Header extends Component {
    render() {
        return (
            <ul className="header">
                <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
                <li><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
                <li><Link  to="experience" spy={true} smooth={true}>Experience</Link></li>
                <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
        )
    }
}