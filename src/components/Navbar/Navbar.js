import React from "react";
import './Navbar.css';

export default function Navbar() {
  return ( 
    <div id="navbar">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top justify-content-center" id="navbar_nav">
        <div class="container-fluid">
          <a href="/portfolio" class="navbar-brand mb-0">
            <img src="http://fe-56.github.io/portfolio/favicon.ico?v=2" width="30" height="30" class="d-inline-block align-top"/>
            Fuo En Lim
          </a>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarButtons" aria-controls="navbar_buttons" aria-expanded="false" aria-label="Toggle navigation bar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarButtons">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a href="/portfolio/projects" class="nav-link active">
                  Projects
                </a>
              </li>
              <li class="nav-item active">
                <a href="/portfolio/skills" class="nav-link active">
                  Skills
                </a>
              </li>
              <li class="nav-item active">
                <a href="/portfolio/experience" class="nav-link active">
                  Experience
                </a>
              </li>
              <li class="nav-item active">
                <a href="/portfolio/hobbies" class="nav-link active">
                  Hobbies
                </a>
              </li>
              <li class="nav-item active">
                <a href="/portfolio/contact" class="nav-link active">
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