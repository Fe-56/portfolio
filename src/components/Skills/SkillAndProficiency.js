import Icon from "../../const/icons";
import * as textConst from "../../const/text";

export default function SkillAndProficiency({ type, skill, proficiency }) {
  var proficiencyLevel;
  var icon;

  switch (proficiency) {
    case "spoken_written":
      proficiencyLevel = textConst.SKILLS_LANGUAGES_SPOKEN_WRITTEN;
      break;

    case "proficient":
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_PROFICIENT;
      break;

    case "intermediate":
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_INTERMEDIATE;
      break;

    case "beginner":
      proficiencyLevel = textConst.SKILLS_PROFICIENCY_BEGINNER;
      break;
  }

  switch (type) {
    case "languages":
      icon = <Icon.SkillLanguage languageName={skill} />;
      break;

    case "programming_languages":
      icon = <Icon.HardSkill skillName={skill} />;
      break;

    case "frameworks":
      icon = <Icon.HardSkill skillName={skill} />;
      break;

    case "tools":
      icon = <Icon.HardSkill skillName={skill} />;
      break;
  }

  return (
    <div class="skill">
      {icon} <span class="proficiency_level">{proficiencyLevel}</span>
      <br />
    </div>
  );
}
