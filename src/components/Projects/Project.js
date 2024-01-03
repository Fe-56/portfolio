import React from "react";
import Icon from "../../const/icons";
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_LOOK_AND_EARN_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_LOOK_AND_EARN_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_LOOK_AND_EARN_TIMELINE} /><br/>
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
            <Icon.HardSkill skillName="flutter"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="dart"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="android_studio"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="javascript"/><br/>
            <Icon.HardSkill skillName="react"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="express"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="node"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_LONELY_NO_LONGER_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_LONELY_NO_LONGER_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_LONELY_NO_LONGER_TIMELINE} /><br/>
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
            <Icon.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="pytelegrambot"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="javascript"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_DESCRIPTION}
      </p>
      <div class="project_extras d-flex row">
        <ProjectLink projectName="online_hate_speech_detection" />
        <Icon.ProjectGitHub projectName="online_hate_speech_detection" />
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <Icon.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="ml"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_TRANSFERCONNECT_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_TRANSFERCONNECT_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_TRANSFERCONNECT_TIMELINE} /><br/>
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
            <Icon.HardSkill skillName="javascript"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="express"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="postman"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="testing"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_GIGLET_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_GIGLET_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_GIGLET_TIMELINE} /><br/>
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
            <Icon.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="pytelegrambot"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="firestore"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="entrepreneurship"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_WORDLE_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_WORDLE_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_WORDLE_TIMELINE} /><br/>
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
        <ProjectLink projectName="wordle" />
        <Icon.ProjectGitHub projectName="wordle" />
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <Icon.HardSkill skillName="verilog"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="computer_engineering"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_FEAST_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_FEAST_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_FEAST_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_FEAST_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras">
        <ProjectLink projectName="feast" />
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <Icon.HardSkill skillName="java"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="android_studio"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="github"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="figma"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_WILL_I_GO_BROKE_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_WILL_I_GO_BROKE_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_WILL_I_GO_BROKE_TIMELINE} /><br/>
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
        <Icon.ProjectGitHub projectName="will_i_go_broke" />
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <Icon.HardSkill skillName="python"/>n&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="pytelegrambot"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
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
          <Icon.ProjectIcon iconName="project_role" labelText={textConst.PROJECTS_POKEMON_BATTLE_ROLE} /><br/>
          <Icon.ProjectIcon iconName="project_type" labelText={textConst.PROJECTS_POKEMON_BATTLE_PROJECT_TYPE} /><br/>
          <Icon.ProjectIcon iconName="project_timeline" labelText={textConst.PROJECTS_POKEMON_BATTLE_TIMELINE} /><br/>
        </h6>
      </div>
    </div>
    <div class="project_content">
      <p class="text-start project_description">
        {textConst.PROJECTS_POKEMON_BATTLE_PROJECT_DESCRIPTION}
      </p>
      <div class="project_extras">
        <Icon.ProjectGitHub projectName="pokemon_battle" />
      </div>
      <div class="skills">
        <h5 class="skills_title text-center">{textConst.PROJECTS_SKILLS_LABEL}</h5>
        <p class="text-center">
          <div class="hard_skills">
            <Icon.HardSkill skillName="python"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.HardSkill skillName="game_design"/>
          </div>
          <div class="soft_skills">
            <Icon.SoftSkill skillName="communication"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="researching"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon.SoftSkill skillName="detail"/>
          </div>
        </p>
      </div>
    </div>
    <Icon.ExapndCollapseIcon type="expand"/>
  </div>
}

const ProjectLink = ({projectName}) => {
  var projectURL;

  switch (projectName){
    case "online_hate_speech_detection":
      projectURL = urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_URL;
      break;

    case "wordle":
      projectURL = urlConst.PROJECTS_WORDLE_PROJECT_URL;
      break;

    case "feast":
      projectURL = urlConst.PROJECTS_FEAST_PROJECT_URL;
      break;
  }

  return <a href={projectURL} target="_blank" class="project_link">
    <button type="button" class="btn btn-light buttons">
      {textConst.PROJECTS_PROJECT_LINK}
    </button>
  </a>
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