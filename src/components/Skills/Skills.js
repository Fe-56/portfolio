import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import "./Skills.css";
import * as textConst from "../../const/text";
import Skill from "./Skill";

export default function Skills() {
  useEffect(() => {
    pageLoad();
    document.getElementById("nav_skills").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="skills" class="container-fluid">
      <h1 id="skills_title">{textConst.SKILLS_TITLE}</h1>
      <Skill.Languages />
      <Skill.ProgrammingLanguages />
      <Skill.Frameworks />
      <Skill.Tools />
      <Skill.Certifications />
    </div>
  );
}
