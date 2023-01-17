import React, { useEffect } from "react";
import './About.css';
import * as d3 from 'd3';

const name = "Fuo En Lim";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const profilePictureURL = "https://drive.google.com/uc?export=view&id=1IBlX714h5NUGucyQeUrr8JUsvGwlZ6me";
const about = "Fuo En was born in Singapore in 1999 as a third-generation Singapore Citizen. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. Through the years, his aspirations have manifested into a passion to solve problems using technology and applying design and entrepreneurial thinking. He is currently a Junior at Singapore University of Technology and Design (SUTD), majoring in Computer Science and Design (CSD), and a visiting student at UC Berkeley Extension, studying for the Professional Certificate in Entrepreneurship until May 2023.";
const milestoneCircleRadius = 10;
const distanceBetweenMilestoneAndTimeline = 50;
const milestones = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards at Nanyang Technological University (NTU)."},
  {2017: "Attended a coding course at Singapore Management University (SMU), where I learnt Ruby, the first programming language I've ever learnt."},
  {2020: "Matriculated at SUTD."},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern."},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)."},
  {2023: "Studying at UC Berkeley."}
];

export default function About() {
  useEffect(()=> {
    let width = 900, height = 650, padding = 160;
    let svg = d3.select("#timeline")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("id", "timeline");
    let scale = d3.scaleTime()
                  .domain([new Date(2016, 0, 1, 0), new Date(2023, 0, 1, 0)])
                  .range([0, height - padding]);
    let timeline = d3.axisLeft()
                  .scale(scale)
                  .tickFormat(d3.timeFormat("%Y")) // year-only values for the timeline
                  .tickValues([]); // remove the labels for the timeline
    svg.append("g")
      .attr("transform", `translate(${width/2}, ${padding/4})`)
      .attr("stroke-width", "5")
      .call(timeline); // renders the vertical timeline
    svg.selectAll("circle") // to represent a milestone
        .data(milestones)
        .enter()
        .append("circle")
        .attr("r", milestoneCircleRadius)
        .attr("cx", width/2) // place the circle on the timeline itself
        .attr("cy", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        }) // align the circle on the correct position on the timeline
        .attr("fill", "#CCFF00");
    svg.selectAll("line") // renders the lines from the timeline to the year of each milestone
        .data(milestones)
        .enter()
        .append("line")
        .style("stroke", "#CCFF00")
        .style("stroke-width", 3)
        .attr("y1", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        })
        .attr("y2", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        })
        .attr("x1", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is odd, else, the line will be placed on the right
          if (index % 2 === 0){
            return width/2 - distanceBetweenMilestoneAndTimeline - 40;
          }
          else {
            return width/2;
          }
        })
        .attr("x2", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is odd, else, the line will be placed on the right
          if (index % 2 === 0){
            return width/2;
          }
          else {
            return width/2 + distanceBetweenMilestoneAndTimeline + 30;
          }
        })
    let texts = svg.selectAll("text")
                    .data(milestones)
                    .enter();
    texts.append("text") // renders the year of each milestone
        .style("fill", "white")
        .style("font-size", "22px")
        .style("text-decoration", "underline")
        .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is odd, else, the text will be placed on the right
          return index % 2 === 0 ? width/2 - distanceBetweenMilestoneAndTimeline - 10 - (width/4 - distanceBetweenMilestoneAndTimeline)/2 : width/2 + (width/4 - distanceBetweenMilestoneAndTimeline)/2
        })
        .attr("y", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2;
        })
        .text((milestone) => {
          return Object.keys(milestone)[0];
        });
    texts.append("text") // renders the description of each milestone
        .style("fill", "white")
        .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is odd, else, the text will be placed on the right
          return index % 2 === 0 ? width/4 + 15 : width/2 + distanceBetweenMilestoneAndTimeline;
        })
        .attr("y", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2 + 25;
        })
        .text((milestone) => {
          return Object.values(milestone)[0];
        })
        .call(wrap, width/4 - distanceBetweenMilestoneAndTimeline);
  });

  return (
    <div id="about" class="justify-content-center align-items-center container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 id="name">{name}</h1>
            <h5 id="title">{title}</h5>
          </div>
          <div class="col-lg-6">
            <img src={profilePictureURL} alt="Lim Fuo En profile picture" id="profile_picture"></img>
          </div>
        </div>
      </div>
      <blockquote>
        <p id="quote">{quote}</p>
      </blockquote>
      <div class="spacer"></div>
      <div id="about">
        <h3><u>About</u></h3>
        <p>{about}</p>
      </div>
      <div class="spacer"></div>
      <div id="timeline">
        <h3><u>(Professional) Timeline</u></h3>
      </div>
      <div class="spacer"></div>
      <div id="hobbies">
        <h3><u>Hobbies</u></h3>
        <p id="hobbies_text">Road Cycling, Jamming on the Electric Guitar, Watching Anime, Watching Netflix, Building Cool Stuff with Code</p>
      </div>
      <div class="spacer"></div>
      <div id="find_me">
        <h3><u>Find me on the Web</u></h3>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="find_me_button_container">
                <a href="https://github.com/Fe-56" target="_blank" class="find_me_button">
                  <i class="fa-brands fa-github fa-2xl"></i>
                  <p>Github</p>
                </a>
              </div>
            </div>
            <div class="col-sm">
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

// text-wrapping function from https://stackoverflow.com/questions/24784302/wrapping-text-in-d3
function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
    words = text.text().split(/\s+/).reverse(),
    word,
    line = [],
    lineNumber = 0,
    lineHeight = 1.1, // ems
    x = text.attr("x"),
    y = text.attr("y"),
    dy = 0, //parseFloat(text.attr("dy")),
    tspan = text.text(null)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
                      .attr("x", x)
                      .attr("y", y)
                      .attr("dy", ++lineNumber * lineHeight + dy + "em")
                      .text(word);
      }
    }
  });
}