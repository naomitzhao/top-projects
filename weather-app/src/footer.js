import InfoIcon from "./assets/info.svg";
import './footerStyles.css';

// load the info icon
export default function loadInfo () {
    const footerContent = document.getElementById("footerContent");

    const infoIcon = document.querySelector(".infoIcon");
    infoIcon.src = InfoIcon;

    const info = document.getElementById("info");

    // add event listener for mouse hover over the info icon to show info box
    infoIcon.addEventListener("mouseover", () => {
        info.style.display = "block";
        infoIcon.classList.add("selectedInfoIcon");
    });
    
    // add event listener for when mouse leaves the info div to hide info box
    footerContent.addEventListener("mouseleave", () => {
        info.style.display = "none";
        infoIcon.classList.remove("selectedInfoIcon");
    });
}
