import React from "react";
import './Navbar.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function Navbar() {
  return ( 
    <div id="navbar">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar_nav">
        <div class="container-fluid justify-content-center">
          <div id="navbar_logo">
            <a href="/portfolio/#/" class="navbar-brand mb-0 mx-auto" id="logo">
              <img src="http://fe-56.github.io/portfolio/favicon.ico?v=2" width="30" height="30" class="d-inline-block align-top" id="fe56_logo"/>
              Fuo En Lim
            </a>
          </div>
          <div class="horizontal_gap"></div>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar_buttons" aria-controls="navbar_buttons" aria-expanded="false" aria-label="Toggle navigation bar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbar_buttons"> 
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a href="/portfolio/#/projects" class="nav-link active">
                  Projects
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/skills" class="nav-link active">
                  Skills
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/experiences" class="nav-link active">
                  Experiences
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/hobbies" class="nav-link active">
                  Hobbies
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/contact" class="nav-link active">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}