import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Hobbies.css';
import cycling_1 from './cycling_1.jpg';
import cycling_2 from './cycling_2.jpg';

export default function Hobbies() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_hobbies').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="hobbies" class="container-fluid">
      <h1 id="hobbies_title">Hobbies</h1>
      <div id="road_cycling" class="hobby">
        <h3 class="hobby_title">
          <i class="fa-solid fa-person-biking icon"></i>
          <u>Road Cycling</u>
        </h3>
        <p class="text-start description">
          I absolutely love road cycling! I have been cycling since 2018, when my friends introduced me to road cycling. My first road bike was a <a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/1-series/1-2/p/15807/" target="_blank">2016 Trek 1.2</a>. Since then, I've bought, rode, and sold several bikes. I am now riding a <a href="https://www.bianchi.com/bikes/bikes/road/racing-road/sprint/" target="_blank">Bianchi Sprint</a>.
          <br/><br/>
          I don't race, I just cycle for fitness, to explore the world around me and for the sheer joy of riding a bike.
        </p>
        <div id="cycling_images">
          <img src={cycling_1} loading="lazy" alt="Cycling picture 1" id="cycling_picture_1" class="image"></img>
          <img src={cycling_2} loading="lazy" alt="Cycling picture 2" id="cycling_picture_2" class="image"></img>
        </div>
        <div class="hobby_end">
          <a href="https://www.strava.com/athletes/33035635" target="_blank">
            <i class="fa-brands fa-strava icon"></i>
            Check out my Strava!
          </a>
        </div>
      </div>
      <div id="electric_guitar" class="hobby">
        <h3 class="hobby_title">
          <i class="fa-solid fa-guitar icon"></i>
          <u>Electric Guitar</u>
        </h3>
        <p class="text-start description">
          I love playing the electric guitar as well. I started playing it in 2019 simply because I just wanted to jam to my favourite music. I never hired an instructor to teach me how to play the guitar. I taught myself how to play by watching videos of other guitarists and learning songs by myself. I currently play an <a href="https://www.ibanez.com/na/products/detail/grgr131ex_2y_02.html" target="_blank">Ibanez GRGR131EX</a> superstrat, plugged into a <a href="https://www.fender.com/en-US/guitar-amplifiers/contemporary-digital/champion-20/2330200000.html" target="_blank">Fender Champion 20</a> amplifier.
          <br/><br/>
          I usually play rock and metal songs by <a href="https://en.wikipedia.org/wiki/Linkin_Park" target="_blank">Linkin Park</a>, <a href="https://en.wikipedia.org/wiki/Metallica" target="_blank">Metallica</a>, and <a href="https://en.wikipedia.org/wiki/Green_Day" target="_blank">Green Day</a>. These three are some of my most favourite bands to play and listen to.
          <br/><br/>
          I don't play for a band or perform. I just play for the sheer joy of playing my favourite riffs and songs on a guitar.
        </p>
        <div id="guitarist_images">
          <img src="https://townsquare.media/site/366/files/2014/03/Brad-Delson.jpg?w=980&q=75" loading="lazy" alt="Brad Delson" id="brad_delson_picture" class="image"></img>
          <img src="https://cdn.mos.cms.futurecdn.net/rq8KkgPmJ3deSfWYPAUGrJ.jpg" loading="lazy" alt="James Hetfield and Kirk Hammet" id="james_hetfield_and_kirk_hammet_picture" class="image"></img>
          <img src="https://www.nme.com/wp-content/uploads/2016/09/2013GREENDAY_AB240813-1.jpg" loading="lazy" alt="Billie Joe Armstrong" id="bille_joe_armstrong_picture" class="image"></img>
        </div>
        <div class="hobby_end">
          <a href="https://open.spotify.com/user/j3bhg792iv70buez0dn81gbih" target="_blank">
            <i class="fa-brands fa-spotify icon"></i>
            Check out my Spotify!
          </a>
        </div>
      </div>
      <div id="netflix_and_anime" class="hobby">
        <h3 class="hobby_title">
          <i class="fa-solid fa-film icon"></i>
          <u>Netflix and Anime</u>
        </h3>
        <p class="text-start description">
          I love watching films, shows and movies in general, especially on Netflix. I love watching a variety of genres, including science-fiction, horror, zombie, supernatural, thriller, fantasy, etc.
          <br/><br/>
          I also love watching anime. I usually watch the longer-running and super popular ones. I especially love <a href="https://en.wikipedia.org/wiki/Dragon_Ball" target="_blank">Dragon Ball</a> and <a href="https://en.wikipedia.org/wiki/Naruto" target="_blank">Naruto</a>. My most favourite chracters from each of the anime are <a href="https://dragonball.fandom.com/wiki/Vegeta" target="_blank">Vegeta</a> and <a href="https://naruto.fandom.com/wiki/Itachi_Uchiha" target="_blank">Itachi Uchiha</a> respectively.
        </p>
        <div id="anime_images" class="hobby_end">
          <img src="https://i.redd.it/e6gr4jd1i5o81.jpg" loading="lazy" alt="Vegeta" id="vegeta_picture" class="image"></img>
          <img src="https://mfiles.alphacoders.com/900/900540.jpg" loading="lazy" alt="Itachi Uchiha" id="itachi_uchiha_picture" class="image"></img>
        </div>
      </div>
      <div id="building_cool_stuff" class="hobby">
        <h3 class="hobby_title">
          <i class="fa-solid fa-code icon"></i>
          <u>Building Cool Stuff</u>
        </h3>
        <p class="text-start description">
          Last but not least, I love to build cool stuff by writing code. I started coding back in 2017, and have built things like text-based games, Telegram bots, mobile apps, Android apps and web apps. I enjoy learning new languages and frameworks to keep myself updated and strive to build something that others will find value in using.
        </p>
        <div class="hobby_end">
          <a href="https://github.com/Fe-56" target="_blank">
            <i class="fa-brands fa-github icon"></i>
            Check out my GitHub!
          </a>
        </div>
      </div>
    </div>
  );
}