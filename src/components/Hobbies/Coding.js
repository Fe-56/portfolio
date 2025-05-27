import Icon from "../../const/icons";
import * as textConst from "../../const/text";

export default function Coding() {
  return (
    <div id="building_cool_stuff" class="hobby">
      <Icon.HobbyHeading hobbyName="coding" />
      <p class="text-start description">
        {textConst.HOBBIES_CODING_DESCRIPTION}
      </p>
      <div class="hobby_end">
        <Icon.HobbyLinkIcon hobbyName="coding" />
      </div>
    </div>
  );
}
