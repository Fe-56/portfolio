import SkillAndProficiency from "./SkillAndProficiency";
import Icon from "../../const/icons";

export default function Frameworks() {
  return (
    <div id="frameworks" class="skill_section">
      <Icon.SkillsHeading skillType="frameworks" />
      <div class="d-flex row">
        <div id="frontend" class="sub_skill col-sm-4">
          <Icon.SkillSubHeading skillType="frontend" />
          <p>
            <SkillAndProficiency
              type="frameworks"
              skill="next"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="react"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="html"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="css"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="d3"
              proficiency="beginner"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="bootstrap"
              proficiency="beginner"
            />
          </p>
        </div>
        <div id="backend" class="sub_skill col-sm-4">
          <Icon.SkillSubHeading skillType="backend" />
          <p>
            <SkillAndProficiency
              type="frameworks"
              skill="mongo"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="express"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="node"
              proficiency="intermediate"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="firebase"
              proficiency="intermediate"
            />
          </p>
        </div>
        <div id="mobile" class="sub_skill col-sm-4">
          <Icon.SkillSubHeading skillType="mobile" />
          <p>
            <SkillAndProficiency
              type="frameworks"
              skill="flutter"
              proficiency="proficient"
            />
            <SkillAndProficiency
              type="frameworks"
              skill="pytelegrambot"
              proficiency="intermediate"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
