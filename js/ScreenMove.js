const button = document.querySelectorAll("button");
const likelionHead = document.querySelector("#likelion-header");
const likelionGrid = document.querySelector("#likelion_grid");
const likelionFoot = document.querySelector("#footer");

const firstHome = likelionHead.offsetTop;
const secondAbout = likelionGrid.offsetTop;
const thirdContact = likelionFoot.offsetTop;

button[0].onclick = function(){
  window.scroll({top:firstHome, behavior: 'smooth'})
};
button[1].onclick = function(){
  window.scroll({top:secondAbout, behavior: 'smooth'})
};
button[2].onclick = function(){
  window.scroll({top:thirdContact, behavior: 'smooth'})
};

const mobHead = document.querySelector("#header-mob_top");
const mobGrid = document.querySelector("#header-mob_about");
const mobFoot = document.querySelector("#header-mob_bot");

mobHead.onclick = function(){
  window.scroll({top:firstHome, behavior: 'smooth'})
};
mobGrid.onclick = function(){
  window.scroll({top:secondAbout, behavior: 'smooth'})
};
mobFoot.onclick = function(){
  window.scroll({top:thirdContact, behavior: 'smooth'})
};


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

document.getElementById("heart").addEventListener("click", function () {
  const randomColor = getRandomColor();
  const path = this.querySelector("path");
  path.setAttribute("fill", randomColor); 
});
