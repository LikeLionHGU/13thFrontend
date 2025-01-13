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

const mobTop = document.querySelector("#mob_top");
const mobAbout = document.querySelector("#mob_about");
const mobBot = document.querySelector("#mob_bot");

mobTop.onclick = () => goToScroll(mobTop);
mobAbout.onclick = () => goToScroll(mobAbout);
mobBot.onclick = () => goToScroll(mobBot);

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

document.getElementById("heart").addEventListener("click", function () {
  const randomColor = getRandomColor();
  const path = this.querySelector("path");
  path.setAttribute("fill", randomColor); 
});