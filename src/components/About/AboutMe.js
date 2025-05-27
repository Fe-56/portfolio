import * as textConst from "../../const/text";

export default function AboutMe() {
  return (
    <div id="about_me" class="about_section">
      <h3>
        <u>{textConst.ABOUT_TITLE}</u>
      </h3>
      <p class="text-start" id="about_text">
        {textConst.ABOUT_ABOUT}
      </p>
    </div>
  );
}
