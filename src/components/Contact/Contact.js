import React, { useEffect } from "react";
import pageLoad from "../utils/pageLoad";
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    pageLoad();
    document.getElementById('nav_contact').classList.add('selected'); // ensures that the corresponding navbar item is selected even if the user refreshes the webpage
  });

  return (
    <div id="contact" class="container-fluid">
      <h1 id="contact_me">Contact</h1>
      <h5 id="contact_text" class="text-start">
        If you like what you see here and would like to collaborate with me, please contact me for a chat. Strictly for work-related purposes only, please!
      </h5>
      <div id="email" class="contact_section">
        <h3><u>Email</u></h3>
        <a href="mailto:limfuoen1999@gmail.com" target="_blank" id="email_address" class="contact_link">
          <i class="fa-solid fa-envelope icon"></i>
          limfuoen1999@gmail.com
        </a>
      </div>
      <div id="linkedin" class="contact_section">
        <h3><u>LinkedIn</u></h3>
        <a href="https://www.linkedin.com/in/limfuoen/" target="_blank" id="linkedin" class="contact_link">
          <i class="fa-brands fa-linkedin icon"></i>
          Lim Fuo En's LinkedIn
        </a>
      </div>
      <div id="telegram" class="contact_section">
        <h3><u>Telegram</u></h3>
        <a href="https://t.me/Fe_56" target="_blank" id="email_address" class="contact_link">
          <i class="fa-brands fa-telegram icon"></i>
          @Fe-56
        </a>
      </div>
      <div id="phone" class="contact_section">
        <h3><u>Phone Number</u></h3>
        <a href="tel:+6597357695" target="_blank" id="phone_number" class="contact_link">
          <i class="fa-solid fa-phone icon"></i>
          +65 9735 7695
        </a>
      </div>
      <div id="location" class="contact_section">
        <h3><u>(Current) Location</u></h3>
        <a href="https://www.google.com/maps/place/Singapore/@1.3139946,103.6794481,11z/data=!4m6!3m5!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836!16zL20vMDZ0MnQ?entry=ttu" target="_blank" id="phone_number" class="contact_link">
          <i class="fa-solid fa-location-dot icon"></i>
          Singapore
        </a>
      </div>
    </div>
  );
}