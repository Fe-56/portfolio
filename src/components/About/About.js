import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './About.css';
import profilePicture from './profile_picture_portfolio.jpg';
import Timeline from './Timeline';
import * as textConst from '../../const/text';
import * as urlConst from '../../const/url';

export default function About() {
  useEffect(() => {
    pageLoad();
  });

  return (
    <div id="about" class="container-fluid">
      <div class="container-fluid" id="name_and_photo">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 text-sm-end text-center" id="name_and_title">
            <h1 id="name">{textConst.NAME}</h1> 
            <h5 id="title">{textConst.ABOUT_MY_TITLE}</h5>
          </div>
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 text-sm-start text-center">
            <img src={profilePicture} loading="lazy" alt={textConst.ABOUT_PROFILE_PIC_ALT_TEXT} id="profile_picture"></img>
          </div>
        </div>
      </div>
      <blockquote>
        <p id="quote">{textConst.ABOUT_MY_QUOTE}</p>
      </blockquote>
      <div id="about_me" class="about_section">
        <h3><u>{textConst.ABOUT_TITLE}</u></h3>
        <p class="text-start" id="about_text">{textConst.ABOUT_ABOUT}</p>
      </div>
      <div id="resume" class="about_section">
        <h3><u>{textConst.ABOUT_RESUME_TITLE}</u></h3>
        <a href={urlConst.ABOUT_RESUME_URL} target="_blank">
          <button type="button" class="btn btn-light buttons">
            {textConst.ABOUT_RESUME_BUTTON}
          </button>
        </a>
      </div>
      <Timeline />
      <div id="find_me" class="about_section">
        <h3><u>{textConst.ABOUT_FIND_ME_WEB}</u></h3>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="find_me_button_container">
                <a href={urlConst.ABOUT_GITHUB_URL} target="_blank" class="find_me_button">
                  <i class="fa-brands fa-github fa-2xl"></i>
                  <p>{textConst.ABOUT_GITHUB}</p>
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="find_me_button_container">
                <a href={urlConst.ABOUT_LINKEDIN_URL} target="_blank" class="find_me_button">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  <p>{textConst.ABOUT_LINKEDIN}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
