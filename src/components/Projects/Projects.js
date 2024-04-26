import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Projects.css';
import * as textConst from "../../const/text";
import Project from "./Project";

export default function Projects() {
  useEffect(() => {
    pageLoad();
    pageSetup();
  });

  return (
    <div id="projects">
      <h1 id="projects_title">{textConst.PROJECTS_TITLE}</h1>
      <Project.MusicRecommendationFromEmotion />
      <Project.LookAndEarn />
      <Project.LonelyNoLonger />
      <Project.OnlineHateSpeechDetection />
      <Project.TransferConnect />
      <Project.Giglet />
      <Project.Wordle />
      <Project.FEAST />
      <Project.WillIGoBroke />
      <Project.PokemonBattle />
    </div>
  );
}

function pageSetup() {
  document.getElementById('nav_projects').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage

  window.addEventListener('resize', projectSkillsResponsive);

  const projects = Array.prototype.slice.call(document.getElementsByClassName('project'));
  projects.map((project) => {
    project.addEventListener('click', projectClick);
  });
}

function projectClick(event) {
  const project = this;
  const projectContent = project.children[1]; // gets the project_content div within the project div
  const expandCollapse = project.children[2];

  if (event.target.classList.contains("expand_collapse") || event.target.classList.contains("expand_collapse_icon")){ // if the entire div that contains the up or down chevron is clicked, expand or collapse the project content accordingly
    if (projectContent.style.maxHeight){ // if the project content is currently expanded, collapse it
      expandCollapse.innerHTML = '<i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>\nView more';
      projectContent.classList.remove("expanded");
      projectContent.style.maxHeight = null;
    }
    else{ // if the project content is currently collapsed, expand it
      expandCollapse.innerHTML = '<i class="fa solid fa-chevron-up fa-xl icon expand_collapse_icon"></i>\nView less';
      projectContent.classList.add("expanded");
      projectContent.style.maxHeight = projectContent.scrollHeight + "px";
    }
  }
}

function projectSkillsResponsive(){ // makes the skills section of each project responsive by adjusting the max height of the project content whenever the window is being resized
  const expandedProjectContents = Array.prototype.slice.call(document.getElementsByClassName("expanded"));
  expandedProjectContents.map((projectContent) => {
    projectContent.style.maxHeight = projectContent.scrollHeight + "px";
  });
}
