import profilePicture from "./profile_picture_portfolio.jpg";
import * as textConst from "../../const/text";

export default function NameAndPhoto() {
  return (
    <div class="container-fluid" id="name_and_photo">
      <div class="row align-items-center">
        <div
          class="col-xl-7 col-lg-7 col-md-7 col-sm-7 text-sm-end text-center"
          id="name_and_title"
        >
          <h1 id="name">{textConst.NAME}</h1>
          <h5 id="title">{textConst.ABOUT_MY_TITLE}</h5>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 text-sm-start text-center">
          <img
            src={profilePicture}
            loading="lazy"
            alt={textConst.ABOUT_PROFILE_PIC_ALT_TEXT}
            id="profile_picture"
          ></img>
        </div>
      </div>
    </div>
  );
};
