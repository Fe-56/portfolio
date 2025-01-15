import { React, useContext } from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Hobbies from "./components/Hobbies/Hobbies";
import * as textConst from "./const/text";
import * as urlConst from "./const/url";
import Icon from "./const/icons";
import { ThemeContext } from "./Theme";

export default function App() {
  let location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="app"
      class="justify-content-center align-items-center container-lg"
      className={`App ${theme} justify-content-center align-items-center container-lg`}
    >
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={0}>
          <Switch location={location}>
            <Route exact path={urlConst.ABOUT_PATH} component={About} />
            <Route path={urlConst.PROJECTS_PATH} component={Projects} />
            <Route path={urlConst.SKILLS_PATH} component={Skills} />
            <Route path={urlConst.EXPERIENCES_PATH} component={Experiences} />
            <Route path={urlConst.HOBBIES_PATH} component={Hobbies} />
            <Route path={urlConst.CONTACT_PATH} component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <div id="footer">
        <Icon.GitHubSourceCodeIcon />
        <p id="footnote">
          © {getCurrentYear()} {textConst.FOOTNOTE}
        </p>
      </div>
    </div>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}
