import { useEffect } from "react";
import * as textConst from "../../const/text";
import pageLoad from "../utils/pageLoad";
import coffeespace_logo from "./coffeespace_logo.jpg";
import dbs_logo from "./dbs_logo.jpg";
import Experience from "./Experience";
import "./Experiences.css";
import hdb_logo from "./hdb_logo.png";
import myexpoplace_logo from "./myexpoplace_logo.png";
import smiletutor_logo from "./smiletutor_logo.png";

export default function Experiences() {
  useEffect(() => {
    pageLoad();
    document.getElementById("nav_experiences").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  const experiences = [
    {
      id: "dbs2",
      title: textConst.EXPERIENCES_DBS2_TITLE,
      role: textConst.EXPERIENCES_DBS2_ROLE,
      location: textConst.EXPERIENCES_DBS2_LOCATION,
      timeline: textConst.EXPERIENCES_DBS2_TIMELINE,
      logo: dbs_logo,
      logoAlt: textConst.EXPERIENCES_DBS2_LOGO_ALT,
      description: textConst.EXPERIENCES_DBS2_EXPERIENCE_DESCRIPTION,
      hardskills: ["next", "typescript", "mongo", "node", "github", "jira"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "smiletutor",
      title: textConst.EXPERIENCES_SMILETUTOR_TITLE,
      role: textConst.EXPERIENCES_SMILETUTOR_ROLE,
      location: textConst.EXPERIENCES_SMILETUTOR_LOCATION,
      timeline: textConst.EXPERIENCES_SMILETUTOR_TIMELINE,
      logo: smiletutor_logo,
      logoAlt: textConst.EXPERIENCES_SMILETUTOR_LOGO_ALT,
      description: textConst.EXPERIENCES_SMILETUTOR_EXPERIENCE_DESCRIPTION,
      hardskills: [],
      softSkills: ["communication", "teaching"],
    },
    {
      id: "myexpoplace",
      title: textConst.EXPERIENCES_MYEXPOPLACE_TITLE,
      role: textConst.EXPERIENCES_MYEXPOPLACE_ROLE,
      location: textConst.EXPERIENCES_MYEXPOPLACE_LOCATION,
      timeline: textConst.EXPERIENCES_MYEXPOPLACE_TIMELINE,
      logo: myexpoplace_logo,
      logoAlt: textConst.EXPERIENCES_MYEXPOPLACE_LOGO_ALT,
      description: textConst.EXPERIENCES_MYEXPOPLACE_EXPERIENCE_DESCRIPTION,
      hardskills: ["flutter", "android_studio", "dart", "github", "figma"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "coffeespace",
      title: textConst.EXPERIENCES_COFFEESPACE_TITLE,
      role: textConst.EXPERIENCES_COFFEESPACE_ROLE,
      location: textConst.EXPERIENCES_COFFEESPACE_LOCATION,
      timeline: textConst.EXPERIENCES_COFFEESPACE_TIMELINE,
      logo: coffeespace_logo,
      logoAlt: textConst.EXPERIENCES_COFFEESPACE_LOGO_ALT,
      description: textConst.EXPERIENCES_COFFEESPACE_EXPERIENCE_DESCRIPTION,
      hardskills: ["flutter", "android_studio", "dart", "jira", "github"],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "hdb",
      title: textConst.EXPERIENCES_HDB_TITLE,
      role: textConst.EXPERIENCES_HDB_ROLE,
      location: textConst.EXPERIENCES_HDB_LOCATION,
      timeline: textConst.EXPERIENCES_HDB_TIMELINE,
      logo: hdb_logo,
      logoAlt: textConst.EXPERIENCES_HDB_LOGO_ALT,
      description: textConst.EXPERIENCES_HDB_EXPERIENCE_DESCRIPTION,
      hardskills: [
        "java",
        "android_studio",
        "swift",
        "xcode",
        "kotlin",
        "github",
      ],
      softSkills: ["communication", "researching", "detail"],
    },
    {
      id: "dbs",
      title: textConst.EXPERIENCES_DBS_TITLE,
      role: textConst.EXPERIENCES_DBS_ROLE,
      location: textConst.EXPERIENCES_DBS_LOCATION,
      timeline: textConst.EXPERIENCES_DBS_TIMELINE,
      logo: dbs_logo,
      logoAlt: textConst.EXPERIENCES_DBS_LOGO_ALT,
      description: textConst.EXPERIENCES_DBS_EXPERIENCE_DESCRIPTION,
      hardskills: ["powerpoint", "word", "excel", "postman", "systems_testing"],
      softSkills: ["communication", "pm", "detail"],
    },
  ];

  return (
    <div id="experiences" class="container-fluid">
      <h1 id="experiences_title">{textConst.EXPERIENCES_TITLE}</h1>
      {experiences.map((experience, index) => {
        return (
          <Experience
            key={experience.id}
            id={experience.id}
            title={experience.title}
            role={experience.role}
            location={experience.location}
            timeline={experience.timeline}
            logo={experience.logo}
            logoAlt={experience.logoAlt}
            description={experience.description}
            hardSkills={experience.hardskills}
            softSkills={experience.softSkills}
            index={index}
          />
        );
      })}
    </div>
  );
}
