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
      <h1 id="contact_me">Contact Me</h1>
      <h5 id="looking_for_internship" class="text-start">
        I am currently looking for web/mobile app developer internships from May to August 2023, preferably in Berkeley, or in the Bay Area.
        <br/><br/>
        If you are looking for an intern, and/or like what you see here, please contact me for a chat. Strictly for work-related purposes only, please!
      </h5>
      <div id="linkedin" class="contact_section">
        <h3><u>LinkedIn</u></h3>
        <a href="https://www.linkedin.com/in/limfuoen/" target="_blank" id="linkedin" class="contact_link">
          <i class="fa-brands fa-linkedin icon"></i>
          Fuo En Lim's LinkedIn
        </a>
      </div>
      <div id="email" class="contact_section">
        <h3><u>Email</u></h3>
        <a href="mailto:fuoen_lim@berkeley.edu" target="_blank" id="email_address" class="contact_link">
          <i class="fa-solid fa-envelope icon"></i>
          fuoen_lim@berkeley.edu
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
        <a href="tel:+13414008340" target="_blank" id="phone_number" class="contact_link">
          <i class="fa-solid fa-phone icon"></i>
          +1 (341) 400-8340
        </a>
      </div>
      <div id="location" class="contact_section">
        <h3><u>(Current) location</u></h3>
        <a href="https://www.google.com/maps/place/Berkeley,+CA/@37.8711428,-122.3714773,12z/data=!3m1!4b1!4m6!3m5!1s0x808579363a8549d3:0x94ea1595a675e993!8m2!3d37.8715226!4d-122.273042!16zL20vMDFqcjY" target="_blank" id="phone_number" class="contact_link">
          <i class="fa-solid fa-location-dot icon"></i>
          Berkeley, California, United States
        </a>
      </div>
    </div>
  );
}