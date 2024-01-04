import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Hobbies.css';
import * as textConst from "../../const/text";
import Hobby from "./Hobby";

export default function Hobbies() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_hobbies').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="hobbies" class="container-fluid">
      <h1 id="hobbies_title">{textConst.HOBBIES_TITLE}</h1>
      <Hobby.Cycling />
      <Hobby.Guitar />
      <Hobby.Netflix />
      <Hobby.Coding />
    </div>
  );
}
