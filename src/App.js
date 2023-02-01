import { React} from "react";
import { Route } from "react-router-dom";
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
    <div id="app" class="justify-content-center align-items-center container-fluid">
      <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/contact" component={Contact} />
      <div id="footer">
        <a href="https://github.com/Fe-56/portfolio" target="_blank" id="github_source">
          <i class="fa-brands fa-github fa-xl" id="github_icon"></i>
          Github Source Code
        </a>
        <p id="footnote">© 2023 Fuo En Lim. All Rights Reserved.</p>
      </div>
    </div>
  );
}
