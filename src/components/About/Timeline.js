import React from "react";

const milestones = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards"},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt"},
  {2020: "Matriculated at SUTD"},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern"},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)"},
  {2023: "Completed Flutter developer internships at CoffeeSpace and MyExpoPlace in the United States"},
];

export default function Timeline() {
  return (
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
  );
}
