import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Hobbies from "./components/Hobbies/Hobbies";

export default function App() {
  return (
    <HashRouter basename="/">
      <div id="app">
        <Navbar />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/portfolio" element={<About />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/skills" element={<Skills />} />
            <Route path="/portfolio/experiences" element={<Experiences />} />
            <Route path="/portfolio/hobbies" element={<Hobbies />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<About />} />
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
    </HashRouter>
  );
}
