import * as textConst from "../../const/text";
import * as urlConst from "../../const/url";

export default function FindMe() {
  return (
    <div id="find_me" class="about_section">
      <h3>
        <u>{textConst.ABOUT_FIND_ME_WEB}</u>
      </h3>
      <div class="container-fluid">
        <div class="row align-items-center">
          {/* find me GitHub button */}
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="find_me_button_container">
              <a
                href={urlConst.ABOUT_GITHUB_URL}
                target="_blank"
                class="find_me_button"
              >
                <i class="fa-brands fa-github fa-2xl"></i>
                <p>{textConst.ABOUT_GITHUB}</p>
              </a>
            </div>
          </div>
          {/* find me LinkedIn button */}
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div class="find_me_button_container">
              <a
                href={urlConst.ABOUT_LINKEDIN_URL}
                target="_blank"
                class="find_me_button"
              >
                <i class="fa-brands fa-linkedin fa-2xl"></i>
                <p>{textConst.ABOUT_LINKEDIN}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
