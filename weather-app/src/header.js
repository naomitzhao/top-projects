import Search from "./assets/search.svg";
import "./headerStyles.css";

export function loadSearch (searchCity) {
    const DEFAULT_VALUE = "search for a city";
    const searchbar = document.querySelector(".searchbar");
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.src = Search;

    const input = document.querySelector("input");
    input.value = DEFAULT_VALUE;
    
    input.addEventListener("focus", () => {
        searchIcon.classList.add("focusedSearchIcon");
        searchbar.classList.add("focusedSearchbar");

        if (input.value == DEFAULT_VALUE) {
            input.value = "";
        }

        input.classList.add("focusedSearchInput");
    });
    
    input.addEventListener("focusout", () => {
        searchIcon.classList.remove("focusedSearchIcon");
        searchbar.classList.remove("focusedSearchbar");
        if (input.value == ""){
            input.value = DEFAULT_VALUE;
        }

        input.classList.remove("focusedSearchInput");
    });

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            const searchValue = input.value;
            input.value = DEFAULT_VALUE;
            input.blur();
            searchCity(searchValue);
        }
    })
}

export function loadUnitSwitch (switchUnits) {
    const unitButton = document.getElementById("unitButton");
    
    unitButton.addEventListener("click", () => {
        if (unitButton.textContent == "°F/MPH") {
            unitButton.textContent = "°C/KPH"
        }
        else {
            unitButton.textContent = "°F/MPH";
        }
        switchUnits();
    })
}