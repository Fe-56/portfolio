import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Hobbies from "./components/Hobbies/Hobbies";

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      {/* <Hobbies /> */}
    </div>
  );
}
