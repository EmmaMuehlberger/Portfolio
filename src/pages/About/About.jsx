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
                    <li>HTML (very good)</li>
                    <li>CSS (very good)</li>
                    <li>Javascript (very good)</li>
                    <li>SASS (very good)</li>
                    <li>React (good)</li>
                    <li>Redux (basic)</li>
                    <li>Vue (good)</li>
                    <li>Node (good)</li>
                    <li>Express (good)</li>
                    <li>SQL (good)</li>
                    <li>MongoDB (basic)</li>
                    <li>PHP (basic)</li>
                    <li>Python (basic)</li>
                </ul>
            </div>
        </div>
    )
}

export default About;