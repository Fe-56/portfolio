import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import "./Contact.css";
import * as textConst from "../../const/text";
import Icon from "../../const/icons";

export default function Contact() {
  useEffect(() => {
    pageLoad();
    document.getElementById("nav_contact").classList.add("selected"); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="contact" class="container-fluid">
      <h1 id="contact_me">{textConst.CONTACT_TITLE}</h1>
      <h5 id="contact_text" class="text-start">
        {textConst.CONTACT_DESCRIPTION}
      </h5>
      <Email />
      <LinkedIn />
      <Telegram />
      <Phone />
      <Location />
    </div>
  );
}

const Email = () => {
  return (
    <div id="email" class="contact_section">
      <h3>
        <u>{textConst.CONTACT_EMAIL_TITLE}</u>
      </h3>
      <Icon.ContactLinkIcon contactType="email" />
    </div>
  );
};

const LinkedIn = () => {
  return (
    <div id="linkedin" class="contact_section">
      <h3>
        <u>{textConst.CONTACT_LINKEDIN_TITLE}</u>
      </h3>
      <Icon.ContactLinkIcon contactType="linkedin" />
    </div>
  );
};

const Telegram = () => {
  return (
    <div id="telegram" class="contact_section">
      <h3>
        <u>{textConst.CONTACT_TELEGRAM_TITLE}</u>
      </h3>
      <Icon.ContactLinkIcon contactType="telegram" />
    </div>
  );
};

const Phone = () => {
  return (
    <div id="phone" class="contact_section">
      <h3>
        <u>{textConst.CONTACT_PHONE_TITLE}</u>
      </h3>
      <Icon.ContactLinkIcon contactType="phone" />
    </div>
  );
};

const Location = () => {
  return (
    <div id="location" class="contact_section">
      <h3>
        <u>{textConst.CONTACT_LOCATION_TITLE}</u>
      </h3>
      <Icon.ContactLinkIcon contactType="location" />
    </div>
  );
};
