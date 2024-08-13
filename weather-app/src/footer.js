import InfoIcon from "./assets/info.svg";
import './footerStyles.css';

export default function loadInfo () {
    const footerContent = document.getElementById("footerContent");

    const infoIcon = document.querySelector(".infoIcon");
    infoIcon.src = InfoIcon;

    const info = document.getElementById("info");
    
    infoIcon.addEventListener("mouseover", () => {
        info.style.display = "block";
        infoIcon.classList.add("selectedInfoIcon");
    });
    
    footerContent.addEventListener("mouseleave", () => {
        info.style.display = "none";
        infoIcon.classList.remove("selectedInfoIcon");
    });
}
