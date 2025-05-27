import SkillAndProficiency from "./SkillAndProficiency";
import Icon from "../../const/icons";

export default function Tools() {
  return (
    <div id="tools" class="skill_section">
      <Icon.SkillsHeading skillType="tools" />
      <p>
        <SkillAndProficiency
          type="frameworks"
          skill="github"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="vscode"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="android_studio"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="figma"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="postman"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="xcode"
          proficiency="beginner"
        />
        <SkillAndProficiency
          type="frameworks"
          skill="jira"
          proficiency="beginner"
        />
      </p>
    </div>
  );
}
