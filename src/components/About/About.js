import { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import "./About.css";
import AboutMe from "./AboutMe";
import FindMe from "./FindMe";
import NameAndPhoto from "./NameAndPhoto";
import Quote from "./Quote";
import Resume from "./Resume";
import Timeline from "./Timeline";

export default function About() {
  useEffect(() => {
    pageLoad();
  });

  return (
    <div id="about" class="container-fluid">
      <NameAndPhoto />
      <Quote />
      <AboutMe />
      <Resume />
      <Timeline />
      <FindMe />
    </div>
  );
}
