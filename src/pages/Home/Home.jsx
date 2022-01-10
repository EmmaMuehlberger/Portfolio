import React from 'react';

import "../../App.scss";
import "./Home.scss";

import GitHubIcon from '@material-ui/icons/GitHub';

const Home = () => {
    const cv = require("../../img/lebenslauf.pdf");

    return (
        <div className="Home page">
            <p className="Home__introLine title1">Hello! My name is Emma Mühlberger and I am a Junior Front-End Developer.</p>
            <div className="Home__buttons">
                <a href={cv.default} target="_blank" rel="noreferrer">
                    <button className="btn-light">Download CV</button>
                </a>
                <a href="https://github.com/EmmaMuehlberger" target="_blank" rel="noreferrer">
                    <button className="btn-dark"><GitHubIcon />GitHub</button>
                </a>
            </div>
        </div>
    )
}

export default Home;