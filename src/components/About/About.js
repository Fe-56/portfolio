import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import textWrap from "../utils/textWrap";
import './About.css';
import * as d3 from 'd3';
import profilePicture from './profile_picture_portfolio.jpg';

const name = "Lim Fuo En";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const about = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a general visiting student (Master's) at Xi'an Jiaotong University (西安交通大学) until January 2024.";
const milestones = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards"},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt"},
  {2020: "Matriculated at SUTD"},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern"},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)"},
  {2023: "Completed Flutter developer internships at CoffeeSpace and MyExpoPlace in the United States"},
];

export default function About() {
  useEffect(() => {
    pageLoad();

    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       console.log("HELLO HELLO HELLO");
    //       entry.target.classList.add('animate-milestone');
    //     }
    //   })
    // });

    // const trigger = document.querySelector('.timeline_milestone');
    // observer.observe(trigger);
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
      <div id="timeline" class="about_section">
        <h3><u>(Professional) Timeline</u></h3>
        {milestones.map((milestone, index) => {
          if (index % 2 == 0) {
            return <div class="timeline_milestone left_milestone">
              <div class="timeline_milestone_text_box">
                <p class="timeline_milestone_year">{Object.keys(milestone)}</p>
                <p class="timeline_milestone_description">{Object.values(milestone)}</p>
                <span class="left_milestone_arrow milestone_arrow"></span>
              </div>
            </div>
          }
          else {
            return <div class="timeline_milestone right_milestone">
              <div class="timeline_milestone_text_box">
                <p class="timeline_milestone_year">{Object.keys(milestone)}</p>
                <p class="timeline_milestone_description">{Object.values(milestone)}</p>
                <span class="right_milestone_arrow milestone_arrow"></span>
              </div>
            </div>
          }
        })}
      </div>
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
