import './style.css';
import loadHome from './modules/homepage.js';
import loadMenu from './modules/menu.js';
import loadAbout from './modules/about.js';
import FrogMushroom from './assets/frog_mushroom.png';
import NavMenu from './assets/nav_menu.svg';
import Close from './assets/close.svg';
import { showDropdown, hideDropdown } from './modules/dropdown.js';

// switch tabs by removing everything from content div and adding a new tab
export function replaceContent(newChild) {
    const content = document.querySelector("#content");
    content.removeChild(document.querySelector(".content-page"));
    content.appendChild(newChild);
}

// load the icon used in the footer.
function loadImages() {
    const footerImg = document.getElementById("footer-img");
    footerImg.src = FrogMushroom;
}

// add event listeners to all nav icons
// and enable dropdown toggling for mobile layout
function activateNav () {
    const navButtons = document.querySelectorAll("nav button");
    const navFunctions = [loadHome, loadMenu, loadAbout];
    const navNames = ["home", "menu", "about"];
    
    // add event listeners for desktop nav
    for (let i = 0; i < navButtons.length; i ++) {
        navButtons[i].addEventListener("click", () => {
            replaceContent(navFunctions[i]());
        })
    }

    const header = document.querySelector("header");
    const navIcon = document.getElementById("nav-icon");
    navIcon.src = NavMenu;
    header.appendChild(navIcon);
    navIcon.id = "nav-icon";

    // add event listeners for mobile nav
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

let dropdownOpen = false;

// switch nav icon and set dropdownOpen to false
// used in dropdown.js to access dropdownOpen
export function closeDropdown(){
    dropdownOpen = false;
    const navIcon = document.getElementById("nav-icon");
    navIcon.src = NavMenu;
}

loadImages();
activateNav();

const content = document.querySelector("#content");
content.append(loadHome()); // on page load or refresh, home loads by default