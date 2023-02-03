import React from "react";
import './Navbar.css';

export default function Navbar() {
  return ( 
    <div id="navbar">
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar_nav">
        <div class="container-fluid justify-content-center">
          <div id="navbar_logo">
            <a href="/portfolio/#/" class="navbar-brand mb-0 mx-auto" id="logo" onClick={clickedAbout}>
              <img src="http://fe-56.github.io/portfolio/favicon.ico?v=2" width="30" height="30" class="d-inline-block align-top" id="fe56_logo"/>
              Fuo En Lim
            </a>
          </div>
          {/* <div class="horizontal_gap"></div> */}
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar_buttons" aria-controls="navbar_buttons" aria-expanded="false" aria-label="Toggle navigation bar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbar_buttons"> 
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a href="/portfolio/#/projects" class="nav-link active" id="nav_projects" onClick={clickedProjects}>
                  Projects
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/skills" class="nav-link active" id="nav_skills" onClick={clickedSkills}>
                  Skills
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/experiences" class="nav-link active" id="nav_experiences" onClick={clickedExperiences}>
                  Experiences
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/hobbies" class="nav-link active" id="nav_hobbies" onClick={clickedHobbies}>
                  Hobbies
                </a>
              </li>
              <div class="horizontal_gap"></div>
              <li class="nav-item active">
                <a href="/portfolio/#/contact" class="nav-link active" id="nav_contact" onClick={clickedContact}>
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

function clickedAbout(){
  removeSelected();
}

function clickedProjects(){
  removeSelected();
  document.getElementById('nav_projects').classList.add('selected');
}

function clickedSkills(){
  removeSelected();
  document.getElementById('nav_skills').classList.add('selected');
}

function clickedExperiences(){
  removeSelected();
  document.getElementById('nav_experiences').classList.add('selected');
}

function clickedHobbies(){
  removeSelected();
  document.getElementById('nav_hobbies').classList.add('selected');
}

function clickedContact(){
  removeSelected();
  document.getElementById('nav_contact').classList.add('selected');
}

function removeSelected(){ // un-highlights the previously selected navbar item
  window.focus();
  window.scrollTo(0, 0);
  const currentPage = document.getElementsByClassName('selected');
  if (currentPage.length > 0){
    currentPage[0].classList.remove('selected');
  }
}