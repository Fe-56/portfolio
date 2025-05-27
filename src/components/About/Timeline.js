import { useEffect } from "react";
import * as textConst from "../../const/text";
import "./Timeline.css";

export default function Timeline() {
  useEffect(() => {
    timelineMilestoneAnimationHandler();
  });

  return (
    <div id="timeline" class="about_section">
      <h3>
        <u>{textConst.ABOUT_TIMELINE_TITLE}</u>
      </h3>
      {textConst.ABOUT_TIMELINE_MILESTONES.map((milestone, index) => {
        if (index % 2 == 0) {
          return (
            <div class="timeline_milestone left_milestone hidden">
              <div class="timeline_milestone_text_box">
                <p class="timeline_milestone_year">{Object.keys(milestone)}</p>
                <p class="timeline_milestone_description">
                  {Object.values(milestone)}
                </p>
                <span class="left_milestone_arrow milestone_arrow"></span>
              </div>
            </div>
          );
        } else {
          return (
            <div class="timeline_milestone right_milestone hidden">
              <div class="timeline_milestone_text_box">
                <p class="timeline_milestone_year">{Object.keys(milestone)}</p>
                <p class="timeline_milestone_description">
                  {Object.values(milestone)}
                </p>
                <span class="right_milestone_arrow milestone_arrow"></span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

function timelineMilestoneAnimationHandler() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const timelineMilestones = document.querySelectorAll(`.hidden`);
  timelineMilestones.forEach((timelineMilestone) =>
    observer.observe(timelineMilestone)
  );
}
