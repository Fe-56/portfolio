import React from "react";
import './About.css';

const name = "Fuo En Lim";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const profilePictureURL = "https://sutdapac-my.sharepoint.com/personal/fuoen_lim_mymail_sutd_edu_sg/Documents/University%20stuff/Important/Photos/profile_picture.jpg?Web=1";
const aboutMe = "Fuo En is Computer Science and Design Junior at Singapore University of Technology and Design (SUTD). ";

export default function About() {
  return (
    <div id="about">
      <h1 id="name">{name}</h1>
      <img src={profilePictureURL} alt="Lim Fuo En profile picture" id="profile_picture"></img>
      <h3 id="title">{title}</h3>
      {/* add some icon and text to showcase my SUTD education and major, etc. */}
      <div class="d-flex justify-content-center align-items-center">
        <blockquote>
          <p id="quote">{quote}</p>
        </blockquote>
      </div>
      <p id="about_me">{aboutMe}</p>
    </div> 
  );
}