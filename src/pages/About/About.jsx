import React from 'react';

import "../../App.scss";
import "./About.scss";

const About = () => {
    return (
        <div className="About page">
            <div className="About__info">
                <h4 className="title2">About me</h4>
                <p>
                    In September I will move to Zurich to begin my Master's degree program in Information Systems and am therefore looking 
                    for a new position. 
                </p>
                <p>
                    Currently, I work at a company in Berlin realizing design templates using the common front-end technologies: 
                    HTML, CSS and Javascript and the JS libraries: GSAP and ChartJS. I regularly use version control systems (Github) to maintain my code.
                </p>
                <p> 
                    Building state-of-the-art, user-friendly websites and applications is truly a passion of mine and I am always 
                    interested in exchanging information with more experienced colleagues to improve as a developer.
                </p>
                <p>
                    When I am not coding you can find me walking the best dog in the world, bouldering or playing volleyball.
                </p>
            </div>
            <div className="About__tech">
                <h4 className="title2">Skills</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>SASS</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>PHP</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    )
}

export default About;