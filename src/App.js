import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { closeMenuAni } from "./animations";

import './App.scss';

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import MobileMenu from "./components/MobileMenu/MobileMenu";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  window.addEventListener("resize", resize);

  const CloseMenu = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      closeMenuAni(height);
    }, [pathname]);
  
    return null;
  }

  /* Preload Images */
  useEffect(() => {
    const imgs = [
      "pwa.png",
      "bookstore.png",
      "companyx.png",
      "sql-login.png",
      "workout.png",
      "kaffeefinder.png"
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function(resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
  };

  return (
    <div className="App">
      <Router>
        {width <= 600 ? <MobileMenu /> : null}
        <Header />
        <Route exact path="/projects">
          {width <= 600 ? <CloseMenu /> : null }
          <Projects />
        </Route> 
        <Route exact path="/about">
          {width <= 600 ? <CloseMenu /> : null }
          <About />
        </Route> 
        <Route exact path="/">
          {width <= 600 ? <CloseMenu /> : null }
          <Home />
        </Route> 
      </Router>
    </div>
  );
}

export default App;
