import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import NavbarButton from "./NavbarButton";
import { getTheme } from "../../Theme";

export default function Navbar() {
  // only execute the initialiseNavbarTheme() function once
  useEffect(() => {
    initialiseNavbarTheme();
  }, []);

  return (
    <div id="navbar">
      <nav
        class="navbar navbar-expand-sm navbar-light fixed-top"
        id="navbar_nav"
      >
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
              <div class="horizontal_gap"></div>
              <NavbarButton.NavbarTheme />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function initialiseNavbarTheme() {
  const savedTheme = getTheme();

  if (savedTheme == "dark-theme") {
    document.getElementById("navbar_nav").className =
      "navbar navbar-expand-sm navbar-dark fixed-top";
  } else {
    document.getElementById("navbar_nav").className =
      "navbar navbar-expand-sm navbar-light fixed-top";
  }
}
