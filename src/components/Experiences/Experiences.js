import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Experiences.css';
import * as textConst from '../../const/text';
import Experience from './Experience';

export default function Experiences() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_experiences').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="experiences" class="container-fluid">
      <h1 id="experiences_title">{textConst.EXPERIENCES_TITLE}</h1>
      <Experience.DBS2 />
      <Experience.SmileTutor />
      <Experience.MyExpoPlace />
      <Experience.CoffeeSpace />
      <Experience.HDB />
      <Experience.DBS />
    </div>
  );
}
