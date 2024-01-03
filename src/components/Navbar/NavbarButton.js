import React from "react";
import navbarFunctions from "./navbarFunctions";
import * as urlConst from '../../const/url';
import * as textConst from '../../const/text';

const NavbarAbout = () => {
  return <div id="navbar_logo">
    <a href={urlConst.WEBSITE_PATH} class="navbar-brand mb-0 mx-auto" id="logo" onClick={navbarFunctions.clickedAbout}>
      <img src={urlConst.WEBSITE_PIC} width="30" height="30" class="d-inline-block align-top" id="fe56_logo"/>
      {textConst.NAME}
    </a>
  </div>
}

const NavbarButtonsCollapsed = () => {
  return <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar_buttons" aria-controls="navbar_buttons" aria-expanded="false" aria-label="Toggle navigation bar">
    <span class="navbar-toggler-icon"></span>
  </button>
}

const NavbarProjects = () => {
  return <li class="nav-item active">
    <a href="/portfolio/#/projects" class="nav-link active" id="nav_projects" onClick={navbarFunctions.clickedProjects}>
    {textConst.PROJECTS_TITLE}
    </a>
  </li>
}

const NavbarSkills = () => {
  return <li class="nav-item active">
    <a href="/portfolio/#/skills" class="nav-link active" id="nav_skills" onClick={navbarFunctions.clickedSkills}>
    {textConst.SKILLS_TITLE}
    </a>
  </li>
}

const NavbarExperiences = () => {
  return <li class="nav-item active">
    <a href="/portfolio/#/experiences" class="nav-link active" id="nav_experiences" onClick={navbarFunctions.clickedExperiences}>
    {textConst.EXPERIENCES_TITLE}
    </a>
  </li>
}

const NavbarHobbies = () => {
  return <li class="nav-item active">
    <a href="/portfolio/#/hobbies" class="nav-link active" id="nav_hobbies" onClick={navbarFunctions.clickedHobbies}>
    {textConst.HOBBIES_TITLE}
    </a>
  </li>
}

const NavbarContact = () => {
  return <li class="nav-item active">
    <a href="/portfolio/#/contact" class="nav-link active" id="nav_contact" onClick={navbarFunctions.clickedContact}>
    {textConst.CONTACT_TITLE}
    </a>
  </li>
}

const NavbarButton = {
  NavbarAbout,
  NavbarButtonsCollapsed,
  NavbarProjects,
  NavbarSkills,
  NavbarExperiences,
  NavbarHobbies,
  NavbarContact
};

export default NavbarButton;
