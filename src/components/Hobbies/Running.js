import Icon from "../../const/icons";
import * as textConst from "../../const/text";
import running from "./running.jpg";

export default function Running() {
  return (
    <div id="running" class="hobby">
      <Icon.HobbyHeading hobbyName="running" />
      <p class="text-start description">
        {textConst.HOBBIES_RUNNING_DESCRIPTION}
      </p>
      <div id="running_images">
        <img
          src={running}
          loading="lazy"
          alt="Running picture"
          id="running_picture"
          class="image"
        ></img>
      </div>
      <div class="hobby_end">
        <Icon.HobbyLinkIcon hobbyName="running" />
      </div>
    </div>
  );
}
