import "./indexStyles.css";
import StarrySky from "./assets/starry_sky.jpg";
import loadInfo from "./footer.js";
import { loadUnitSwitch, loadSearch } from "./header.js";
import loadContent from "./content.js";
import { fetchWeatherData, processWeatherData } from "./weatherData.js";

// whether we are using US (imperial) units
let isUsUnits = false;


let weatherData = null;
searchCity("san francisco");
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
    weatherData = processWeatherData(await fetchWeatherData(city));
    loadContent(weatherData, isUsUnits);
}