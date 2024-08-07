// dropdown: menu shown after user clicks menu button in navbar
// used in mobile layout.

import { replaceContent, closeDropdown } from '../index.js';

export function showDropdown(navFunctions, navNames) {
    const body = document.querySelector("body");
    const content = document.getElementById("content");

    const dropdown = document.createElement("div");
    dropdown.id = "dropdown";

    // add all navbar links to the dropdown
    for (let i = 0; i < navFunctions.length; i ++) {
        const ddLink = document.createElement("button");
        ddLink.textContent = navNames[i];
        ddLink.addEventListener("click", () => {
            replaceContent(navFunctions[i]());
            hideDropdown();
            closeDropdown();
        });
        dropdown.appendChild(ddLink);
    }

    body.insertBefore(dropdown, content);
}

export function hideDropdown(){
    const body = document.querySelector("body");
    const dropdown = document.getElementById("dropdown");
    body.removeChild(dropdown);
}

