import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { showMenuAni, closeMenuAni } from "../../animations";

import "../../App.scss";
import "./Header.scss";

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [menuOpen, setMenuOpen] = useState(false);

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    // animation
    const showMenu = () => {
        setMenuOpen(!menuOpen);
        showMenuAni();
    };

    const closeMenu = () => {
        setMenuOpen(!menuOpen);
        closeMenuAni(height);
    };

    return (
        <header className="Header">
            {width > 600 
            ? <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink exact to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
            </ul>
            : 
            <>
            <CloseIcon onClick={closeMenu} className="Header__close" /> 
            <MenuIcon onClick={showMenu} className="Header__burgerMenu" />
            </> }
        </header>
    )
}

export default Header;