import React from "react";
import * as textConst from "./text.js";

const ProjectIcon = ({iconName, labelText=""}) => {
  let iconClass = "fa-solid icon ";

  switch (iconName){
    case "project role":
      iconClass += "fa-briefcase";
      break;

    case "project type":
      iconClass += "fa-diagram-project";
      break;

    case "project timeline":
      iconClass += "fa-timeline";
      break;

    case "view more":
      iconClass += "fa-chevron-down fa-xl expand_collapse_icon";
      labelText = textConst.PROJECT_VIEW_MORE;
      break;

    default:
      break;
  }

  return <span>
    <i class={iconClass}></i>
    {labelText}
  </span>
}

const ExapndCollapseIcon = ({type}) => {
  let iconClass = "fa solid fa-xl icon expand_collapse_icon ";
  var labelText;

  switch (type){
    case "expand":
      iconClass += "fa-chevron-down";
      labelText = textConst.PROJECT_VIEW_MORE;
      break;

    default:
      iconClass += "fa-chevron-down";
      labelText = textConst.PROJECT_VIEW_MORE;
  }

  return <div class="expand_collapse">
    <i class={iconClass}></i>
    {labelText}
  </div>
}

const HardSkill = ({skillName}) => {
  var skill;
  let iconClass = "fa-lg icon ";
  
  switch (skillName){
    case "flutter":
      skill = "Flutter";
      iconClass += "fa-solid fa-f";
      break;

    case "dart":
      skill = "Dart"; 
      iconClass += "fa-solid fa-d";
      break;

    case "android studio":
      skill = "Android Studio"; 
      iconClass += "fa-brands fa-android";
      break;

    case "firestore":
      skill = "Google Firestore"; 
      iconClass += "fa-brands fa-google";
      break;

    case "javascript":
      skill = "JavaScript"; 
      iconClass += "fa-brands fa-square-js";
      break;

    case "react":
      skill = "React"; 
      iconClass += "fa-brands fa-react";
      break;

    case "express":
      skill = "Express.js"; 
      iconClass += "fa-solid fa-e";
      break;

    case "node":
      skill = "Node.js"; 
      iconClass += "fa-brands fa-node";
      break;

    case "github":
      skill = "GitHub"; 
      iconClass += "fa-brands fa-github";
      break;

    case "python":
      skill = "Python"; 
      iconClass += "fa-brands fa-python";
      break;

    case "pytelegrambot":
      skill = "pyTelegramBotAPI"; 
      iconClass += "fa-brands fa-telegram";
      break;

    case "ml":
      skill = "Machine Learning";
      iconClass += "fa-solid fa-robot";
      break;

    case "postman":
      skill = "Postman";
      iconClass += "fa-solid fa-signs-post";
      break;

    case "testing":
      skill = "Software Testing";
      iconClass += "fa-solid fa-vials";
      break;

    case "verilog":
      skill = "Verilog";
      iconClass += "fa-solid fa-v";
      break;

    case "computer engineering":
      skill = "Computer Engineering";
      iconClass += "fa-solid fa-computer";
      break;

    case "java":
      skill = "Java";
      iconClass += "fa-brands fa-java";
      break;

    case "figma":
      skill = "Figma";
      iconClass += "fa-brands fa-figma";
      break;

    case "game design":
      skill = "Game Design";
      iconClass += "fa-solid fa-gamepad";
      break;

    default:
      skill = "Hard Skill";
  }

  return <span class="hard_skill">
    <i class={iconClass}></i>
    {skill}
  </span>
}

const SoftSkill = ({skillName}) => {
  var skill;
  let iconClass = "fa-lg icon ";
  
  switch (skillName){
    case "communication":
      skill = "Communication";
      iconClass += "fa-solid fa-comments";
      break;

    case "researching":
      skill = "Researching for Information"; 
      iconClass += "fa-brands fa-google";
      break;

    case "detail":
      skill = "Attention to Detail"; 
      iconClass += "fa-solid fa-magnifying-glass";
      break;

    case "entrepreneurship":
      skill = "Entrepreneurship";
      iconClass = "fa-solid fa-user-tie";
      break;

    default:
      skill = "Soft Skill";
  }

  return <span class="hard_skill">
    <i class={iconClass}></i>
    {skill}
  </span>
}

const icons = {
  ProjectIcon,
  ExapndCollapseIcon,
  HardSkill,
  SoftSkill
}

export default icons;