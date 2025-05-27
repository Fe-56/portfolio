import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";

export default function Resume() {
  return (
    <div id="resume" class="about_section">
      <h3>
        <u>{textConst.ABOUT_RESUME_TITLE}</u>
      </h3>
      <a href={urlConst.ABOUT_RESUME_URL} target="_blank">
        <button type="button" class="btn btn-light buttons">
          {textConst.ABOUT_RESUME_BUTTON}
        </button>
      </a>
    </div>
  );
}
