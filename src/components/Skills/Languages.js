import SkillAndProficiency from './SkillAndProficiency';
import Icon from "../../const/icons";

export default function Languages() {
  return (
    <div id="languages" class="skill_section">
      <Icon.SkillsHeading skillType="languages" />
      <p>
        <SkillAndProficiency
          type="languages"
          skill="english"
          proficiency="spoken_written"
        />
        <SkillAndProficiency
          type="languages"
          skill="mandarin"
          proficiency="spoken_written"
        />
      </p>
    </div>
  );
}
