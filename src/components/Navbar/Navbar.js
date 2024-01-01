import React from "react";
import './Navbar.css';
import NavbarButtons from "./NavbarButtons";

export default function Navbar() {
  return ( 
    <div id="navbar">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar_nav">
        <div class="container-fluid justify-content-center">
          <NavbarButtons.NavbarAbout />
          <NavbarButtons.NavbarButtonsCollapsed />
          <div class="collapse navbar-collapse" id="navbar_buttons"> 
            <ul class="navbar-nav ml-auto container-fluid">
              <div class="horizontal_gap"></div>
              <NavbarButtons.NavbarProjects />
              <div class="horizontal_gap"></div>
              <NavbarButtons.NavbarSkills />
              <div class="horizontal_gap"></div>
              <NavbarButtons.NavbarExperiences />
              <div class="horizontal_gap"></div>
              <NavbarButtons.NavbarHobbies />
              <div class="horizontal_gap"></div>
              <NavbarButtons.NavbarContact />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
