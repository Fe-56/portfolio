import React from "react";
import Icon from "../../const/icons";
import * as textConst from "../../const/text";
import hdb_logo from './hdb_logo.png';
import smiletutor_logo from './smiletutor_logo.png';
import dbs_logo from './dbs_logo.jpg';
import coffeespace_logo from './coffeespace_logo.jpg';
import myexpoplace_logo from './myexpoplace_logo.png';

const MyExpoPlace = () => {
  return <div id="myexpoplace" class="experience">
    <div class="experience_title_and_info d-flex row">
      <h3>
        <u>{textConst.EXPERIENCES_MYEXPOPLACE_TITLE}</u>
      </h3>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
        <h6>
          <Icon.ExperienceIcon iconName="experience_role" labelText={textConst.EXPERIENCES_MYEXPOPLACE_ROLE} /><br/>
          <Icon.ExperienceIcon iconName="experience_location" labelText={textConst.EXPERIENCES_MYEXPOPLACE_LOCATION} /><br/>
          <Icon.ExperienceIcon iconName="experience_timeline" labelText={textConst.EXPERIENCES_MYEXPOPLACE_TIMELINE} />
        </h6>
      </div>
      <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
        <img src={myexpoplace_logo} loading="lazy" alt="HDB logo" id="hdb_logo" class="company_logo"></img>
      </div>
    </div>
    <p class="text-start experience_description">
     {textConst.EXPERIENCES_MYEXPOPLACE_EXPERIENCE_DESCRIPTION}
    </p>
    <div class="skills">
      <h5 class="skills_title text-center">Skills:</h5>
      <p class="text-center">
      <div class="hard_skills">
          <Icon.HardSkill skillName="flutter" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="android_studio" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="dart" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="github" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="figma" />
        </div>
        <div class="soft_skills">
          <Icon.SoftSkill skillName="communication" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="researching" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="detail" />
        </div>
      </p>
    </div>
  </div>
}

const CoffeeSpace = () => {
  return <div id="coffeespace" class="experience">
    <div class="experience_title_and_info d-flex row">
      <h3>
        <u>{textConst.EXPERIENCES_COFFEESPACE_TITLE}</u>
      </h3>
      <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
        <img src={coffeespace_logo} loading="lazy" alt="CoffeeSpace logo" id="coffeespace_logo" class="company_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <Icon.ExperienceIcon iconName="experience_role" labelText={textConst.EXPERIENCES_COFFEESPACE_ROLE} /><br/>
          <Icon.ExperienceIcon iconName="experience_location" labelText={textConst.EXPERIENCES_COFFEESPACE_LOCATION} /><br/>
          <Icon.ExperienceIcon iconName="experience_timeline" labelText={textConst.EXPERIENCES_COFFEESPACE_TIMELINE} />
        </h6>
      </div>
    </div>
    <p class="text-start experience_description">
      {textConst.EXPERIENCES_COFFEESPACE_EXPERIENCE_DESCRIPTION}
    </p>
    <div class="skills">
      <h5 class="skills_title text-center">Skills:</h5>
      <p class="text-center">
        <div class="hard_skills">
          <Icon.HardSkill skillName="flutter" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="android_studio" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="dart" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="jira" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="github" />
        </div>
        <div class="soft_skills">
          <Icon.SoftSkill skillName="communication" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="researching" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="detail" />
        </div>
      </p>
    </div>
  </div>
}

const HDB = () => {
  return <div id="hdb" class="experience">
    <div class="experience_title_and_info d-flex row">
      <h3>
        <u>{textConst.EXPERIENCES_HDB_TITLE}</u>
      </h3>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
        <h6>
          <Icon.ExperienceIcon iconName="experience_role" labelText={textConst.EXPERIENCES_HDB_ROLE} /><br/>
          <Icon.ExperienceIcon iconName="experience_location" labelText={textConst.EXPERIENCES_HDB_LOCATION} /><br/>
          <Icon.ExperienceIcon iconName="experience_timeline" labelText={textConst.EXPERIENCES_HDB_TIMELINE} />
        </h6>
      </div>
      <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
        <img src={hdb_logo} loading="lazy" alt="HDB logo" id="hdb_logo" class="company_logo"></img>
      </div>
    </div>
    <p class="text-start experience_description">
      {textConst.EXPERIENCES_HDB_EXPERIENCE_DESCRIPTION}
    </p>
    <div class="skills">
      <h5 class="skills_title text-center">Skills:</h5>
      <p class="text-center">
        <div class="hard_skills">
          <Icon.HardSkill skillName="java" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="android_studio" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="swift" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="xcode" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="kotlin" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="github" />
        </div>
        <div class="soft_skills">
          <Icon.SoftSkill skillName="communication" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="researching" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="detail" />
        </div>
      </p>
    </div>
  </div>
}

const SmileTutor = () => {
  return <div id="smiletutor" class="experience">
    <div class="experience_title_and_info d-flex row">
      <h3>
        <u>{textConst.EXPERIENCES_SMILETUTOR_TITLE}</u>
      </h3>
      <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
        <img src={smiletutor_logo} loading="lazy" alt="SmileTutor logo" id="smiletutor_logo" class="company_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <Icon.ExperienceIcon iconName="experience_role" labelText={textConst.EXPERIENCES_SMILETUTOR_ROLE} /><br/>
          <Icon.ExperienceIcon iconName="experience_location" labelText={textConst.EXPERIENCES_SMILETUTOR_LOCATION} /><br/>
          <Icon.ExperienceIcon iconName="experience_timeline" labelText={textConst.EXPERIENCES_SMILETUTOR_TIMELINE} />
        </h6>
      </div>
    </div>
    <p class="text-start experience_description">
      {textConst.EXPERIENCES_SMILETUTOR_EXPERIENCE_DESCRIPTION}
    </p>
    <div class="skills">
      <h5 class="skills_title text-center">Skills:</h5>
      <p class="text-center">
        <div class="soft_skills">
          <Icon.SoftSkill skillName="communication" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="teaching" />
        </div>
      </p>
    </div>
  </div>
}

const DBS = () => {
  return <div id="dbs" class="experience">
    <div class="experience_title_and_info d-flex row">
      <h3>
        <u>{textConst.EXPERIENCES_DBS_TITLE}</u>
      </h3>
      <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-start">
        <img src={dbs_logo} loading="lazy" alt="DBS logo" id="dbs_logo" class="company_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <Icon.ExperienceIcon iconName="experience_role" labelText={textConst.EXPERIENCES_DBS_ROLE} /><br/>
          <Icon.ExperienceIcon iconName="experience_location" labelText={textConst.EXPERIENCES_DBS_LOCATION} /><br/>
          <Icon.ExperienceIcon iconName="experience_timeline" labelText={textConst.EXPERIENCES_DBS_TIMELINE} />
        </h6>
      </div>
    </div>
    <p class="text-start experience_description">
      {textConst.EXPERIENCES_DBS_EXPERIENCE_DESCRIPTION}
    </p>
    <div class="skills">
      <h5 class="skills_title text-center">Skills:</h5>
      <p class="text-center">
        <div class="hard_skills">
          <Icon.HardSkill skillName="powerpoint" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="word" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="excel" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="postman" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.HardSkill skillName="systems_testing" />
        </div>
        <div class="soft_skills">
          <Icon.SoftSkill skillName="communication" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="pm" />&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon.SoftSkill skillName="detail" />
        </div>
      </p>
    </div>
  </div>
}

const Experience = {
  MyExpoPlace,
  CoffeeSpace,
  HDB,
  SmileTutor,
  DBS
}

export default Experience;
