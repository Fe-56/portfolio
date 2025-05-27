import { useEffect } from "react";
import * as textConst from "../../const/text";
import pageLoad from "../utils/pageLoad";
import Certifications from "./Certifications";
import Frameworks from "./Frameworks";
import Languages from "./Languages";
import ProgrammingLanguages from "./ProgrammingLanguages";
import "./Skills.css";
import Tools from "./Tools";

export default function Skills() {
  useEffect(() => {
    pageLoad();
    document.getElementById("nav_skills").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="skills" class="container-fluid">
      <h1 id="skills_title">{textConst.SKILLS_TITLE}</h1>
      <Languages />
      <ProgrammingLanguages />
      <Frameworks />
      <Tools />
      <Certifications />
    </div>
  );
}
