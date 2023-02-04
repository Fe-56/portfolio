export default function pageLoad() { // scrolls to the top of the page and removes any previously selected navbar tabs upon clicking into a new navbar tab
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 200); // need a timeout here so that the scrolling will always work, no matter how much the user has already scrolled in the previous page

  if (document.getElementsByClassName('selected').length > 0){
    const selectedPage = document.getElementsByClassName('selected')[0];
    selectedPage.classList.remove('selected');
  }
}