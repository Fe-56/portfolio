import React from "react";
import icons from "../../const/icons";
import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";
import giglet_picture from './giglet_picture.jpg';
import wordle_logo from './wordle_logo.png';
import feast_logo from './feast_logo.png';
import will_i_go_broke_logo from './will_i_go_broke_logo.png';
import pokemon_battle_logo from './pokemon_battle_logo.png';

const LookAndEarn = () => {
  return <div id="look_and_earn" class="project">
    <div class="project_title_and_info">
      <h3>
        <u>{textConst.PROJECTS_LOOK_AND_EARN_TITLE}</u>
      </h3>
      <div class="info text-center d-flex align-items-center justify-content-center">
        <h6>
          <icons.ProjectIcon iconName="project role" labelText={textConst.PROJECTS_LOOK_AND_EARN_ROLE} /><br/>
          <icons.ProjectIcon iconName="project type" labelText={textConst.PROJECTS_LOOK_AND_EARN_PROJECT_TYPE} /><br/>
          <icons.ProjectIcon iconName="project timeline" labelText={textConst.PROJECTS_LOOK_AND_EARN_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
      {textConst.PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION}
      </p>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="flutter"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="dart"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="android studio"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="javascript"/><br/>
            <icons.HardSkill skillName="react"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="express"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="node"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const LonelyNoLonger = () => {
  return <div id="lonely_no_longer" class="project">
    <div class="project_title_and_info">
      <h3>
        <u>{textConst.PROJECTS_LONELY_NO_LONGER_TITLE}</u>
      </h3>
      <div class="info text-center d-flex align-items-center justify-content-center">
        <h6>
          <icons.ProjectIcon iconName="project role" labelText={textConst.PROJECTS_LONELY_NO_LONGER_ROLE} /><br/>
          <icons.ProjectIcon iconName="project type" labelText={textConst.PROJECTS_LONELY_NO_LONGER_PROJECT_TYPE} /><br/>
          <icons.ProjectIcon iconName="project timeline" labelText={textConst.PROJECTS_LONELY_NO_LONGER_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_LONELY_NO_LONGER_DESCRIPTION}
      </p>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="pytelegrambot"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="javascript"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const OnlineHateSpeechDetection = () => {
  return <div id="online_hate_speech_detection" class="project">
    <div class="project_title_and_info">
      <h3>
        <u>{textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TITLE}</u>
      </h3>
      <div class="info text-center d-flex align-items-center justify-content-center">
        <h6>
          <icons.ProjectIcon iconName="project role" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_ROLE} /><br/>
          <icons.ProjectIcon iconName="project type" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_TYPE} /><br/>
          <icons.ProjectIcon iconName="project timeline" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_DESCRIPTION}
      </p>
      <div class="project_extras d-flex row">
        <a href={urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_URL} target="_blank" class="project_link">
          <button type="button" class="btn btn-light buttons">
            {textConst.PROJECTS_PROJECT_LINK}
          </button>
        </a>
        <a href={urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_GITHUB_URL} target="_blank" class="project_github">
          <i class="fa-brands fa-github icon"></i>
          {textConst.PROJECTS_GITHUB}
        </a>
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="ml"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const TransferConnect = () => {
  return <div id="transferconnect" class="project">
    <div class="project_title_and_info">
      <h3>
        <u>{textConst.PROJECTS_TRANSFERCONNECT_TITLE}</u>
      </h3>
      <div class="info text-center d-flex align-items-center justify-content-center">
        <h6>
          <icons.ProjectIcon iconName="project role" labelText={textConst.PROJECTS_TRANSFERCONNECT_ROLE} /><br/>
          <icons.ProjectIcon iconName="project type" labelText={textConst.PROJECTS_TRANSFERCONNECT_PROJECT_TYPE} /><br/>
          <icons.ProjectIcon iconName="project timeline" labelText={textConst.PROJECTS_TRANSFERCONNECT_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_TRANSFERCONNECT_PROJECT_DESCRIPTION}
      </p>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="javascript"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="express"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="postman"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="testing"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const Giglet = () => {
  return <div id="giglet" class="project">
    <div class="project_title_and_info d-flex row">
      <h3>
        <u>{textConst.PROJECTS_GIGLET_TITLE}</u>
      </h3>
      <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
        <img src={giglet_picture} loading="lazy" alt="Giglet team picture" id="giglet_picture" class="project_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <icons.ProjectIcon iconName="project role" labelText={textConst.PROJECTS_GIGLET_ROLE} /><br/>
          <icons.ProjectIcon iconName="project type" labelText={textConst.PROJECTS_GIGLET_PROJECT_TYPE} /><br/>
          <icons.ProjectIcon iconName="project timeline" labelText={textConst.PROJECTS_GIGLET_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_GIGLET_PROJECT_DESCRIPTION}
      </p>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="pytelegrambot"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="entrepreneurship"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const Wordle = () => {
  return <div id="wordle" class="project">
    <div class="project_title_and_info d-flex row">
      <h3>
        <u>{textConst.PROJECTS_WORDLE_TITLE}</u>
      </h3>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
        <h6>
          <i class="fa-solid fa-briefcase icon"></i>
          {textConst.PROJECTS_WORDLE_ROLE}<br/>
          <i class="fa-solid fa-diagram-project icon"></i>
          {textConst.PROJECTS_WORDLE_PROJECT_TYPE}<br/>
          <i class="fa-solid fa-timeline icon"></i>
          {textConst.PROJECTS_WORDLE_TIMELINE}
        </h6>
      </div>
      <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-start justify-content-center">
        <img src={wordle_logo} loading="lazy" alt="Wordle logo" id="wordle_logo" class="project_logo"></img>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_WORDLE_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras d-flex row">
        <a href={urlConst.PROJECTS_WORDLE_PROJECT_URL} target="_blank" class="project_link">
          <button type="button" class="btn btn-light buttons">
            {textConst.PROJECTS_PROJECT_LINK}
          </button>
        </a>
        <a href={urlConst.PROJECTS_WORDLE_GITHUB_URL} target="_blank" class="project_github">
          <i class="fa-brands fa-github icon"></i>
          {textConst.PROJECTS_GITHUB}
        </a>
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="verilog"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="computer engineering"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const FEAST = () => {
  return <div id="feast" class="project">
    <div class="project_title_and_info d-flex row">
      <h3>
        <u>{textConst.PROJECTS_FEAST_TITLE}</u>
      </h3>
      <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
        <img src={feast_logo} loading="lazy" alt="FEAST logo" id="feast_logo" class="project_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <i class="fa-solid fa-briefcase icon"></i>
          {textConst.PROJECTS_FEAST_ROLE}<br/>
          <i class="fa-solid fa-diagram-project icon"></i>
          {textConst.PROJECTS_FEAST_PROJECT_TYPE}<br/>
          <i class="fa-solid fa-timeline icon"></i>
          {textConst.PROJECTS_FEAST_TIMELINE}
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_FEAST_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras">
        <a href={urlConst.PROJECTS_FEAST_PROJECT_URL} target="_blank" class="project_link">
          <button type="button" class="btn btn-light buttons">
            {textConst.PROJECTS_PROJECT_LINK}
          </button>
        </a>
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="java"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="android studio"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="github"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="figma"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const WillIGoBroke = () => {
  return <div id="will_i_go_broke" class="project">
    <div class="project_title_and_info d-flex row">
      <h3>
        <u>{textConst.PROJECTS_WILL_I_GO_BROKE_TITLE}</u>
      </h3>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
        <h6>
          <i class="fa-solid fa-briefcase icon"></i>
          {textConst.PROJECTS_WILL_I_GO_BROKE_ROLE}<br/>
          <i class="fa-solid fa-diagram-project icon"></i>
          {textConst.PROJECTS_WILL_I_GO_BROKE_PROJECT_TYPE}<br/>
          <i class="fa-solid fa-timeline icon"></i>
          {textConst.PROJECTS_WILL_I_GO_BROKE_TIMELINE}
        </h6>
      </div>
      <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-start justify-content-center">
        <img src={will_i_go_broke_logo} loading="lazy" alt="Will I Go Broke logo" id="will_i_go_broke_logo" class="project_logo"></img>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_WILL_I_GO_BROKE_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras">
        <a href={urlConst.PROJECTS_WILL_I_GO_BROKE_GITHUB_URL} target= "_blank" class="project_github">
          <i class="fa-brands fa-github icon"></i>
          {textConst.PROJECTS_GITHUB}
        </a>
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="python"/>n&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="pytelegrambot"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const PokemonBattle = () => {
  return <div id="pokemon_battle" class="project">
    <div class="project_title_and_info d-flex row">
      <h3>
        <u>{textConst.PROJECTS_POKEMON_BATTLE_TITLE}</u>
      </h3>
      <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
        <img src={pokemon_battle_logo} loading="lazy" alt="Pokemon Battle logo" id="pokemon_battle_logo_logo" class="project_logo"></img>
      </div>
      <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
        <h6>
          <i class="fa-solid fa-briefcase icon"></i>
          {textConst.PROJECTS_POKEMON_BATTLE_ROLE}<br/>
          <i class="fa-solid fa-diagram-project icon"></i>
          {textConst.PROJECTS_POKEMON_BATTLE_PROJECT_TYPE}<br/>
          <i class="fa-solid fa-timeline icon"></i>
          {textConst.PROJECTS_POKEMON_BATTLE_TIMELINE}
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_POKEMON_BATTLE_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras">
        <a href={urlConst.PROJECTS_POKEMON_BATTLE_GITHUB_URL} target="_blank" class="project_github">
          <i class="fa-brands fa-github icon"></i>
          {textConst.PROJECTS_GITHUB}
        </a>
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <icons.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.HardSkill skillName="game design"/>
          </div>
          <div class="soft_skills">
            <icons.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <icons.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <icons.ExapndCollapseIcon type="expand"/>
  </div>
}

const Project = {
  LookAndEarn,
  LonelyNoLonger,
  OnlineHateSpeechDetection,
  TransferConnect,
  Giglet,
  Wordle,
  FEAST,
  WillIGoBroke,
  PokemonBattle
}
  
export default Project;