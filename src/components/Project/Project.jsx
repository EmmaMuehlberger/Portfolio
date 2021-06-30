import React from 'react';

import "../../App.scss";
import "./Project.scss";

const Project = ({ image, title, tags, link, source }) => {
    const img = require(`../../img/${image}`);
    return (
        <div className="Project">
            <img src={img.default} alt="Project screenshot"/>
            <div className="Project__desc">
                <h6>{title}</h6>
                <div className="Project__tags">
                    {tags.map((tag) => { 
                        return (
                            <p>{tag}</p>
                        )
                    })}
                </div>
                <a href={source} target="_blank" rel="noreferrer"><button className={source ? "btn-light" : "btn-light disabled"}>Source Code</button></a>
                <a href={link} target="_blank" rel="noreferrer"><button className={link ? "btn-dark" : "btn-dark disabled"}>View Project</button></a>
            </div>
        </div>
    )
}

export default Project;
