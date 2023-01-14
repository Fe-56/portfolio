import React from "react";
import './About.css';

const title = "Hi! I am Fuo En.";
const subtitle = "I love to build apps that bring value to the lives of others.";
const aboutMe = 'I am currently a Junior at Singapore University of Technology and Design (SUTD).\nI am majoring in Computer Science and Design (CSD).';

export default function About() {
  return (
    <div id="about">
      <h1 id="title">{title}</h1>
      <h2 id="subtitle">{subtitle}</h2>
      {/* add some icon and text to showcase my SUTD education and major, etc. */}
      <p id="about_me">{aboutMe}</p>
    </div> 
  );
}