import React, {useEffect, useState} from 'react';
import gsap from "gsap";

import "../../App.scss";
import "./Projects.scss";

import Project from "../../components/Project/Project";

const Projects = () => {
    const [filter, setFilter] = useState("");

    const projects = [
        {
            image: "pwa.png",
            title: "Dictionary PWA",
            tags: ["HTML", "SASS", "Javascript", "React", "PWA"],
            link: "https://urban-dictionary-pwa.netlify.app/",
            source: "https://github.com/EmmaMuehlberger/React-PWA-Dictionary-App"
        },
        {
            image: "bookstore.png",
            title: "Bookstore - React Webshop",
            tags: ["HTML", "SASS", "Javascript", "React", "Redux"],
            link: "https://every-book.netlify.app/",
            source: "https://github.com/EmmaMuehlberger/React-Ecommerce-Webshop-Bookstore"
        },
        {
            image: "companyx.png",
            title: "Animated Landing Page",
            tags: ["HTML", "SASS", "Javascript", "React", "GSAP"],
            link: "https://companyx-gsap-homepage.netlify.app/",
            source: "https://github.com/EmmaMuehlberger/React-Gsap-Homepage"
        },
        {
            image: "sql-login.png",
            title: "Login and Authentication Systems",
            tags: ["HTML", "SASS", "Javascript", "React", "Node", "Express", "SQL"],
            link: null,
            source: "https://github.com/EmmaMuehlberger/SQL-Login-System"
        },
        {
            image: "workout.png",
            title: "Workout Tracker",
            tags: ["HTML", "CSS", "Javascript"],
            link: "https://track-your-workouts.netlify.app/",
            source: "https://github.com/EmmaMuehlberger/workout-tracker"
        },
        {
            image: "kaffeefinder.png",
            title: "Kaffeefinder",
            tags: ["HTML", "CSS", "Javascript"],
            link: null,
            source: null
        }
    ]

    const onClickHandler = e => {
        setFilter(e.target.value);
    }

    // animation
    useEffect(() => {
        const tl = gsap.timeline();
    
        tl
        .from(".Project", 1.8, {
          y: 50,
          ease: "power4.out",
          opacity: 0,
          stagger: {
            amount: 0.5
          }
        })
    }, [filter]);

    return (
        <div className="Projects page">
            <div className="Projects__searchbar">
                <button onClick={onClickHandler} value="" className={filter === "" ? "btn-light active" : "btn-light"}>All</button>
                <button onClick={onClickHandler} value="SASS" className={filter === "SASS" ? "btn-light active" : "btn-light"}>SASS</button>
                <button onClick={onClickHandler} value="React" className={filter === "React" ? "btn-light active" : "btn-light"}>React</button>
                <button onClick={onClickHandler} value="Redux" className={filter === "Redux" ? "btn-light active" : "btn-light"}>Redux</button>
                <button onClick={onClickHandler} value="SQL" className={filter === "SQL" ? "btn-light active" : "btn-light"}>SQL</button>
                <button onClick={onClickHandler} value="Node" className={filter === "Node" ? "btn-light active" : "btn-light"}>Node</button>
                <button onClick={onClickHandler} value="GSAP" className={filter === "GSAP" ? "btn-light active" : "btn-light"}>GSAP</button>
                <button onClick={onClickHandler} value="PWA" className={filter === "PWA" ? "btn-light active" : "btn-light"}>PWA</button>
            </div>
            <div className="Projects__container">
                {filter === "" 
                    ? projects.map((project) => {
                        return (
                            <Project image={project.image} title={project.title} tags={project.tags} link={project.link} source={project.source} key={Math.random()} />
                        )
                    }) 
                    : projects.filter(project => project.tags.includes(filter)).map((project) => {
                        return (
                            <Project image={project.image} title={project.title} tags={project.tags} link={project.link} source={project.source} key={Math.random()} />
                        )
                    })
                    
                }
            </div>
        </div>
    )
}

export default Projects;
