import { React, useState, useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Hobbies from "./components/Hobbies/Hobbies";

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div id="app"
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Navbar />
      <Routes location={displayLocation}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div id="footer">
        <a href="https://github.com/Fe-56/portfolio" target="_blank" id="github_source">
          <i class="fa-brands fa-github fa-xl" id="github_icon"></i>
          Github Source Code
        </a>
        <p>© 2023 Fuo En Lim. All Rights Reserved.</p>
      </div>
    </div>
  );
}
