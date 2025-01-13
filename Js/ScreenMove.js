const home = document.querySelector(".header-home");
const about = document.querySelector(".header-about");
const contact = document.querySelector(".header-contact");

function goToScroll(name) {
  let location = name.offsetTop;
  window.scrollTo({top: location, behavior: 'smooth'});
  console.log(`I am ${name}`);
}

home.onclick = () => goToScroll(home);
about.onclick = () => goToScroll(about);
contact.onclick = () => goToScroll(contact);

const mobTop = document.querySelector("#header-mob_top");
const mobAbout = document.querySelector("#header-mob_about");
const mobBot = document.querySelector("#header-mob_bot");

mobTop.onclick = () => goToScroll(mobTop);
mobAbout.onclick = () => goToScroll(mobAbout);
mobBot.onclick = () => goToScroll(mobBot);
