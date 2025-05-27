import { useEffect } from "react";
import * as textConst from "../../const/text";
import pageLoad from "../utils/pageLoad";
import Coding from "./Coding";
import Cycling from "./Cycling";
import Guitar from "./Guitar";
import "./Hobbies.css";
import Netflix from "./Netflix";
import Running from "./Running";

export default function Hobbies() {
  useEffect(() => {
    pageLoad();
    document.getElementById("nav_hobbies").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="hobbies" class="container-fluid">
      <h1 id="hobbies_title">{textConst.HOBBIES_TITLE}</h1>
      <Cycling />
      <Running />
      <Guitar />
      <Netflix />
      <Coding />
    </div>
  );
}
