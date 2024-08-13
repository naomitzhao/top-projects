import "./indexStyles.css";
import StarrySky from "./assets/starry_sky.jpg";
import loadInfo from "./footer.js";
import { loadUnitSwitch, loadSearch, showError, hideError } from "./header.js";
import loadContent from "./content.js";
import { fetchWeatherData, processWeatherData } from "./weatherData.js";

const DEFAULT_CITY = "san francisco";

// whether we are using US (imperial) units
let isUsUnits = false;


let weatherData = null;
searchCity(DEFAULT_CITY);
loadSearch(searchCity);
loadUnitSwitch(switchUnits);
loadInfo();
loadBackground();

// load background image
function loadBackground () {
    const body = document.querySelector("body");
    body.style.background = "url(" + StarrySky + ") 100% / cover no-repeat";
}

// switch units from metric to US or vice versa
// then reload the content
function switchUnits () {
    isUsUnits = !isUsUnits;
    loadContent(weatherData, isUsUnits);
}

// get the weather data for a city, then load the content from the data
async function searchCity (city) {
    weatherData = await fetchWeatherData(city);
    if (weatherData === -1) {
        showError();
    }
    else {
        weatherData = processWeatherData(weatherData);
        hideError();
        loadContent(weatherData, isUsUnits);
    }
}