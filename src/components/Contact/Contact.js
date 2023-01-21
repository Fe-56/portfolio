import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <div id="contact" class="container-fluid">
      <h1 id="contact_me">Contact Me</h1>
      <h5>I am currently looking for internships from May to August 2023, preferably in Berkeley, or in the Bay Area.</h5>
      <div id="email" class="contact_section">
        <h3><u>Email</u></h3>
        <a href="mailto:fuoen_lim@berkeley.edu" target="_blank" id="email_address">fuoen_lim@berkeley.edu</a>
      </div>
    </div>
  );
}