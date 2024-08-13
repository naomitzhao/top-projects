import Search from "./assets/search.svg";
import "./headerStyles.css";

// load the search bar
export function loadSearch (searchCity) {
    const DEFAULT_VALUE = "search for a city";
    const searchbar = document.querySelector(".searchbar");
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.src = Search;

    const input = document.querySelector("input");
    input.value = DEFAULT_VALUE;
    
    // add listener for when user clicks to select search bar
    // get rid of default text and toggle visual effects
    input.addEventListener("focus", () => {
        searchIcon.classList.add("focusedSearchIcon");
        searchbar.classList.add("focusedSearchbar");

        if (input.value == DEFAULT_VALUE) {
            input.value = "";
        }

        input.classList.add("focusedSearchInput");
    });
    
    // add listener for when user unfocuses search bar
    // if no text, add default text back
    // toggle visual effects
    input.addEventListener("focusout", () => {
        searchIcon.classList.remove("focusedSearchIcon");
        searchbar.classList.remove("focusedSearchbar");
        if (input.value == ""){
            input.value = DEFAULT_VALUE;
        }

        input.classList.remove("focusedSearchInput");
    });

    // add listener to check for Enter keypress to call searchCity
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            const searchValue = input.value;
            input.value = DEFAULT_VALUE;
            input.blur();
            searchCity(searchValue);
        }
    })
}

// load the unit switch button 
export function loadUnitSwitch (switchUnits) {
    const unitButton = document.getElementById("unitButton");
    
    // add listener to check for click
    unitButton.addEventListener("click", () => {
        // change button appearance by switching displayed unit types
        if (unitButton.textContent == "°F/MPH") {
            unitButton.textContent = "°C/KPH";
        }
        else {
            unitButton.textContent = "°F/MPH";
        }
        
        switchUnits();
    })
}

// show the city not found message
export function showError () {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
}

// hide the city not found message
export function hideError () {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";
}