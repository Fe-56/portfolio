import Icon from "../../const/icons";
import cycling_1 from "./cycling_1.jpg";
import cycling_2 from "./cycling_2.jpg";
import * as textConst from "../../const/text";

export default function Cycling() {
  return (
    <div id="road_cycling" class="hobby">
      <Icon.HobbyHeading hobbyName="cycling" />
      <p class="text-start description">
        {textConst.HOBBIES_CYCLING_DESCRIPTION}
      </p>
      <div id="cycling_images">
        <img
          src={cycling_1}
          loading="lazy"
          alt="Cycling picture 1"
          id="cycling_picture_1"
          class="image"
        ></img>
        <img
          src={cycling_2}
          loading="lazy"
          alt="Cycling picture 2"
          id="cycling_picture_2"
          class="image"
        ></img>
      </div>
      <div class="hobby_end">
        <Icon.HobbyLinkIcon hobbyName="cycling" />
      </div>
    </div>
  );
}
