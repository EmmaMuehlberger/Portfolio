import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import { closeMenuAni } from "../../animations";

import "../../App.scss";
import "./MobileMenu.scss";

const MobileMenu = () => {
    const [height, setHeight] = useState(window.innerHeight);

    const resize = () => {
        setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return (
        <div className="MobileMenu">
            <ul>
                <li><NavLink onClick={closeMenuAni(height)} exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink onClick={closeMenuAni(height)} exact to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink onClick={closeMenuAni(height)} exact to="/about" activeClassName="active">About</NavLink></li>
            </ul>
        </div>
    )
}

export default MobileMenu;