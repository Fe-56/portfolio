import Icon from "../../const/icons";
import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";

export default function Netflix() {
  return (
    <div id="netflix_and_anime" class="hobby">
      <Icon.HobbyHeading hobbyName="netflix" />
      <p class="text-start description">
        {textConst.HOBBIES_NETFLIX_DESCRIPTION}
      </p>
      <div id="anime_images" class="hobby_end">
        <img
          src={urlConst.HOBBIES_NETFLIX_VEGETA_PICTURE_URL}
          loading="lazy"
          alt="Vegeta"
          id="vegeta_picture"
          class="image"
        ></img>
        <img
          src={urlConst.HOBBIES_NETFLIX_ITACHI_PICTURE_URL}
          loading="lazy"
          alt="Itachi Uchiha"
          id="itachi_uchiha_picture"
          class="image"
        ></img>
      </div>
    </div>
  );
}
