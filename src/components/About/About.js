import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './About.css';
import profilePicture from './profile_picture_portfolio.jpg';
import Timeline from './Timeline';

const name = "Lim Fuo En";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const about = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a general visiting student (Master's) at Xi'an Jiaotong University (西安交通大学) until January 2024.";

export default function About() {
  useEffect(() => {
    pageLoad();
  });

  return (
    <div id="about" class="container-fluid">
      <div class="container-fluid" id="name_and_photo">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 text-sm-end text-center" id="name_and_title">
            <h1 id="name">{name}</h1> 
            <h5 id="title">{title}</h5>
          </div>
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 text-sm-start text-center">
            <img src={profilePicture} loading="lazy" alt="Lim Fuo En profile picture" id="profile_picture"></img>
          </div>
        </div>
      </div>
      <blockquote>
        <p id="quote">{quote}</p>
      </blockquote>
      <div id="about_me" class="about_section">
        <h3><u>About</u></h3>
        <p class="text-start" id="about_text">{about}</p>
      </div>
      <div id="resume" class="about_section">
        <h3><u>Resume</u></h3>
        <a href="https://drive.google.com/file/d/1yAyBouBt9mjp5GErwkeZDaVDVDyp0rZ-/view?usp=sharing" target="_blank">
          <button type="button" class="btn btn-light buttons">
            {"My Resume >"}
          </button>
        </a>
      </div>
      <Timeline />
      <div id="find_me" class="about_section">
        <h3><u>Find me on the Web</u></h3>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="find_me_button_container">
                <a href="https://github.com/Fe-56" target="_blank" class="find_me_button">
                  <i class="fa-brands fa-github fa-2xl"></i>
                  <p>Github</p>
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="find_me_button_container">
                <a href="https://www.linkedin.com/in/limfuoen/" target="_blank" class="find_me_button">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
