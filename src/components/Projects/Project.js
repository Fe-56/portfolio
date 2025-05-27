import * as textConst from "../../const/text";
import Icon from "../../const/icons";

export default function Project({
  id,
  title,
  role,
  type,
  timeline,
  logo = null,
  logoAlt = null,
  description,
  link = null,
  github = null,
  hardSkills,
  softSkills,
  index,
}) {
  return (
    <div id={id} class="project">
      <div class="project_title_and_info d-flex row">
        <h3>
          <u>{title}</u>
        </h3>
        {logo ? (
          index % 2 == 0 ? (
            <>
              <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-start justify-content-center">
                <img
                  src={logo}
                  loading="lazy"
                  alt={logoAlt}
                  id={`${id}_picture`}
                  class="project_logo"
                ></img>
              </div>
              <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
                <h6>
                  <Icon.ProjectIcon iconName="project_role" labelText={role} />
                  <br />
                  <Icon.ProjectIcon iconName="project_type" labelText={type} />
                  <br />
                  <Icon.ProjectIcon
                    iconName="project_timeline"
                    labelText={timeline}
                  />
                  <br />
                </h6>
              </div>
            </>
          ) : (
            <>
              <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
                <h6>
                  <Icon.ProjectIcon iconName="project_role" labelText={role} />
                  <br />
                  <Icon.ProjectIcon iconName="project_type" labelText={type} />
                  <br />
                  <Icon.ProjectIcon
                    iconName="project_timeline"
                    labelText={timeline}
                  />
                  <br />
                </h6>
              </div>
              <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
                <img
                  src={logo}
                  loading="lazy"
                  alt={logoAlt}
                  id={`${id}_picture`}
                  class="project_logo"
                ></img>
              </div>
            </>
          )
        ) : (
          <div class="info text-center d-flex align-items-center justify-content-center">
            <h6>
              <Icon.ProjectIcon iconName="project_role" labelText={role} />
              <br />
              <Icon.ProjectIcon iconName="project_type" labelText={type} />
              <br />
              <Icon.ProjectIcon
                iconName="project_timeline"
                labelText={timeline}
              />
              <br />
            </h6>
          </div>
        )}
      </div>
      <div class="project_content">
        <p class="text-start project_description">{description}</p>
        <div class="project_extras d-flex row">
          {link && (
            <a href={link} target="_blank" class="project_link">
              <button type="button" class="btn btn-light buttons">
                {textConst.PROJECTS_PROJECT_LINK}
              </button>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" class="project_github">
              <i class="fa-brands fa-github icon"></i>
              {textConst.PROJECTS_GITHUB}
            </a>
          )}
        </div>
        <div class="skills">
          <h5 class="skills_title text-center">
            {textConst.PROJECTS_SKILLS_LABEL}
          </h5>
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
      <Icon.ExapndCollapseIcon type="expand" />
    </div>
  );
}
