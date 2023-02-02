import React, { useEffect } from "react";
import './Skills.css';

export default function Skills() {
  useEffect(() => {
    window.focus();
    window.scrollTo(0, 0);
    document.getElementById('nav_skills').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="skills" class="container-fluid">
      <h1 id="skills_title">Skills</h1>
      <div id="languages" class="skill_section">
        <h3>
          <i class="fa-solid fa-language icon"></i>
          <u>Languages</u>
        </h3>
        <p>
          <div class="skill">
            <i class="fa-solid fa-earth-europe icon fa-lg"></i>
            English <span class="proficiency_level">(spoken & written)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-earth-asia icon fa-lg"></i>
            Mandarin <span class="proficiency_level">(spoken & written)</span><br/>
          </div>
        </p>
      </div>
      <div id="programming_languages" class="skill_section">
        <h3>
          <i class="fa-solid fa-terminal icon"></i>
          <u>Programming Languages</u>
        </h3>
        <p>
          <div class="skill">
            <i class="fa-brands fa-python icon fa-lg"></i>
            Python <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-java icon fa-lg"></i>
            Java <span class="proficiency_level">(intermediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-square-js icon fa-lg"></i>
            JavaScript <span class="proficiency_level">(intermediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-d icon "></i>
            Dart <span class="proficiency_level">(intermediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-k icon fa-lg"></i>
            Kotlin <span class="proficiency_level">(beginner)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-swift icon fa-lg"></i>
            Swift <span class="proficiency_level">(beginner)</span><br/>
          </div>
        </p>
      </div>
      <div id="frameworks" class="skill_section">
        <h3>
          <i class="fa-solid fa-toolbox icon"></i>
          <u>Frameworks</u>
        </h3>
        <div class="d-flex row">
          <div id="frontend" class="sub_skill col-sm-4">
            <h5>
              <i class="fa-solid fa-desktop icon"></i>
              Front-end
            </h5>
            <p>
              <div class="skill">
                <i class="fa-brands fa-html5 icon fa-lg"></i>
                HTML <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-brands fa-css3-alt icon fa-lg"></i>
                CSS <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-brands fa-react icon fa-lg"></i>
                React <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-solid fa-d icon fa-lg"></i>
                D3.js <span class="proficiency_level">(beginner)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-brands fa-bootstrap icon fa-lg"></i>
                Bootstrap <span class="proficiency_level">(beginner)</span><br/>
              </div>
            </p>
          </div>
          <div id="backend" class="sub_skill col-sm-4">
            <h5>
              <i class="fa-solid fa-database icon"></i>
              Back-end
            </h5>
            <p>
              <div class="skill">
                <i class="fa-solid fa-m icon fa-lg"></i>
                MongoDB <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-solid fa-e icon fa-lg"></i>
                Express.js <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-brands fa-node icon fa-lg"></i>
                Node.js <span class="proficiency_level">(intermediate)</span><br/>
              </div>
            </p>
          </div>
          <div id="mobile" class="sub_skill col-sm-4">
            <h5>
              <i class="fa-solid fa-mobile icon"></i>
              Mobile
            </h5>
            <p>
              <div class="skill">
                <i class="fa-solid fa-f icon fa-lg"></i>
                Flutter <span class="proficiency_level">(intermediate)</span><br/>
              </div>
              <div class="skill">
                <i class="fa-brands fa-telegram icon fa-lg"></i>
                pyTelegramBotAPI <span class="proficiency_level">(intermediate)</span><br/>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div id="tools" class="skill_section">
        <h3>
          <i class="fa-solid fa-screwdriver-wrench icon"></i>
          <u>Tools</u>
        </h3>
        <p>
          <div class="skill">
            <i class="fa-brands fa-github icon fa-lg"></i>
            GitHub <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-v icon fa-lg"></i>
            Visual Studio Code <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-android icon fa-lg"></i>
            Android Studio <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-google icon fa-lg"></i>
            Google Firebase <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-figma icon fa-lg"></i>
            Figma <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-signs-post icon fa-lg"></i>
            Postman <span class="proficiency_level">(intemediate)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-solid fa-hammer fa-lg icon"></i>
            Xcode <span class="proficiency_level">(beginner)</span><br/>
          </div>
          <div class="skill">
            <i class="fa-brands fa-jira fa-lg icon"></i>
            Jira <span class="proficiency_level">(beginner)</span><br/>
          </div>
        </p>
      </div>
    </div>
  );
}