import Icon from "../../const/icons";
import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";

export default function Guitar() {
  return (
    <div id="electric_guitar" class="hobby">
      <Icon.HobbyHeading hobbyName="guitar" />
      <p class="text-start description">
        {textConst.HOBBIES_GUITAR_DESCRIPTION}
      </p>
      <div id="guitarist_images">
        <img
          src={urlConst.HOBBIES_GUITAR_LINKIN_PARK_PICTURE_URL}
          loading="lazy"
          alt="Brad Delson"
          id="brad_delson_picture"
          class="image"
        ></img>
        <img
          src={urlConst.HOBBIES_GUITAR_METALLICA_PICTURE_URL}
          loading="lazy"
          alt="James Hetfield and Kirk Hammet"
          id="james_hetfield_and_kirk_hammet_picture"
          class="image"
        ></img>
        <img
          src={urlConst.HOBBIES_GUITAR_GREEN_DAY_PICTURE_URL}
          loading="lazy"
          alt="Billie Joe Armstrong"
          id="bille_joe_armstrong_picture"
          class="image"
        ></img>
      </div>
      <div class="hobby_end">
        <Icon.HobbyLinkIcon hobbyName="guitar" />
      </div>
    </div>
  );
}
