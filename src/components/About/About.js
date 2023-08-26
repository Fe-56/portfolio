import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './About.css';
import * as d3 from 'd3';
import profilePicture from './profile_picture_portfolio.jpg';

const name = "Fuo En Lim";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const about = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a visiting student at UC Berkeley Extension until May 2023.";
const milestoneCircleRadius = 10;
const distanceBetweenMilestoneAndTimeline = 35;
const milestones = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards"},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt"},
  {2020: "Matriculated at SUTD"},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern"},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)"},
  {2023: "Studying at UC Berkeley Extension"}
];

export default function About() {
  useEffect(() => {
    pageLoad();

    if (document.getElementById('timeline_svg_actual') === null){ // prevents 2 svg elements from being rendered, since the about component is loaded two times every time the about log (Fuo En Lim logo) is clicked into
      addTimelineSVG();
    }
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
        <div id="timeline_svg" class="container-fluid"></div>
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

function addTimelineSVG(){
  let width = 380, height = 700, padding = 120;
  let svg = d3.select("#timeline_svg")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("id", "timeline_svg_actual")
              .classed("svg-content-responsive", true);
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
      .attr("fill", "var(--selected)");
  svg.selectAll("line") // renders the lines from the timeline to the year of each milestone
      .data(milestones)
      .enter()
      .append("line")
      .style("stroke", "var(--selected)")
      .style("stroke-width", 3)
      .attr("y1", (milestone) => {
        return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
      })
      .attr("y2", (milestone) => {
        return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
      })
      .attr("x1", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is even, else, the line will be placed on the right
        if (index % 2 === 0){
          return width/2 - distanceBetweenMilestoneAndTimeline - 20;
        }
        else {
          return width/2;
        }
      })
      .attr("x2", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is even, else, the line will be placed on the right
        if (index % 2 === 0){
          return width/2;
        }
        else {
          return width/2 + distanceBetweenMilestoneAndTimeline + 20;
        }
      })
  let texts = svg.selectAll("text")
                  .data(milestones)
                  .enter();
  texts.append("text") // renders the year of each milestone
      .style("fill", "var(--selected )")
      .style("font-size", "22px")
      .style("text-decoration", "underline")
      .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is even, else, the text will be placed on the right
        return index % 2 === 0 ? width/2 - (distanceBetweenMilestoneAndTimeline + width/5 + 40)/2 - 50 : width/2 + (width/5 + 40)/2 + 15;
      })
      .attr("y", (milestone) => {
        return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2;
      })
      .text((milestone) => {
        return Object.keys(milestone)[0];
      });
  texts.append("text") // renders the description of each milestone
      .style("fill", "var(--text)")
      .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is even, else, the text will be placed on the right
        return index % 2 === 0 ? width/2 - distanceBetweenMilestoneAndTimeline - width/5 - 30 : width/2 + distanceBetweenMilestoneAndTimeline;
      })
      .attr("y", (milestone) => {
        return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2 + 25;
      })
      .text((milestone) => {
        return Object.values(milestone)[0];
      })
      .call(wrap, width/5 + 40);
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