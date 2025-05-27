import Icon from "../../const/icons";

export default function Certifications() {
  return (
    <div id="certifications" class="skill_section">
      <Icon.SkillsHeading skillType="certifications" />
      <p>
        <Icon.SkillCertification certificationName="responsive" />
        <Icon.SkillCertification certificationName="javascript" />
        <Icon.SkillCertification certificationName="frontend" />
        <Icon.SkillCertification certificationName="visualisation" />
        <Icon.SkillCertification certificationName="backend" />
        <Icon.SkillCertification certificationName="scientific" />
        <Icon.SkillCertification certificationName="data" />
      </p>
    </div>
  );
}
