import Icon from "../../const/icons";

export default function Experience({
  id,
  title,
  role,
  location,
  timeline,
  logo,
  logoAlt,
  description,
  hardSkills,
  softSkills,
  index,
}) {
  return (
    <div id={id} class="experience">
      <div class="experience_title_and_info d-flex row">
        <h3>
          <u>{title}</u>
        </h3>
        {index % 2 == 0 ? (
          <>
            <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
              <img
                src={logo}
                loading="lazy"
                alt={logoAlt}
                id={`${id}_logo`}
                class="company_logo"
              ></img>
            </div>
            <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start d-flex align-items-center justify-content-sm-start justify-content-center">
              <h6>
                <Icon.ExperienceIcon
                  iconName="experience_role"
                  labelText={role}
                />
                <br />
                <Icon.ExperienceIcon
                  iconName="experience_location"
                  labelText={location}
                />
                <br />
                <Icon.ExperienceIcon
                  iconName="experience_timeline"
                  labelText={timeline}
                />
              </h6>
            </div>
          </>
        ) : (
          <>
            <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
              <h6>
                <Icon.ExperienceIcon
                  iconName="experience_role"
                  labelText={role}
                />
                <br />
                <Icon.ExperienceIcon
                  iconName="experience_location"
                  labelText={location}
                />
                <br />
                <Icon.ExperienceIcon
                  iconName="experience_timeline"
                  labelText={timeline}
                />
              </h6>
            </div>
            <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
              <img
                src={logo}
                loading="lazy"
                alt={logoAlt}
                id={`${id}_logo`}
                class="company_logo"
              ></img>
            </div>
          </>
        )}
      </div>
      <p class="text-start experience_description">{description}</p>
      <div class="skills">
        <h5 class="skills_title text-center">Skills:</h5>
        <p class="text-center">
          <div class="hard_skills">
            {hardSkills.map((hardSkill, skillIndex) => {
              if (skillIndex == hardSkills.length - 1) {
                return <Icon.HardSkill skillName={hardSkill} />;
              } else {
                return (
                  <>
                    <Icon.HardSkill skillName={hardSkill} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {skillIndex > 0 && skillIndex % 4 == 0 && <br />}
                  </>
                );
              }
            })}
          </div>
          <div class="soft_skills">
            {softSkills.map((softSkill, skillIndex) => {
              if (skillIndex == softSkills.length - 1) {
                return <Icon.SoftSkill skillName={softSkill} />;
              } else {
                return (
                  <>
                    <Icon.SoftSkill skillName={softSkill} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {skillIndex > 0 && skillIndex % 4 == 0 && <br />}
                  </>
                );
              }
            })}
          </div>
        </p>
      </div>
    </div>
  );
}
