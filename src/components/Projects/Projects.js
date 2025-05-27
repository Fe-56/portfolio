import { useEffect } from "react";
import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";
import pageLoad from "../utils/pageLoad";
import defund_picture from "./defund_picture.png";
import feast_logo from "./feast_logo.png";
import giglet_picture from "./giglet_picture.jpg";
import pokemon_battle_logo from "./pokemon_battle_logo.png";
import Project from "./Project";
import "./Projects.css";
import prospero_logo from "./prospero_logo.svg";
import will_i_go_broke_logo from "./will_i_go_broke_logo.png";
import wordle_logo from "./wordle_logo.png";

export default function Projects() {
  useEffect(() => {
    pageLoad();
    pageSetup();
  });

  const projects = [
    {
      id: "prospero",
      title: textConst.PROJECTS_PROSPERO_TITLE,
      role: textConst.PROJECTS_PROSPERO_ROLE,
      type: textConst.PROJECTS_PROSPERO_TYPE,
      timeline: textConst.PROJECTS_PROSPERO_TIMELINE,
      logo: prospero_logo,
      logoAlt: textConst.PROJECTS_PROSPERO_LOGO_ALT,
      description: textConst.PROJECTS_PROSPERO_PROJECT_DESCRIPTION,
      link: urlConst.PROJECTS_PROSPERO_PROJECT_URL,
      hardSkills: ["next", "typescript", "figma", "css", "github"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "defund",
      title: textConst.PROJECTS_DEFUND_TITLE,
      role: textConst.PROJECTS_DEFUND_ROLE,
      type: textConst.PROJECTS_DEFUND_TYPE,
      timeline: textConst.PROJECTS_DEFUND_TIMELINE,
      logo: defund_picture,
      logoAlt: textConst.PROJECTS_DEFUND_LOGO_ALT,
      description: textConst.PROJECTS_DEFUND_PROJECT_DESCRIPTION,
      link: urlConst.PROJECTS_DEFUND_PROJECT_URL,
      github: urlConst.PROJECTS_DEFUND_GITHUB_URL,
      hardSkills: ["next", "typescript", "solidity", "ethereum", "github"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "music_recommendation",
      title: textConst.PROJECTS_MUSIC_RECOMMENDATION_TITLE,
      role: textConst.PROJECTS_MUSIC_RECOMMENDATION_ROLE,
      type: textConst.PROJECTS_MUSIC_RECOMMENDATION_TYPE,
      timeline: textConst.PROJECTS_MUSIC_RECOMMENDATION_TIMELINE,
      description: textConst.PROJECTS_MUSIC_RECOMMENDATION_PROJECT_DESCRIPTION,
      github: urlConst.PROJECTS_MUSIC_RECOMMENDATION_GITHUB_URL,
      hardSkills: ["python", "data_science", "ml", "github"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "look_and_earn",
      title: textConst.PROJECTS_LOOK_AND_EARN_TITLE,
      role: textConst.PROJECTS_LOOK_AND_EARN_ROLE,
      type: textConst.PROJECTS_LOOK_AND_EARN_PROJECT_TYPE,
      timeline: textConst.PROJECTS_LOOK_AND_EARN_TIMELINE,
      description: textConst.PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION,
      hardSkills: [
        "flutter",
        "dart",
        "android_studio",
        "firestore",
        "javascript",
        "react",
        "express",
        "node",
        "github",
      ],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "lonely_no_longer",
      title: textConst.PROJECTS_LONELY_NO_LONGER_TITLE,
      role: textConst.PROJECTS_LONELY_NO_LONGER_ROLE,
      type: textConst.PROJECTS_LONELY_NO_LONGER_PROJECT_TYPE,
      timeline: textConst.PROJECTS_LONELY_NO_LONGER_TIMELINE,
      description: textConst.PROJECTS_LONELY_NO_LONGER_DESCRIPTION,
      hardSkills: [
        "python",
        "pytelegrambot",
        "firestore",
        "javascript",
        "github",
      ],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "online_hate_speech_detection",
      title: textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TITLE,
      role: textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_ROLE,
      type: textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_TYPE,
      timeline: textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TIMELINE,
      description: textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_DESCRIPTION,
      link: urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_URL,
      github: urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_GITHUB_URL,
      hardSkills: ["python", "ml", "github"],
      softSkills: ["researching", "detail"],
    },
    {
      id: "transfer_connect",
      title: textConst.PROJECTS_TRANSFERCONNECT_TITLE,
      role: textConst.PROJECTS_TRANSFERCONNECT_ROLE,
      type: textConst.PROJECTS_TRANSFERCONNECT_PROJECT_TYPE,
      timeline: textConst.PROJECTS_TRANSFERCONNECT_TIMELINE,
      description: textConst.PROJECTS_TRANSFERCONNECT_PROJECT_DESCRIPTION,
      hardSkills: ["javascript", "express", "postman", "testing", "github"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "giglet",
      title: textConst.PROJECTS_GIGLET_TITLE,
      role: textConst.PROJECTS_GIGLET_ROLE,
      type: textConst.PROJECTS_GIGLET_PROJECT_TYPE,
      timeline: textConst.PROJECTS_GIGLET_TIMELINE,
      logo: giglet_picture,
      logoAlt: textConst.PROJECTS_GIGLET_LOGO_ALT,
      description: textConst.PROJECTS_GIGLET_PROJECT_DESCRIPTION,
      hardSkills: ["python", "pytelegrambot", "firestore", "github"],
      softSkills: ["communication", "researching", "entrepreneurship"],
    },
    {
      id: "wordle",
      title: textConst.PROJECTS_WORDLE_TITLE,
      role: textConst.PROJECTS_WORDLE_ROLE,
      type: textConst.PROJECTS_WORDLE_PROJECT_TYPE,
      timeline: textConst.PROJECTS_WORDLE_TIMELINE,
      logo: wordle_logo,
      logoAlt: textConst.PROJECTS_WORDLE_LOGO_ALT,
      description: textConst.PROJECTS_WORDLE_PROJECT_DESCRIPTION,
      link: urlConst.PROJECTS_WORDLE_PROJECT_URL,
      github: urlConst.PROJECTS_WORDLE_GITHUB_URL,
      hardSkills: ["verilog", "computer_engineering"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "feast",
      title: textConst.PROJECTS_FEAST_TITLE,
      role: textConst.PROJECTS_FEAST_ROLE,
      type: textConst.PROJECTS_FEAST_PROJECT_TYPE,
      timeline: textConst.PROJECTS_FEAST_TIMELINE,
      logo: feast_logo,
      logoAlt: textConst.PROJECTS_FEAST_LOGO_ALT,
      description: textConst.PROJECTS_FEAST_PROJECT_DESCRIPTION,
      link: urlConst.PROJECTS_FEAST_PROJECT_URL,
      hardSkills: ["java", "android_studio", "github", "figma"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "will_i_go_broke",
      title: textConst.PROJECTS_WILL_I_GO_BROKE_TITLE,
      role: textConst.PROJECTS_WILL_I_GO_BROKE_ROLE,
      type: textConst.PROJECTS_WILL_I_GO_BROKE_PROJECT_TYPE,
      timeline: textConst.PROJECTS_WILL_I_GO_BROKE_TIMELINE,
      logo: will_i_go_broke_logo,
      logoAlt: textConst.PROJECTS_WILL_I_GO_BROKE_LOGO_ALT,
      description: textConst.PROJECTS_WILL_I_GO_BROKE_PROJECT_DESCRIPTION,
      github: urlConst.PROJECTS_WILL_I_GO_BROKE_GITHUB_URL,
      hardSkills: ["python", "pytelergambot"],
      softSkills: ["researching", "detail"],
    },
    {
      id: "pokemon_battle",
      title: textConst.PROJECTS_POKEMON_BATTLE_TITLE,
      role: textConst.PROJECTS_POKEMON_BATTLE_ROLE,
      type: textConst.PROJECTS_POKEMON_BATTLE_PROJECT_TYPE,
      timeline: textConst.PROJECTS_POKEMON_BATTLE_TIMELINE,
      logo: pokemon_battle_logo,
      logoAlt: textConst.PROJECTS_POKEMON_BATTLE_LOGO_ALT,
      description: textConst.PROJECTS_POKEMON_BATTLE_PROJECT_DESCRIPTION,
      github: urlConst.PROJECTS_POKEMON_BATTLE_GITHUB_URL,
      hardSkills: ["python", "game_design"],
      softSkills: ["communication", "researching", "detail"],
    },
  ];

  return (
    <div id="projects">
      <h1 id="projects_title">{textConst.PROJECTS_TITLE}</h1>
      {projects.map((project, index) => {
        return (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            role={project.role}
            type={project.type}
            timeline={project.timeline}
            logo={project.logo}
            logoAlt={project.logoAlt}
            description={project.description}
            link={project.link}
            github={project.github}
            hardSkills={project.hardSkills}
            softSkills={project.softSkills}
            index={index}
          />
        );
      })}
    </div>
  );
}

function pageSetup() {
  document.getElementById("nav_projects").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage

  window.addEventListener("resize", projectSkillsResponsive);

  const projects = Array.prototype.slice.call(
    document.getElementsByClassName("project")
  );
  projects.map((project) => {
    project.addEventListener("click", projectClick);
  });
}

function projectClick(event) {
  const project = this;
  const projectContent = project.children[1]; // gets the project_content div within the project div
  const expandCollapse = project.children[2];

  if (
    event.target.classList.contains("expand_collapse") ||
    event.target.classList.contains("expand_collapse_icon")
  ) {
    // if the entire div that contains the up or down chevron is clicked, expand or collapse the project content accordingly
    if (projectContent.style.maxHeight) {
      // if the project content is currently expanded, collapse it
      expandCollapse.innerHTML =
        '<i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>\nView more';
      projectContent.classList.remove("expanded");
      projectContent.style.maxHeight = null;
    } else {
      // if the project content is currently collapsed, expand it
      expandCollapse.innerHTML =
        '<i class="fa solid fa-chevron-up fa-xl icon expand_collapse_icon"></i>\nView less';
      projectContent.classList.add("expanded");
      projectContent.style.maxHeight = projectContent.scrollHeight + "px";
    }
  }
}

function projectSkillsResponsive() {
  // makes the skills section of each project responsive by adjusting the max height of the project content whenever the window is being resized
  const expandedProjectContents = Array.prototype.slice.call(
    document.getElementsByClassName("expanded")
  );
  expandedProjectContents.map((projectContent) => {
    projectContent.style.maxHeight = projectContent.scrollHeight + "px";
  });
}
