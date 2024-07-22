import './style.css';
import loadHome from './modules/homepage.js';
import loadMenu from './modules/menu.js';
import loadAbout from './modules/about.js';

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