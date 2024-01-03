import React from "react";
import './Navbar.css';
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return ( 
    <div id="navbar">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar_nav">
        <div class="container-fluid justify-content-center">
          <NavbarButton.NavbarAbout />
          <NavbarButton.NavbarButtonsCollapsed />
          <div class="collapse navbar-collapse" id="navbar_buttons"> 
            <ul class="navbar-nav ml-auto container-fluid">
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarProjects />
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarSkills />
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarExperiences />
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarHobbies />
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarContact />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
