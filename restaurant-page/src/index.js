import './style.css';
import loadHome from './modules/homepage.js';
import loadMenu from './modules/menu.js';
import loadAbout from './modules/about.js';
import FrogMushroom from './assets/frog_mushroom.png';
import NavMenu from './assets/nav_menu.svg';
import Close from './assets/close.svg';
import { showDropdown, hideDropdown } from './modules/dropdown.js';

let content = document.querySelector("#content");

export function replaceContent(newChild) {
    content.removeChild(document.querySelector(".content-page"));
    content.appendChild(newChild);
}

function loadImages() {
    const footerImg = document.getElementById("footer-img");
    footerImg.src = FrogMushroom;
}

const navButtons = document.querySelectorAll("nav button");

const navFunctions = [loadHome, loadMenu, loadAbout];
const navNames = ["home", "menu", "about"];

for (let i = 0; i < navButtons.length; i ++) {
    navButtons[i].addEventListener("click", () => {
        replaceContent(navFunctions[i]());
    })
}

let dropdownOpen = false;

export function closeDropdown(){
    dropdownOpen = false;

    const navIcon = document.getElementById("nav-icon");
    navIcon.src = NavMenu;
}

function showNavIcon () {
    const header = document.querySelector("header");
    const navIcon = document.getElementById("nav-icon");
    navIcon.src = NavMenu;
    header.appendChild(navIcon);
    navIcon.id = "nav-icon";
    navIcon.addEventListener("click", () => {
        if (dropdownOpen) {
            hideDropdown();
            navIcon.src = NavMenu;
        }
        else {
            showDropdown(navFunctions, navNames);
            navIcon.src = Close;
        }
        dropdownOpen = !dropdownOpen;
    });
}

loadImages();
showNavIcon();
content.append(loadHome());