import parse from 'html-react-parser';
import * as urlConst from "./url";

// general
export const NAME = "Lim Fuo En";
export const FOOTNOTE = `${NAME} All Rights Reserved.`;
export const SOURCE_CODE = "Github Source Code";

// Navigation bar
export const NAVBAR_PROJECTS = "Projects";
export const NAVBAR_SKILLS = "Skills";
export const NAVBAR_EXPERIENCES = "Experiences";
export const NAVBAR_HOBBIES = "Hobbies";
export const NAVBAR_CONTACT = "Contact";

// About page
export const ABOUT_TITLE = "About";
export const ABOUT_RESUME_TITLE = "Resume";
export const ABOUT_MY_TITLE = "Aspiring Full-Stack Developer";
export const ABOUT_MY_QUOTE = "I love to build cool apps that bring value to the lives of others!";
export const ABOUT_ABOUT = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a general visiting student (Master's) at Xi'an Jiaotong University (西安交通大学) until December 2023.";
export const ABOUT_RESUME_BUTTON = "My Resume >";
export const ABOUT_FIND_ME_WEB = "Find me on the Web";
export const ABOUT_GITHUB = "Github";
export const ABOUT_LINKEDIN = "LinkedIn";
export const ABOUT_PROFILE_PIC_ALT_TEXT = "Lim Fuo En profile picture";
export const ABOUT_TIMELINE_TITLE = "(Professional) Timeline";
export const ABOUT_TIMELINE_MILESTONES = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards"},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt"},
  {2020: "Matriculated at SUTD"},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern"},
  {2022: "Completed mobile application development internship at Housing & Development Board (HDB)"},
  {2023: "Completed Flutter developer internships at CoffeeSpace and MyExpoPlace in the United States"},
];

// Projects page
export const PROJECTS_TITLE = "Projects";
export const PROJECTS_SKILLS_LABEL = "Skills";
export const PROJECTS_GITHUB = "Check out the project's Github!";
export const PROJECTS_PROJECT_LINK = "Project Link >";
export const PROJECT_VIEW_MORE = "View more";
export const PROJECTS_LOOK_AND_EARN_TITLE = "Look and Earn";
export const PROJECTS_LOOK_AND_EARN_ROLE = "Full-Stack Developer";
export const PROJECTS_LOOK_AND_EARN_PROJECT_TYPE = "Start-up Project";
export const PROJECTS_LOOK_AND_EARN_TIMELINE = "October 2022 to Present";
export const PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION = "Look and Earn is a start-up project that aims to incentivise users to view advertisements posted by partner companies.\n\nLook and Earn has a Flutter app that allows the user to view current advertisements (image, video, or GIF), bookmark advertisements, and check their account balance earned from watching advertisements.\n\nThe app has mechanisms in place to ensure that the user has to finish viewing the entire advertisement before they can move on to the next.\n\nLook and Earn also has an admin web app to manage the advertisements that will be displayed in the app.\n\nI designed the entire system architecture of the app and web app, and developed them from scratch.\n\nI integrated Google Firestore to the app and web as their common database.";
export const PROJECTS_LONELY_NO_LONGER_TITLE = "Lonely No Longer";
export const PROJECTS_LONELY_NO_LONGER_ROLE = "Developer";
export const PROJECTS_LONELY_NO_LONGER_PROJECT_TYPE = "Start-up Project";
export const PROJECTS_LONELY_NO_LONGER_TIMELINE = "May 2022 to Sep 2022";
export const PROJECTS_LONELY_NO_LONGER_DESCRIPTION = "Lonely No Longer (LNL) is a start-up project that aims to connect singles in Singapore looking for a genuine relationship through a couple of (literally) blind dates in groups at the beginning.\n\nLNL has a Telegram bot to serve as an assistant bot to customers for viewing their application status, buying items from our store, and receiving important updates.\n\nI designed the entire system architecture of the Telegram bot, and developed it from scratch, which included integrating the bot to Google Firestore as its database.\n\nI also integrated Google Sheets into the workflow, where its contents are synchronised seamlessly with the database.\n\nI wrote the entire technical documentation of the mechanism of the Telegram bot from scratch, including the control flow diagrams of certain commands.";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TITLE = "Online Hate Speech Detection";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_ROLE = "Machine Learning Engineer";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_PROJECT_TYPE = "School Project";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_TIMELINE = "July 2022 to August 2022";
export const PROJECTS_ONLINE_HATE_SPEECH_DETECTION_DESCRIPTION = parse(
  `or Singapore University of Technology and Design (SUTD)'s course: <a href=${urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_COURSE_URL} target='_blank'>50.007 Machine Learning</a>.<br/><br/>Trained a variety of machine learning models for online hate speech classification.<br/><br/>Extensively tuned the model hyper-parameters to improve model performance.<br/><br/>Used machine learning techniques not taught in class to improve model performance.<br/><br/>I focused on tuning and optimising a machine learning model, called Support Vector Machines (SVM)`
);
export const PROJECTS_TRANSFERCONNECT_TITLE = "TransferConnect";
export const PROJECTS_TRANSFERCONNECT_ROLE = "Backend Developer";
export const PROJECTS_TRANSFERCONNECT_PROJECT_TYPE = "School Project";
export const PROJECTS_TRANSFERCONNECT_TIMELINE = "May 2022 to August 2022";
export const PROJECTS_TRANSFERCONNECT_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_TRANSFERCONNECT_COURSE_URL} target='_blank'>50.003 Elements of Software Construction</a>.<br/><br/>TransferConnect acts as a middleman between loyalty programs and banks to facilitate the transfer and conversion of loyalty points from bank transactions.<br/><br/>This project focuses on the development of a bankend API server and database for TransferConnect, as well as a frontend bank app to demonstrate the end-to-end workflow.<br/><br/>I developed highly performant and functional APIs to meet project requirements.<br/><br/>I also implemented extensive testing and fuzzing to ensure the proper functioning of the entire system.`
);
export const PROJECTS_GIGLET_TITLE = "Giglet";
export const PROJECTS_GIGLET_ROLE = "Developer";
export const PROJECTS_GIGLET_PROJECT_TYPE = "School Project";
export const PROJECTS_GIGLET_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_GIGLET_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_GIGLET_COURSE_URL} target='_blank'>30.001 Entrepreneurship</a>.<br/><br/>Giglet is our idea for a start-up to showcase our knowledge of entrepreneurship learned from the Entrepreneurship course.<br/><br/>Giglet is a platform that matches STEM undergraduates in South East Asia to companies via gig work, for the companies to \"test the waters\" and see whetehr the students are suitable for an internship or full-time role in their company.<br/><br/>Giglet currently has its first products ready in beta: Giglet Hirer and Giglet Freelancer Telegram Bots.<br/><br/>I designed the entire system architecture of the Telegram bots, and developed the bots from scratch, which included integrating the bot to Google Firestore as its database.`
);
export const PROJECTS_WORDLE_TITLE = "Wordle";
export const PROJECTS_WORDLE_ROLE = "Programmer";
export const PROJECTS_WORDLE_PROJECT_TYPE = "School Project";
export const PROJECTS_WORDLE_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_WORDLE_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_WORDLE_COURSE_URL} target="_blank">50.002 Computation Structures</a>.<br/><br/>This project is inspired by the popular online word-guessing game, <a href=${urlConst.PROJECTS_WORDLE_URL} target="_blank">Wordle</a>.<br/><br/>This project transforms the software nature of the original game into a piece of handcrafted hardware, in the form of an arcade-like machine.<br/><br/>I programmed the 16-bit ALU (Arithmetic Logic Unit) of the machine and helped to program the finite state machine for the game logic.`
);
export const PROJECTS_FEAST_TITLE = "Food Establishment Autonomous Spatial Tracking (FEAST)";
export const PROJECTS_FEAST_ROLE = "Frontend Lead";
export const PROJECTS_FEAST_PROJECT_TYPE = "School Project";
export const PROJECTS_FEAST_TIMELINE = "January 2022 to April 2022";
export const PROJECTS_FEAST_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_FEAST_COURSE_URL} target="_blank">50.001 Information Systems & Programming</a>.<br/><br/>FEAST is a real-time crowd tracking app that allows users to conveniently check the current crowd levels at various food and beverage (F&B) establishments in SUTD.<br/><br/>Accompanying the crowd tracking functionality are a suite of features that improve user experience in the app, such as predictive estimated waiting time, customisability by prioritising user preferred locations, and real-time business advisory.<br/><br/>Built using modular design principles, the app has a plug-and-play model that allows easy implementation at any location, and even contains the infrastructure to expand beyond F&B to track crowd levels of other kinds of locations.<br/><br/>I led the frontend team and helped to design the user interface of the app, and ensured that the data from the backend is displayed properly on the frontend.`
);
export const PROJECTS_WILL_I_GO_BROKE_TITLE = "Will I Go Broke?";
export const PROJECTS_WILL_I_GO_BROKE_ROLE = "Developer";
export const PROJECTS_WILL_I_GO_BROKE_PROJECT_TYPE = "Personal Project";
export const PROJECTS_WILL_I_GO_BROKE_TIMELINE = "December 2021 to January 2022";
export const PROJECTS_WILL_I_GO_BROKE_PROJECT_DESCRIPTION = "Will I Go Broke? is a Telegram bot that is targetted at university students in Singapore.\n\nThe bot maps out your finances over your university/school life and determines how your financial situation might turn out once you graduate.\n\nI developed the bot from scratch and designed the user experience and mechanics behind the bot.";
export const PROJECTS_POKEMON_BATTLE_TITLE = "Pokemon Battle";
export const PROJECTS_POKEMON_BATTLE_ROLE = "Team Lead";
export const PROJECTS_POKEMON_BATTLE_PROJECT_TYPE = "School Project";
export const PROJECTS_POKEMON_BATTLE_TIMELINE = "September 2020 to December 2020";
export const PROJECTS_POKEMON_BATTLE_PROJECT_DESCRIPTION = parse(
  `For SUTD's course: <a href=${urlConst.PROJECTS_POKEMON_BATTLE_COURSE_URL} target="_blank">10.014 Computational Thinking for Design</a>.<br/><br/>Pokemon Battle is inspired by the popular game series, <a href=${urlConst.PROJECTS_POKEMON_BATTLE_URL} target="_blank">Pokémon</a>.<br/><br/>It is a Python text-based game for 2 players, where each player select a Pokemon from a list of 18 Pokemons of all types with a wide selection of moves, and battle each other.<br/><br/>It simulates the actual battle mechanics of modern Pokemon games, albeit providing a textual interface to play in.<br/><br/>I led the team for the game research and design of the game, and coded the mechanics and flow of the game.`
  )

// Skills page
export const SKILLS_TITLE = "Skills";
export const SKILLS_LANGUAGES_TITLE = "Languages";
export const SKILLS_PROGRAMMING_LANGUAGES_TITLE = "Programming Languages";
export const SKILLS_FRAMEWORKS_TITLE = "Frameworks";
export const SKILLS_TOOLS_TITLE = "Tools";
export const SKILLS_CERTIFICATIONS_TITLE = "Certifications";

// Experiences page

// Hobbies page

// Contact page