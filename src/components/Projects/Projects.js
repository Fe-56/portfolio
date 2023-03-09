import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Projects.css';
import wordle_logo from './wordle_logo.png';
import feast_logo from './feast_logo.png';
import will_i_go_broke_logo from './will_i_go_broke_logo.png';
import pokemon_battle_logo from './pokemon_battle_logo.png';

export default function Projects() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_projects').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage

    window.addEventListener('resize', projectSkillsResponsive);

    const projects = Array.prototype.slice.call(document.getElementsByClassName('project'));
    projects.map((project) => {
      project.addEventListener('click', projectClick);
    });
  });

  return (
    <div id="projects">
      <h1 id="projects_title">Projects</h1>
      <div id="look_and_earn" class="project">
        <div class="project_title_and_info">
          <h3>
            <u>Look and Earn</u>
          </h3>
          <div class="info text-center d-flex align-items-center justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Full-Stack Developer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              Start-up Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              October 2022 to Present
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            Look and Earn is a start-up project that aims to incentivise users to view advertisements posted by partner companies.<br/><br/>
            Look and Earn has an Android app that allows the user to view current advertisements (image, video, or GIF), bookmark advertisements, and check their account balance earned from watching advertisements.<br/><br/>
            The app has mechanisms in place to ensure that the user has to finish viewing the entire advertisement before they can move on to the next.<br/><br/>
            Look and Earn also has an admin web app to manage the advertisements that will be displayed in the app.<br/><br/>
            I designed the entire system architecture of the app and web app, and developed them from scratch.<br/><br/>
            I integrated Google Firestore to the app and web as their common database.
          </p>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-solid fa-f fa-lg icon"></i>
                Flutter&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-d fa-lg icon"></i>
                Dart&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-android fa-lg icon"></i>
                Android Studio&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Google Firestore&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-square-js fa-lg icon"></i>
                JavaScript<br/>
                <i class="fa-brands fa-react fa-lg icon"></i>
                React&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-e fa-lg icon"></i>
                Express.js&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-node fa-lg icon"></i>
                Node.js&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="lonely_no_longer" class="project">
        <div class="project_title_and_info">
          <h3>
            <u>Lonely No Longer</u>
          </h3>
          <div class="info text-center d-flex align-items-center justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Developer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              Start-up Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              May 2022 to Present
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            Lonely No Longer (LNL) is a start-up project that aims to connect singles in Singapore looking for a genuine relationship through a couple of (literally) blind dates in groups at the beginning.<br/><br/>
            LNL has a Telegram bot to serve as an assistant bot to customers for viewing their application status, buying items from our store, and receiving important updates.<br/><br/>
            I designed the entire system architecture of the Telegram bot, and developed it from scratch, which included integrating the bot to Google Firestore as its database.<br/><br/>
            I also integrated Google Sheets into the workflow, where its contents are synchronised seamlessly with the database.<br/><br/>
            I wrote the entire technical documentation of the mechanism of the Telegram bot from scratch, including the control flow diagrams of certain commands.
          </p>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-python fa-lg icon"></i>
                Python&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-telegram fa-lg icon"></i>
                pyTelegramBotAPI&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Google Firestore&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-square-js fa-lg icon"></i>
                JavaScript&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="online_hate_speech_detection" class="project">
        <div class="project_title_and_info">
          <h3>
            <u>Online Hate Speech Detection</u>
          </h3>
          <div class="info text-center d-flex align-items-center justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Machine Learning Engineer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              July 2022 to August 2022
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For Singapore University of Technology and Design (SUTD)'s course: <a href="https://istd.sutd.edu.sg/undergraduate/courses/50007-machine-learning/" target="_blank">50.007 Machine Learning</a>.<br/><br/>
            Trained a variety of machine learning models for online hate speech classification.<br/><br/>
            Extensively tuned the model hyper-parameters to improve model performance.<br/><br/>
            Used machine learning techniques not taught in class to improve model performance.<br/><br/>
            I focused on tuning and optimising a machine learning model, called Support Vector Machines (SVM).
          </p>
          <div class="project_extras d-flex row">
            <a href="https://www.kaggle.com/competitions/50007-2022" target="_blank" class="project_link">
              <button type="button" class="btn btn-light buttons">
                {"Project link >"}
              </button>
            </a>
            <a href="https://github.com/waishun78/hate-speech-classification" target="_blank" class="project_github">
              <i class="fa-brands fa-github icon"></i>
              Check out the project's GitHub!
            </a>
          </div>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-python fa-lg icon"></i>
                Python&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-robot fa-lg icon"></i>
                Machine learning&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub
              </div>
              <div class="soft_skills">
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="transferconnect" class="project">
        <div class="project_title_and_info">
          <h3>
            <u>TransferConnect</u>
          </h3>
          <div class="info text-center d-flex align-items-center justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Backend Developer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              May 2022 to August 2022
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For SUTD's course: <a href="https://istd.sutd.edu.sg/undergraduate/courses/50003-elements-of-software-construction" target="_blank">50.003 Elements of Software Construction</a>.<br/><br/>
            TransferConnect acts as a middleman between loyalty programs and banks to facilitate the transfer and conversion of loyalty points from bank transactions.<br/><br/>
            This project focuses on the development of a bankend API server and database for TransferConnect, as well as a frontend bank app to demonstrate the end-to-end workflow.<br/><br/>
            I developed highly performant and functional APIs to meet project requirements.<br/><br/>
            I also implemented extensive testing and fuzzing to ensure the proper functioning of the entire system.
          </p>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-square-js fa-lg icon"></i>
                JavaScript&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-e fa-lg icon"></i>
                Express.js&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-signs-post fa-lg icon"></i>
                Postman&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-vials fa-lg icon"></i>
                Software testing&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="giglet" class="project">
        <div class="project_title_and_info d-flex row">
          <h3>
            <u>Giglet</u>
          </h3>
          <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
            <img src="https://media.licdn.com/dms/image/C5622AQHGmpxmKcPXGQ/feedshare-shrink_1280/0/1651318294045?e=1681344000&v=beta&t=2uORCYZviymL2vYAzgyqDNbDDwqNgoe17lFc1BvTXIk" loading="lazy" alt="Giglet team picture" id="hdb_logo" class="project_logo"></img>
          </div>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Developer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              January 2022 to April 2022
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For SUTD's course: <a href="https://epd.sutd.edu.sg/undergraduate-courses/30111-entrepreneurship/" target="_blank">30.001 Entrepreneurship</a>.<br/><br/>
            Giglet is our idea for a start-up to showcase our knowledge of entrepreneurship learned from the Entrepreneurship course.<br/><br/>
            Giglet is a platform that matches STEM undergraduates in South East Asia to companies via gig work, for the companies to "test the waters" and see whetehr the students are suitable for an internship or full-time role in their company.<br/><br/>
            Giglet currently has its first products ready in beta: Giglet Hirer and Giglet Freelancer Telegram Bots.<br/><br/>
            I designed the entire system architecture of the Telegram bots, and developed the bots from scratch, which included integrating the bot to Google Firestore as its database.
          </p>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-python fa-lg icon"></i>
                Python&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-telegram fa-lg icon"></i>
                pyTelegramBotAPI&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Google Firestore&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-user-tie fa-lg icon"></i>
                Entrepreneurship&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="wordle" class="project">
        <div class="project_title_and_info d-flex row">
          <h3>
            <u>Wordle</u>
          </h3>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Programmer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              January 2022 to April 2022
            </h6>
          </div>
          <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-start justify-content-center">
            <img src={wordle_logo} loading="lazy" alt="Wordle logo" id="hdb_logo" class="project_logo"></img>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For SUTD's course: <a href="https://istd.sutd.edu.sg/undergraduate/courses/50002-computation-structures/" target="_blank">50.002 Computation Structures</a>.<br/><br/>
            This project is inspired by the popular online word-guessing game, <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>.<br/><br/>
            This project transforms the software nature of the original game into a piece of handcrafted hardware, in the form of an arcade-like machine.<br/><br/>
            I programmed the 16-bit ALU (Arithmetic Logic Unit) of the machine and helped to program the finite state machine for the game logic .
          </p>
          <div class="project_extras d-flex row">
            <a href="https://istd.sutd.edu.sg/term4-design-exhibition/50002/wordle" target="_blank" class="project_link">
              <button type="button" class="btn btn-light buttons">
                {"Project link >"}
              </button>
            </a>
            <a href="https://github.com/rphly/wordle" target="_blank" class="project_github">
              <i class="fa-brands fa-github icon"></i>
              Check out the project's GitHub!
            </a>
          </div>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-solid fa-v fa-lg icon"></i>
                Verilog&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-computer fa-lg icon"></i>
                Computer engineering
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="feast" class="project">
        <div class="project_title_and_info d-flex row">
          <h3>
            <u>Food Establishment Autonomous Spatial Tracking (FEAST)</u>
          </h3>
          <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
            <img src={feast_logo} loading="lazy" alt="FEAST logo" id="hdb_logo" class="project_logo"></img>
          </div>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Frontend Lead<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              January 2022 to April 2022
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For SUTD's course: <a href="https://istd.sutd.edu.sg/undergraduate/courses/50001-information-systems-programming" target="_blank">50.001 Information Systems & Programming</a>.<br/><br/>
            FEAST is a real-time crowd tracking app that allows users to conveniently check the current crowd levels at various food and beverage (F&B) establishments in SUTD.<br/><br/>
            Accompanying the crowd tracking functionality are a suite of features that improve user experience in the app, such as predictive estimated waiting time, customisability by prioritising user preferred locations, and real-time business advisory.<br/><br/>
            Built using modular design principles, the app has a plug-and-play model that allows easy implementation at any location, and even contains the infrastructure to expand beyond F&B to track crowd levels of other kinds of locations.<br/><br/>
            I led the frontend team and helped to design the user interface of the app, and ensured that the data from the backend is displayed properly on the frontend.
          </p>
          <div class="project_extras">
            <a href="https://istd.sutd.edu.sg/term4-design-exhibition/50001/food-establishment-autonomous-spatial-tracking-feast" target="_blank">
              <button type="button" class="btn btn-light buttons">
                {"Project link >"}
              </button>
            </a>
          </div>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-java fa-lg icon"></i>
                Java&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-android fa-lg icon"></i>
                Android Studio&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-github fa-lg icon"></i>
                GitHub&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-figma fa-lg icon"></i>
                Figma
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="will_i_go_broke" class="project">
        <div class="project_title_and_info d-flex row">
          <h3>
            <u>Will I Go Broke?</u>
          </h3>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-end text-center d-flex align-items-center justify-content-sm-end justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Developer<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              Personal Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              December 2021 to January 2022
            </h6>
          </div>
          <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-start justify-content-center">
            <img src={will_i_go_broke_logo} loading="lazy" alt="Wordle logo" id="hdb_logo" class="project_logo"></img>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            Will I Go Broke? is a Telegram bot that is targetted at university students in Singapore.<br/><br/>
            The bot maps out your finances over your university/school life and determines how your financial situation might turn out once you graduate.<br/><br/>
            I developed the bot from scratch and designed the user experience and mechanics behind the bot.
          </p>
          <div class="project_extras">
            <a href="https://github.com/Fe-56/Will-I-Go-Broke" target="_blank" class="project_github">
              <i class="fa-brands fa-github icon"></i>
              Check out the project's GitHub!
            </a>
          </div>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-python fa-lg icon"></i>
                Python&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-telegram fa-lg icon"></i>
                pyTelegramBotAPI
              </div>
              <div class="soft_skills">
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
      <div id="pokemon_battle" class="project">
        <div class="project_title_and_info d-flex row">
          <h3>
            <u>Pokemon Battle</u>
          </h3>
          <div class="project_image col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-sm-end justify-content-center">
            <img src={pokemon_battle_logo} loading="lazy" alt="Pokemon Battle logo" id="hdb_logo" class="project_logo"></img>
          </div>
          <div class="info col-xl-6 col-lg-6 col-md-6 col-sm-6 text-sm-start text-center d-flex align-items-center justify-content-sm-start justify-content-center">
            <h6>
              <i class="fa-solid fa-briefcase icon"></i>
              Team Lead<br/>
              <i class="fa-solid fa-diagram-project icon"></i>
              School Project<br/>
              <i class="fa-solid fa-timeline icon"></i>
              September 2020 to December 2020
            </h6>
          </div>
        </div>
        <div class="project_content">
          <p class="text-start project_description">
            For SUTD's course: <a href="https://smt.sutd.edu.sg/education/undergraduate/courses/10014-computational-thinking-for-design/" target="_blank">10.014 Computational Thinking for Design</a>.<br/><br/>
            Pokemon Battle is inspired by the popular game series, <a href="https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games/" target="_blank">Pokémon</a>.<br/><br/>
            It is a Python text-based game for 2 players, where each player select a Pokemon from a list of 18 Pokemons of all types with a wide selection of moves, and battle each other.<br/><br/>
            It simulates the actual battle mechanics of modern Pokemon games, albeit providing a textual interface to play in.<br/><br/>
            I led the team for the game research and design of the game, and coded the mechanics and flow of the game.
          </p>
          <div class="project_extras">
            <a href="https://github.com/Fe-56/Pokemon-Battle" target="_blank" class="project_github">
              <i class="fa-brands fa-github icon"></i>
              Check out the project's GitHub!
            </a>
          </div>
          <div class="skills">
            <h5 class="skills_title text-center">Skills:</h5>
            <p class="text-center">
              <div class="hard_skills">
                <i class="fa-brands fa-python fa-lg icon"></i>
                Python&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-gamepad fa-lg icon"></i>
                Game design
              </div>
              <div class="soft_skills">
                <i class="fa-solid fa-comments fa-lg icon"></i>
                Communication&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-brands fa-google fa-lg icon"></i>
                Researching for solutions&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-magnifying-glass fa-lg icon"></i>
                Attention to detail
              </div>
            </p>
          </div>
        </div>
        <div class="expand_collapse">
          <i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>
          View more
        </div>
      </div>
    </div>
  );
}

function projectClick(event) {
  const project = this;
  const projectContent = project.children[1]; // gets the project_content div within the project div
  const expandCollapse = project.children[2];

  if (event.target.classList.contains("expand_collapse") || event.target.classList.contains("expand_collapse_icon")){ // if the entire div that contains the up or down chevron is clicked, expand or collapse the project content accordingly
    if (projectContent.style.maxHeight){ // if the project content is currently expanded, collapse it
      expandCollapse.innerHTML = '<i class="fa solid fa-chevron-down fa-xl icon expand_collapse_icon"></i>\nView more';
      projectContent.classList.remove("expanded");
      projectContent.style.maxHeight = null;
    }
    else{ // if the project content is currently collapsed, expand it
      expandCollapse.innerHTML = '<i class="fa solid fa-chevron-up fa-xl icon expand_collapse_icon"></i>\nView less';
      projectContent.classList.add("expanded");
      projectContent.style.maxHeight = projectContent.scrollHeight + "px";
    }
  }
}

function projectSkillsResponsive(){ // makes the skills section of each project responsive by adjusting the max height of the project content whenever the window is being resized
  const expandedProjectContents = Array.prototype.slice.call(document.getElementsByClassName("expanded"));
  expandedProjectContents.map((projectContent) => {
    projectContent.style.maxHeight = projectContent.scrollHeight + "px";
  });
}