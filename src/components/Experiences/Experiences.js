import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Experiences.css';
import hdb_logo from './hdb_logo.png';
import smiletutor_logo from './smiletutor_logo.png';
import dbs_logo from './dbs_logo.jpg';
import coffeespace_logo from './coffeespace_logo.jpg';

export default function Experiences() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_experiences').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="experiences" class="container-fluid">
      <h1 id="experiences_title">Experiences</h1>
      <div id="coffeespace" class="experience">
        <div class="experience_title_and_info d-flex row">
          <h3>
            <u>CoffeeSpace</u>
          </h3>
          <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
            <img src={coffeespace_logo} loading="lazy" alt="CoffeeSpace logo" id="coffeespace_logo" class="company_logo"></img>
          </div>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start d-flex align-items-center justify-content-sm-start justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Software Engineering Intern<br/>
              <i class="fa-solid fa-location-dot icon"></i>
              San Francisco, California, United States<br/>
              <i class="fa-solid fa-timeline icon"></i>
              May 2023 to Present
            </h6>
          </div>
        </div>
        <p class="text-start experience_description">
          - Maintaining and developing new features for CoffeeSpace mobile app using Flutter<br/>
          - Liaising with backend engineer to deliver proper CoffeSpace app functions<br/>
          - Conducting technical research for potential development of new features
        </p>
        <div class="skills">
          <h5 class="skills_title text-center">Skills:</h5>
          <p class="text-center">
            <div class="hard_skills">
              <i class="fa-solid fa-f fa-lg icon"></i>
              Flutter&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-android fa-lg icon"></i>
              Android Studio&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-d fa-lg icon"></i>
              Dart&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-jira fa-lg icon"></i>
              Jira&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-github fa-lg icon"></i>
              GitHub
            </div>
            <div class="soft_skills">
              <i class="fa-solid fa-comments fa-lg icon"></i>
              Communication&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-google fa-lg icon"></i>
              Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
              Attention to detail
            </div>
          </p>
        </div>
      </div>
      <div id="hdb" class="experience">
        <div class="experience_title_and_info d-flex row">
          <h3>
            <u>Housing & Development Board</u>
          </h3>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Mobile Application Development Intern<br/>
              <i class="fa-solid fa-location-dot icon"></i>
              Singapore<br/>
              <i class="fa-solid fa-timeline icon"></i>
              August 2022 to December 2022
            </h6>
          </div>
          <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
            <img src={hdb_logo} loading="lazy" alt="HDB logo" id="hdb_logo" class="company_logo"></img>
          </div>
        </div>
        <p class="text-start experience_description">
          - Maintained the Android and iOS codebases of the Mobile@HDB application, in Java (Android Studio) and Swift (Xcode) respectively<br/>
          - Developed new features for the Mobile@HDB application<br/>
          - Researched and built two functional Augmented Reality (AR) prototypes using different open source AR libraries in Kotlin
        </p>
        <div class="skills">
          <h5 class="skills_title text-center">Skills:</h5>
          <p class="text-center">
            <div class="hard_skills">
              <i class="fa-brands fa-java fa-lg icon"></i>
              Java&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-android fa-lg icon"></i>
              Android Studio&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-swift fa-lg icon"></i>
              Swift&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-hammer fa-lg icon"></i>
              Xcode&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-k fa-lg icon"></i>
              Kotlin&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-github fa-lg icon"></i>
              GitHub
            </div>
            <div class="soft_skills">
              <i class="fa-solid fa-comments fa-lg icon"></i>
              Communication&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-brands fa-google fa-lg icon"></i>
              Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
              Attention to detail
            </div>
          </p>
        </div>
      </div>
      <div id="smiletutor" class="experience">
        <div class="experience_title_and_info d-flex row">
          <h3>
            <u>SmileTutor</u>
          </h3>
          <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-start">
            <img src={smiletutor_logo} loading="lazy" alt="SmileTutor logo" id="smiletutor_logo" class="company_logo"></img>
          </div>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Private Tutor (part-time)<br/>
              <i class="fa-solid fa-location-dot icon"></i>
              Singapore<br/>
              <i class="fa-solid fa-timeline icon"></i>
              January 2022 to September 2022
            </h6>
          </div>
        </div>
        <p class="text-start experience_description">
          - Subjects taught: Primary 6 Mathematics and Science for Primary School Leaving Examinations (PSLE)<br/>
          - Conducted weekly one-on-one lessons at the student's residence<br/>
          - Clarified the student's doubts, went through their homework and exam papers with them<br/>
          - Explained and taught them concepts thay they were otherwise unsure of<br/>
          - Liaised with the student's parents to ensure that their child's homework and assignments are done on time
        </p>
        <div class="skills">
          <h5 class="skills_title text-center">Skills:</h5>
          <p class="text-center">
            <div class="soft_skills">
              <i class="fa-solid fa-comments fa-lg icon"></i>
              Communication&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-chalkboard fa-lg icon"></i>
              Teaching
            </div>
          </p>
        </div>
      </div>
      <div id="dbs" class="experience">
        <div class="experience_title_and_info d-flex row">
          <h3>
            <u>DBS Bank</u>
          </h3>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Business Analyst Intern<br/>
              <i class="fa-solid fa-location-dot icon"></i>
              Singapore<br/>
              <i class="fa-solid fa-timeline icon"></i>
              May 2021 to September 2021
            </h6>
          </div>
          <div class="company_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-start">
            <img src={dbs_logo} loading="lazy" alt="DBS logo" id="dbs_logo" class="company_logo"></img>
          </div>
        </div>
        <p class="text-start experience_description">
          - Performed primary and secondary research, conduct analyses and appropriate modelling tasks that feeds directly into the development of technology-enabled solutions to tackle clients’ complex business problems<br/>
          - Supported the project teams in developing presentation materials and in coordination of communications with the client<br/>
          - Assisted the project teams in delivery of business-driven, technology-enabled solutions to help the clients meet pressing challenges and seize opportunities in their respective markets
        </p>
        <div class="skills">
          <h5 class="skills_title text-center">Skills:</h5>
          <p class="text-center">
            <div class="hard_skills">
              <i class="fa-solid fa-file-powerpoint fa-lg icon"></i>
              Powerpoint&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-file-word fa-lg icon"></i>
              Word&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-file-excel fa-lg icon"></i>
              Excel&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-signs-post fa-lg icon"></i>
              Postman&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-vials fa-lg icon"></i>
              Systems testing
            </div>
            <div class="soft_skills">
              <i class="fa-solid fa-comments fa-lg icon"></i>
              Communication&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-list-check fa-lg icon"></i>
              Project management&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
              Attention to detail
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}