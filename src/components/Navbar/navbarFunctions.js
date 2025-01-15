function clickedAbout() {
  removeSelected();
  hideNavbarCollapse();
}

function clickedProjects() {
  removeSelected();
  hideNavbarCollapse();
  document.getElementById("nav_projects").classList.add("selected");
}

function clickedSkills() {
  removeSelected();
  hideNavbarCollapse();
  document.getElementById("nav_skills").classList.add("selected");
}

function clickedExperiences() {
  removeSelected();
  hideNavbarCollapse();
  document.getElementById("nav_experiences").classList.add("selected");
}

function clickedHobbies() {
  removeSelected();
  hideNavbarCollapse();
  document.getElementById("nav_hobbies").classList.add("selected");
}

function clickedContact() {
  removeSelected();
  hideNavbarCollapse();
  document.getElementById("nav_contact").classList.add("selected");
}

function removeSelected() {
  // un-highlights the previously selected navbar item
  window.focus();
  window.scrollTo(0, 0);
  const currentPage = document.getElementsByClassName("selected");

  if (currentPage.length > 0) {
    currentPage[0].classList.remove("selected");
  }
}

function hideNavbarCollapse() {
  // hides the navbar collapse menu (on smaller screens/windows) when a navbar item has been clicked on
  const navbarCollapse = Array.prototype.slice.call(
    document.getElementsByClassName("navbar-collapse"),
  )[0];
  navbarCollapse.classList.remove("show");
}

export default {
  clickedAbout,
  clickedProjects,
  clickedSkills,
  clickedExperiences,
  clickedHobbies,
  clickedContact,
  removeSelected,
  hideNavbarCollapse,
};
