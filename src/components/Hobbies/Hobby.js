import React from "react";
import cycling_1 from './cycling_1.jpg';
import cycling_2 from './cycling_2.jpg';
import * as textConst from '../../const/text';
import * as urlConst from '../../const/url';
import Icon from "../../const/icons";

const Cycling = () => {
  return <div id="road_cycling" class="hobby">
    <Icon.HobbyHeading hobbyName="cycling" />
    <p class="text-start description">
      {textConst.HOBBIES_CYCLING_DESCRIPTION}
    </p>
    <div id="cycling_images">
      <img src={cycling_1} loading="lazy" alt="Cycling picture 1" id="cycling_picture_1" class="image"></img>
      <img src={cycling_2} loading="lazy" alt="Cycling picture 2" id="cycling_picture_2" class="image"></img>
    </div>
    <div class="hobby_end">
      <Icon.HobbyLinkIcon hobbyName="cycling" />
    </div>
  </div>
}

const Guitar = () => {
  return <div id="electric_guitar" class="hobby">
    <Icon.HobbyHeading hobbyName="guitar" />
    <p class="text-start description">
      {textConst.HOBBIES_GUITAR_DESCRIPTION}
    </p>
    <div id="guitarist_images">
      <img src={urlConst.HOBBIES_GUITAR_LINKIN_PARK_PICTURE_URL} loading="lazy" alt="Brad Delson" id="brad_delson_picture" class="image"></img>
      <img src={urlConst.HOBBIES_GUITAR_METALLICA_PICTURE_URL} loading="lazy" alt="James Hetfield and Kirk Hammet" id="james_hetfield_and_kirk_hammet_picture" class="image"></img>
      <img src={urlConst.HOBBIES_GUITAR_GREEN_DAY_PICTURE_URL} loading="lazy" alt="Billie Joe Armstrong" id="bille_joe_armstrong_picture" class="image"></img>
    </div>
    <div class="hobby_end">
      <Icon.HobbyLinkIcon hobbyName="guitar" />
    </div>
  </div>
}

const Netflix = () => {
  return <div id="netflix_and_anime" class="hobby">
    <Icon.HobbyHeading hobbyName="netflix" />
    <p class="text-start description">
      {textConst.HOBBIES_NETFLIX_DESCRIPTION}
    </p>
    <div id="anime_images" class="hobby_end">
      <img src={urlConst.HOBBIES_NETFLIX_VEGETA_PICTURE_URL} loading="lazy" alt="Vegeta" id="vegeta_picture" class="image"></img>
      <img src={urlConst.HOBBIES_NETFLIX_ITACHI_PICTURE_URL} loading="lazy" alt="Itachi Uchiha" id="itachi_uchiha_picture" class="image"></img>
    </div>
  </div>
}

const Coding = () => {
  return <div id="building_cool_stuff" class="hobby">
    <Icon.HobbyHeading hobbyName="coding" />
    <p class="text-start description">
      {textConst.HOBBIES_CODING_DESCRIPTION}
    </p>
    <div class="hobby_end">
      <Icon.HobbyLinkIcon hobbyName="coding" />
    </div>
  </div>
}

const Hobby = {
  Cycling,
  Guitar,
  Netflix,
  Coding
}

export default Hobby;
