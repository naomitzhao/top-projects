import Search from "./assets/search.svg";
import "./headerStyles.css";

export default function loadSearch () {
    const searchbar = document.querySelector(".searchbar");
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.src = Search;

    const input = document.querySelector("input");
    
    input.addEventListener("focus", () => {
        searchIcon.classList.add("focusedSearchIcon");
        searchbar.classList.add("focusedSearchbar");
    });
    
    input.addEventListener("focusout", () => {
        searchIcon.classList.remove("focusedSearchIcon");
        searchbar.classList.remove("focusedSearchbar");
    });

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            const searchValue = input.value;
            input.value = "";
            console.log(searchValue);
        }
    })
}