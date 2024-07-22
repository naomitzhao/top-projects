import './style.css';
import loadHome from './modules/homepage.js';
import loadMenu from './modules/menu.js';
import loadAbout from './modules/about.js';
import FrogMushroom from './assets/frog_mushroom.png';
import NavMenu from './assets/nav_menu.svg';

let content = document.querySelector("#content");

function replaceContent(newChild) {
    content.removeChild(document.querySelector(".content-page"));
    content.appendChild(newChild);
}

const navButtons = document.querySelectorAll("nav button");
const navFunctions = [loadHome, loadMenu, loadAbout]
for (let i = 0; i < navButtons.length; i ++) {
    navButtons[i].addEventListener("click", () => {
        replaceContent(navFunctions[i]());
    })
}

content.append(loadHome());

const footerImg = document.getElementById("footer-img");
footerImg.src = FrogMushroom;

const navIcon = document.getElementById("nav-icon");
navIcon.src = NavMenu;