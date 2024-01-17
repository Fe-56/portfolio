import parse from 'html-react-parser';
import * as urlConst from "./url";

// general
export const NAME = "Lim Fuo En";
export const FOOTNOTE = `${NAME}. All Rights Reserved.`;
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
  `For Singapore University of Technology and Design (SUTD)'s course: <a href=${urlConst.PROJECTS_ONLINE_HATE_SPEECH_DETECTION_COURSE_URL} target='_blank'>50.007 Machine Learning</a>.<br/><br/>Trained a variety of machine learning models for online hate speech classification.<br/><br/>Extensively tuned the model hyper-parameters to improve model performance.<br/><br/>Used machine learning techniques not taught in class to improve model performance.<br/><br/>I focused on tuning and optimising a machine learning model, called Support Vector Machines (SVM)`
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
export const SKILLS_LANGUAGES_ENGLISH = "English";
export const SKILLS_LANGUAGES_MANDARIN = "Mandarin";
export const SKILLS_LANGUAGES_SPOKEN_WRITTEN = "(spoken & written)";
export const SKILLS_PROGRAMMING_LANGUAGES_TITLE = "Programming Languages";
export const SKILLS_PROFICIENCY_PROFICIENT = "(proficient)";
export const SKILLS_PROFICIENCY_INTERMEDIATE = "(intermediate)";
export const SKILLS_PROFICIENCY_BEGINNER = "(beginner)";
export const SKILLS_FRAMEWORKS_TITLE = "Frameworks";
export const SKILLS_FRAMEWORKS_FRONTEND = "Frontend";
export const SKILLS_FRAMEWORKS_BACKEND = "Backend";
export const SKILLS_FRAMEWORKS_MOBILE = "Mobile";
export const SKILLS_TOOLS_TITLE = "Tools";
export const SKILLS_CERTIFICATIONS_TITLE = "Certifications";
export const SKILLS_CERTIFICATIONS_RESPONSIVE = "Responsive Web Design";
export const SKILLS_CERTIFICATIONS_JAVASCRIPT = "JavaScript Algorithms and Data Structures";
export const SKILLS_CERTIFICATIONS_FRONTEND = "Front End Development Libraries";
export const SKILLS_CERTIFICATIONS_VISUALISATION = "Data Visualization";
export const SKILLS_CERTIFICATIONS_BACKEND = "Back End Development and APIs";
export const SKILLS_CERTIFICATIONS_SCIENTIFIC = "Scientific Computing with Python";
export const SKILLS_CERTIFICATIONS_DATA = "Data Analysis with Python";

// Experiences page
export const EXPERIENCES_TITLE =  "Experiences";
export const EXPERIENCES_MYEXPOPLACE_TITLE = "MyExpoPlace";
export const EXPERIENCES_MYEXPOPLACE_ROLE = "Flutter Developer Intern";
export const EXPERIENCES_MYEXPOPLACE_LOCATION = "Los Angeles, California, United States";
export const EXPERIENCES_MYEXPOPLACE_TIMELINE = "June 2023 to August 2023";
export const EXPERIENCES_MYEXPOPLACE_EXPERIENCE_DESCRIPTION = parse("- Maintained and developed new features for MyExpoPlace mobile app using Flutter<br/>- Took ownership of design and development tasks for the app<br/>- Designed and implemented brand new user interfaces and experiences to improve listing experience in the app<br/>- Conducted technical research for potential development of new features to improve user experience when navigating the app");
export const EXPERIENCES_COFFEESPACE_TITLE = "CoffeeSpace";
export const EXPERIENCES_COFFEESPACE_ROLE = "Software Engineering Intern";
export const EXPERIENCES_COFFEESPACE_LOCATION = "San Francisco, California, United States";
export const EXPERIENCES_COFFEESPACE_TIMELINE = "March 2023 to June 2023";
export const EXPERIENCES_COFFEESPACE_EXPERIENCE_DESCRIPTION = parse("- Maintained and developed new features for CoffeeSpace mobile app using Flutter<br/>- Liaised with backend engineer to deliver functional and efficient CoffeSpace app functions<br/>-- Conducted technical research for potential development of new in-app payments to achieve additional revenue streams for CoffeeSpace");
export const EXPERIENCES_HDB_TITLE = "Housing & Development Board";
export const EXPERIENCES_HDB_ROLE = "Mobile Application Development Intern";
export const EXPERIENCES_HDB_LOCATION = "Singapore";
export const EXPERIENCES_HDB_TIMELINE = "August 2022 to December 2022";
export const EXPERIENCES_HDB_EXPERIENCE_DESCRIPTION = parse("- Maintained the Android and iOS codebases of the Mobile@HDB application, in Java (Android Studio) and Swift (Xcode) respectively<br/>- Developed new features for the Mobile@HDB application<br/>- Conducted technical research and built two functional Augmented Reality (AR) prototypes using different open source AR libraries in Kotlin");
export const EXPERIENCES_SMILETUTOR_TITLE = "SmileTutor";
export const EXPERIENCES_SMILETUTOR_ROLE = "Private Tutor (part-time)";
export const EXPERIENCES_SMILETUTOR_LOCATION = "Singapore";
export const EXPERIENCES_SMILETUTOR_TIMELINE = "January 2022 to Present";
export const EXPERIENCES_SMILETUTOR_EXPERIENCE_DESCRIPTION = parse("- Subjects taught: Primary 6 Mathematics and Science for Primary School Leaving Examinations (PSLE)<br/>- Conducted weekly one-on-one lessons at students' residences<br/>- Clarified the student's doubts, went through their homework and exam papers with them<br/>- Explained and taught them concepts thay they were otherwise unsure of<br/>- Liaised with the student's parents to ensure that their child's homework and assignments are done on time");
export const EXPERIENCES_DBS_TITLE = "DBS Bank";
export const EXPERIENCES_DBS_ROLE = "Business Analyst Intern";
export const EXPERIENCES_DBS_LOCATION = "Singapore";
export const EXPERIENCES_DBS_TIMELINE = "May 2021 to September 2021";
export const EXPERIENCES_DBS_EXPERIENCE_DESCRIPTION = parse("- Performed primary and secondary research, conduct analyses and appropriate modelling tasks that feeds directly into the development of technology-enabled solutions to tackle clients’ complex business problems<br/>- Supported the project teams in developing presentation materials and in coordination of communications with the client<br/>- Assisted the project teams in delivery of business-driven, technology-enabled solutions to help the clients meet pressing challenges and seize opportunities in their respective markets");

// Hobbies page
export const HOBBIES_TITLE = "Hobbies";
export const HOBBIES_CYCLING_TITLE = "Road Cycling";
export const HOBBIES_CYCLING_DESCRIPTION = parse(`I absolutely love road cycling! I have been cycling since 2018, when my friends introduced me to road cycling. My first road bike was a <a href=${urlConst.HOBBIES_CYCLING_TREK_URL} target="_blank">2016 Trek 1.2</a>. Since then, I've bought, rode, and sold several bikes. I am now riding a <a href=${urlConst.HOBBIES_CYCLING_BIANCHI_URL} target="_blank">Bianchi Sprint</a>.
<br/><br/>I don't race, I just cycle for fitness, to explore the world around me and for the sheer joy of riding a bike.`);
export const HOBBIES_RUNNING_TITLE = "Running";
export const HOBBIES_RUNNING_DESCRIPTION = parse(`I used to dislike running when I was younger, due to my bad-to-mediocre 2.4km timings in secondary school and junior college.<br/><br/>However, my perception changed when I started running more often in late-2022 as an alterantive way get fitter and increase my aerobic endurance other than cycling. When I realised that running was much more enjoyable when done at manageable paces and for longer distances, I decided to pick up runnning more seriously. Additionally, it takes up less time and costs less than cycling.<br/><br/>I intend to particiate in half-marathons and marathons in the future, and hence, I am running rather regularly nowadays. It is also because my purchase of a <a href=${urlConst.HOBBIES_RUNNING_GARMIN_URL} target="_blank">Garmin Forerunner 55</a> has provided me a strong extrinsic motivation to run! Or maybe I just want to justify the cost of spending so much on a watch.`);
export const HOBBIES_RUNNING_CYCLING_STRAVA_TEXT = "Check out my Strava!";
export const HOBBIES_GUITAR_TITLE = "Electric Guitar";
export const HOBBIES_GUITAR_DESCRIPTION = parse(`I love playing the electric guitar as well. I started playing it in 2019 simply because I just wanted to jam to my favourite music. I never hired an instructor to teach me how to play the guitar. I taught myself how to play by watching videos of other guitarists and learning songs by myself. I currently play an <a href=${urlConst.HOBBIES_GUITAR_GUITAR_URL} target="_blank">Ibanez GRGR131EX</a> superstrat, plugged into a <a href=${urlConst.HOBBIES_GUITAR_AMP_URL} target="_blank">Fender Champion 20</a> amplifier.<br/><br/>I usually play rock and metal songs by <a href=${urlConst.HOBBIES_GUITAR_LINKIN_PARK_URL} target="_blank">Linkin Park</a>, <a href=${urlConst.HOBBIES_GUITAR_METALLICA_URL} target="_blank">Metallica</a>, and <a href=${urlConst.HOBBIES_GUITAR_GREEN_DAY_URL} target="_blank">Green Day</a>. These three are some of my most favourite bands to play and listen to.<br/><br/>But recently, I've been playing the instrumental covers of more popular songs, where I literally make my guitar "sing" out the vocals/lyrics of the song.<br/><br/>I don't play for a band or perform. I just play for the sheer joy of playing my favourite riffs and songs on a guitar.`);
export const HOBBIES_GUITAR_SPOTIFY_TEXT = "Check out my Spotify!";
export const HOBBIES_NETFLIX_TITLE = "Netflix and Anime";
export const HOBBIES_NETFLIX_DESCRIPTION = parse(`I love watching films, shows and movies in general, especially on Netflix. I love watching a variety of genres, including science-fiction, horror, zombie, supernatural, thriller, fantasy, etc.<br/><br/>I also love watching anime. I usually watch the longer-running and super popular ones. I especially love <a href=${urlConst.HOBBIES_NETFLIX_DRAGON_BALL_URL} target="_blank">Dragon Ball</a> and <a href=${urlConst.HOBBIES_NETFLIX_NARUTO_URL} target="_blank">Naruto</a>. My most favourite chracters from each of the anime are <a href=${urlConst.HOBBIES_NETFLIX_VEGETA_URL} target="_blank">Vegeta</a> and <a href=${urlConst.HOBBIES_NETFLIX_ITACHI_URL} target="_blank">Itachi Uchiha</a> respectively.`);
export const HOBBIES_CODING_TITLE = "Building Cool Stuff";
export const HOBBIES_CODING_DESCRIPTION = parse(`Last but not least, I love to build cool stuff by writing code. I started coding back in 2017, and have built things like text-based games, Telegram bots, mobile apps, Android apps and web apps. I enjoy learning new languages and frameworks to keep myself updated and strive to build something that others will find value in using.</p>`);
export const HOBBIES_CODING_GITHUB_TEXT = "Check out my GitHub!";

// Contact page
export const CONTACT_TITLE = "Contact";
export const CONTACT_DESCRIPTION = "If you like what you see here and would like to collaborate with me, please contact me for a chat. Strictly for work-related purposes only, please!";
export const CONTACT_EMAIL_TITLE = "Email";
export const CONTACT_EMAIL = "limfuoen1999@gmail.com";
export const CONTACT_LINKEDIN_TITLE = "LinkedIn";
export const CONTACT_LINKEDIN = "Lim Fuo En's LinkedIn";
export const CONTACT_TELEGRAM_TITLE = "Telegram";
export const CONTACT_TELEGRAM = "@Fe-56";
export const CONTACT_PHONE_TITLE = "Phone Number";
export const CONTACT_PHONE = "+65 9735 7695";
export const CONTACT_LOCATION_TITLE = "(Current) Location";
export const CONTACT_LOCATION = "Singapore";

// miscellaneous (used across pages)
export const SKILL_FLUTTER = "Flutter";
export const SKILL_DART = "Dart";
export const SKILL_ANDROID_STUDIO = "Android Studio";
export const SKILL_FIRESTORE = "Google Firestore";
export const SKILL_JAVASCRIPT = "JavaScript";
export const SKILL_REACT = "React";
export const SKILL_EXPRESS = "Express.js";
export const SKILL_NODE = "Node.js";
export const SKILL_GITHUB = "GitHub";
export const SKILL_PYTHON = "Python";
export const SKILL_PYTELEGRAMBOT = "pyTelegramBotAPI";
export const SKILL_ML = "Machine Learning";
export const SKILL_POSTMAN = "Postman";
export const SKILL_TESTING = "Software Testing";
export const SKILL_VERILOG = "Verilog";
export const SKILL_COMPUTER_ENGINEERING = "Computer Engineering";
export const SKILL_JAVA = "Java";
export const SKILL_FIGMA = "Figma";
export const SKILL_GAME_DESIGN = "Game Design";
export const SKILL_COMMUNICATION = "Communication";
export const SKILL_RESEARCHING = "Researching for Solutions";
export const SKILL_DETAIL = "Attention to Detail";
export const SKILL_ENTREPRENEURSHIP = "Entrepreneurship";
export const SKILL_KOTLIN = "Kotlin";
export const SKILL_SWIFT = "Swift";
export const SKILL_HTML = "HTML";
export const SKILL_CSS = "CSS";
export const SKILL_D3 = "D3.js";
export const SKILL_BOOTSTRAP = "Bootstrap";
export const SKILL_MONGO = "MongoDB";
export const SKILL_FIREBASE = "Google Firebase";
export const SKILL_VSCODE = "Visual Studio Code";
export const SKILL_XCODE = "Xcode";
export const SKILL_JIRA = "Jira";
export const SKILL_TEACHING = "Teaching";
export const SKILL_POWERPOINT = "Powerpoint";
export const SKILL_WORD = "Word";
export const SKILL_EXCEL = "Excel";
export const SKILL_SYSTEMSTESTING = "Systems Testing";
export const SKILL_PM = "Project Management";
