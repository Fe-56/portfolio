import SkillAndProficiency from "./SkillAndProficiency";
import Icon from "../../const/icons";

export default function ProgrammingLanguages() {
  return (
    <div id="programming_languages" class="skill_section">
      <Icon.SkillsHeading skillType="programming_languages" />
      <p>
        <SkillAndProficiency
          type="programming_languages"
          skill="typescript"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="javascript"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="python"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="dart"
          proficiency="intermediate"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="sql"
          proficiency="beginner"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="java"
          proficiency="beginner"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="kotlin"
          proficiency="beginner"
        />
        <SkillAndProficiency
          type="programming_languages"
          skill="swift"
          proficiency="beginner"
        />
      </p>
    </div>
  );
}
