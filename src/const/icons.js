import React from "react";
import * as textConst from "./text.js";
import * as urlConst from "./url.js";

const GitHubSourceCodeIcon = () => {
  return <a href={urlConst.SOURCE_CODE_URL} target="_blank" id="github_source">
    <i class="fa-brands fa-github fa-xl" id="github_icon"></i>
    {textConst.SOURCE_CODE}
  </a>
}

const ProjectIcon = ({iconName, labelText=""}) => {
  let iconClass = "fa-solid icon ";

  switch (iconName){
    case "project_role":
      iconClass += "fa-briefcase";
      break;

    case "project_type":
      iconClass += "fa-diagram-project";
      break;

    case "project_timeline":
      iconClass += "fa-timeline";
      break;

    case "view_more":
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

const ProjectGitHub = ({projectName}) => {
  var githubURL;

  switch (projectName){
    case "online_hate_speech_detection":
      githubURL = urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_GITHUB_URL;
      break;

    case "wordle":
      githubURL = urlConst.PROJECTS_WORDLE_GITHUB_URL;
      break;

    case "will_i_go_broke":
      githubURL = urlConst.PROJECTS_WILL_I_GO_BROKE_GITHUB_URL;
      break;

    case "pokemon_battle":
      githubURL = urlConst.PROJECTS_POKEMON_BATTLE_GITHUB_URL;
      break;
  }

  return <a href={githubURL} target="_blank" class="project_github">
    <i class="fa-brands fa-github icon"></i>
    {textConst.PROJECTS_GITHUB}
  </a>
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
      skill = textConst.SKILL_FLUTTER;
      iconClass += "fa-solid fa-f";
      break;

    case "dart":
      skill = textConst.SKILL_DART; 
      iconClass += "fa-solid fa-d";
      break;

    case "android_studio":
      skill = textConst.SKILL_ANDROID_STUDIO; 
      iconClass += "fa-brands fa-android";
      break;

    case "firestore":
      skill = textConst.SKILL_FIRESTORE; 
      iconClass += "fa-brands fa-google";
      break;

    case "javascript":
      skill = textConst.SKILL_JAVASCRIPT; 
      iconClass += "fa-brands fa-square-js";
      break;

    case "react":
      skill = textConst.SKILL_REACT; 
      iconClass += "fa-brands fa-react";
      break;

    case "express":
      skill = textConst.SKILL_EXPRESS; 
      iconClass += "fa-solid fa-e";
      break;

    case "node":
      skill = textConst.SKILL_NODE; 
      iconClass += "fa-brands fa-node";
      break;

    case "github":
      skill = textConst.SKILL_GITHUB; 
      iconClass += "fa-brands fa-github";
      break;

    case "python":
      skill = textConst.SKILL_PYTHON; 
      iconClass += "fa-brands fa-python";
      break;

    case "pytelegrambot":
      skill = textConst.SKILL_PYTELEGRAMBOT; 
      iconClass += "fa-brands fa-telegram";
      break;

    case "ml":
      skill = textConst.SKILL_ML;
      iconClass += "fa-solid fa-robot";
      break;

    case "postman":
      skill = textConst.SKILL_POSTMAN;
      iconClass += "fa-solid fa-signs-post";
      break;

    case "testing":
      skill = textConst.SKILL_TESTING;
      iconClass += "fa-solid fa-vials";
      break;

    case "verilog":
      skill = textConst.SKILL_VERILOG;
      iconClass += "fa-solid fa-v";
      break;

    case "computer_engineering":
      skill = textConst.SKILL_COMPUTER_ENGINEERING;
      iconClass += "fa-solid fa-computer";
      break;

    case "java":
      skill = textConst.SKILL_JAVA;
      iconClass += "fa-brands fa-java";
      break;

    case "figma":
      skill = textConst.SKILL_FIGMA;
      iconClass += "fa-brands fa-figma";
      break;

    case "game_design":
      skill = textConst.SKILL_GAME_DESIGN;
      iconClass += "fa-solid fa-gamepad";
      break;

    case "kotlin":
      skill = textConst.SKILL_KOTLIN;
      iconClass += "fa-solid fa-k";
      break;

    case "swift":
      skill = textConst.SKILL_SWIFT;
      iconClass += "fa-brands fa-swift";
      break;

    case "html":
      skill = textConst.SKILL_HTML;
      iconClass += "fa-brands fa-html5";
      break;

    case "css":
      skill = textConst.SKILL_CSS;
      iconClass += "fa-brands fa-css3-alt";
      break;

    case "d3":
      skill = textConst.SKILL_D3;
      iconClass += "fa-solid fa-d";
      break;

    case "bootstrap":
      skill = textConst.SKILL_BOOTSTRAP;
      iconClass += "fa-brands fa-bootstrap";
      break;

    case "mongo":
      skill = textConst.SKILL_MONGO;
      iconClass += "fa-solid fa-m";
      break;

    case "firebase":
      skill = textConst.SKILL_FIREBASE;
      iconClass += "fa-brands fa-google";
      break;

    case "vscode":
      skill = textConst.SKILL_VSCODE;
      iconClass += "fa-solid fa-v";
      break;

    case "xcode":
      skill = textConst.SKILL_XCODE;
      iconClass += "fa-solid fa-hammer";
      break;

    case "jira":
      skill = textConst.SKILL_JIRA;
      iconClass += "fa-brands fa-jira";
      break;

    case "powerpoint":
      skill = textConst.SKILL_POWERPOINT;
      iconClass += "fa-solid fa-file-powerpoint";
      break;

    case "word":
      skill = textConst.SKILL_WORD;
      iconClass += "fa-solid fa-file-word";
      break;

    case "excel":
      skill = textConst.SKILL_EXCEL;
      iconClass += "fa-solid fa-file-excel";
      break;

    case "systems_testing":
      skill = textConst.SKILL_SYSTEMSTESTING;
      iconClass += "fa-solid fa-vials";
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
      skill = textConst.SKILL_COMMUNICATION;
      iconClass += "fa-solid fa-comments";
      break;

    case "researching":
      skill = textConst.SKILL_RESEARCHING; 
      iconClass += "fa-brands fa-google";
      break;

    case "detail":
      skill = textConst.SKILL_DETAIL; 
      iconClass += "fa-solid fa-magnifying-glass";
      break;

    case "entrepreneurship":
      skill = textConst.SKILL_ENTREPRENEURSHIP;
      iconClass += "fa-solid fa-user-tie";
      break;

    case "teaching":
      skill = textConst.SKILL_TEACHING;
      iconClass += "fa-solid fa-chalkboard";
      break;

    case "pm":
      skill = textConst.SKILL_PM;
      iconClass += "fa-solid fa-list-check";
      break;

    default:
      skill = "Soft Skill";
  }

  return <span class="soft_skill">
    <i class={iconClass}></i>
    {skill}
  </span>
}

const SkillsHeading = ({skillType}) => {
  var type;
  let iconClass = "fa-solid icon ";

  switch (skillType){
    case "languages":
      type = textConst.SKILLS_LANGUAGES_TITLE;
      iconClass += "fa-language";
      break;

    case "programming_languages":
      type = textConst.SKILLS_PROGRAMMING_LANGUAGES_TITLE;
      iconClass += "fa-terminal";
      break;

    case "frameworks":
      type = textConst.SKILLS_FRAMEWORKS_TITLE;
      iconClass += "fa-toolbox";
      break;

    case "tools":
      type = textConst.SKILLS_TOOLS_TITLE;
      iconClass += "fa-screwdriver-wrench";
      break;

    case "certifications":
      type = textConst.SKILLS_CERTIFICATIONS_TITLE;
      iconClass += "fa-certificate";
      break;
  }

  return <h3>
    <i class={iconClass}></i>
    <u>{type}</u>
  </h3>
}

const SkillSubHeading = ({skillType}) => {
  var type;
  let iconClass = "fa-solid icon ";

  switch (skillType){
    case "frontend":
      type = textConst.SKILLS_FRAMEWORKS_FRONTEND;
      iconClass += "fa-desktop";
      break;

    case "backend":
      type = textConst.SKILLS_FRAMEWORKS_BACKEND;
      iconClass += "fa-databse";
      break;

    case "mobile":
      type = textConst.SKILLS_FRAMEWORKS_MOBILE;
      iconClass += "fa-mobile";
      break;
  }

  return <h5>
    <i class={iconClass}></i>
    {type}
  </h5>
}

const SkillLanguage = ({languageName}) => {
  let iconClass = "fa-solid icon fa-lg ";
  var language;

  switch (languageName){
    case "english":
      iconClass += "fa-earth-europe";
      language = textConst.SKILLS_LANGUAGES_ENGLISH;
      break;

    case "mandarin":
      iconClass += "fa-earth-asia";
      language = textConst.SKILLS_LANGUAGES_MANDARIN;
      break;
  }

  return <span>
    <i class={iconClass}></i>
    {language}
  </span>
}

const SkillCertification = ({certificationName}) => {
  var certification;
  var certificationURL;

  switch (certificationName){
    case "responsive":
      certification = textConst.SKILLS_CERTIFICATIONS_RESPONSIVE;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_RESPONSIVE_URL;
      break;

    case "javascript":
      certification = textConst.SKILLS_CERTIFICATIONS_JAVASCRIPT;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_JAVASCRIPT_URL;
      break;

    case "frontend":
      certification = textConst.SKILLS_CERTIFICATIONS_FRONTEND;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_FRONTEND_URL;
      break;

    case "visualisation":
      certification = textConst.SKILLS_CERTIFICATIONS_VISUALISATION;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_VISUALISATION_URL;
      break;

    case "backend":
      certification = textConst.SKILLS_CERTIFICATIONS_BACKEND;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_BACKEND_URL;
      break;

    case "scientific":
      certification = textConst.SKILLS_CERTIFICATIONS_SCIENTIFIC;
      certificationURL = urlConst.SKILLS_CERTIFICATIONS_SCIENTIFIC_URL;
      break;
  }

  return <div class="skill">
    <a href={certificationURL} target="_blank">
      <i class="fa-brands fa-free-code-camp icon fa-lg"></i>
      {certification}
    </a>
  </div>
}

const ExperienceIcon = ({iconName, labelText}) => {
  let iconClass = "fa-solid icon ";

  switch (iconName){
    case "experience_role":
      iconClass += "fa-briefcase";
      break;

    case "experience_location":
      iconClass += "fa-location-dot";
      break;

    case "experience_timeline":
      iconClass += "fa-timeline";
      break;

    default:
      break;
  }

  return <span>
    <i class={iconClass}></i>
    {labelText}
  </span>
}

const HobbyHeading = ({hobbyName}) => {
  let iconClass = "fa-solid icon ";
  var labelText;

  switch (hobbyName){
    case "cycling":
      iconClass += "fa-person-biking";
      labelText = textConst.HOBBIES_CYCLING_TITLE;
      break;

    case "running":
      iconClass += "fa-person-running";
      labelText = textConst.HOBBIES_RUNNING_TITLE;
      break;

    case "guitar":
      iconClass += "fa-guitar";
      labelText = textConst.HOBBIES_GUITAR_TITLE;
      break;

    case "netflix":
      iconClass += "fa-film";
      labelText = textConst.HOBBIES_NETFLIX_TITLE;
      break;

    case "coding":
      iconClass += "fa-code";
      labelText = textConst.HOBBIES_CODING_TITLE;
      break;
  }

  return <h3 class="hobby_title">
    <i class={iconClass}></i>
    <u>{labelText}</u>
  </h3>
}

const HobbyLinkIcon = ({hobbyName}) => {
  let iconClass = "fa-brands icon ";
  var labelText;
  var iconURL;

  switch (hobbyName){
    case "running":
    case "cycling":
      iconClass += "fa-strava";
      labelText = textConst.HOBBIES_RUNNING_CYCLING_STRAVA_TEXT;
      iconURL = urlConst.HOBBIES_RUNNING_CYCLING_STRAVA_URL;
      break;

    case "guitar":
      iconClass += "fa-spotify";
      labelText = textConst.HOBBIES_GUITAR_SPOTIFY_TEXT;
      iconURL = urlConst.HOBBIES_GUITAR_SPOTIFY_URL;
      break;

    case "coding":
      iconClass += "fa-github";
      labelText = textConst.HOBBIES_CODING_GITHUB_TEXT;
      iconURL = urlConst.ABOUT_GITHUB_URL;
      break;
  }

  return <a href={iconURL} target="_blank">
    <i class={iconClass}></i>
    {labelText}
  </a>
}

const ContactLinkIcon = ({contactType}) => {
  let iconClass = "icon ";
  var labelText;
  var iconURL;
  var htmlID;

  switch (contactType){
    case "email":
      iconClass += "fa-solid fa-envelope";
      labelText = textConst.CONTACT_EMAIL;
      iconURL = urlConst.CONTACT_EMAIL_URL;
      htmlID = "email_address";
      break;

    case "linkedin":
      iconClass += "fa-brands fa-linkedin";
      labelText = textConst.CONTACT_LINKEDIN;
      iconURL = urlConst.ABOUT_LINKEDIN_URL;
      htmlID = contactType;
      break;

    case "telegram":
      iconClass += "fa-brands fa-telegram";
      labelText = textConst.CONTACT_TELEGRAM;
      iconURL = urlConst.CONTACT_TELEGRAM_URL;
      htmlID = "telegram_username"
      break;

    case "phone":
      iconClass += "fa-solid fa-phone";
      labelText = textConst.CONTACT_PHONE;
      iconURL = urlConst.CONTACT_PHONE_URL;
      htmlID = "phone_number";
      break;

    case "location":
      iconClass += "fa-solid fa-location-dot";
      labelText = textConst.CONTACT_LOCATION;
      iconURL = urlConst.CONTACT_LOCATION_URL;
      htmlID = contactType
      break;
  }

  return <a href={iconURL} target="_blank" id={htmlID} class="contact_link">
    <i class={iconClass}></i>
    {labelText}
  </a>
}

const Icon = {
  GitHubSourceCodeIcon,
  ProjectIcon,
  ProjectGitHub,
  ExapndCollapseIcon,
  HardSkill,
  SoftSkill,
  SkillsHeading,
  SkillSubHeading,
  SkillLanguage,
  SkillCertification,
  ExperienceIcon,
  HobbyHeading,
  HobbyLinkIcon,
  ContactLinkIcon
}

export default Icon;