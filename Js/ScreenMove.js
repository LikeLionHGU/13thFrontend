const home = document.querySelector(".header-home");
const about = document.querySelector(".header-about");
const contact = document.querySelector(".header-contact");

function goToScroll(name) {
  let location = name.offsetTop;
  window.scrollTo({top: location, behavior: 'smooth'});
  //console.log(`I am ${name}`);
}

home.onclick = () => goToScroll(home);
about.onclick = () => goToScroll(about);
contact.onclick = () => goToScroll(contact);
