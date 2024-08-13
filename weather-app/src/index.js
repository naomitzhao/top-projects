import "./indexStyles.css";
import StarrySky from "./assets/starry_sky.jpg";

import loadInfo from "./footer.js";
import { loadUnitSwitch, loadSearch } from "./header.js";
import loadContent from "./content.js";
import { fetchWeatherData, processWeatherData } from "./weatherData.js";

let isUsUnits = false;

// console.log("hello world!");
const body = document.querySelector("body");
body.style.background = "url(" + StarrySky + ") 100% / cover no-repeat";

let weatherData = null;
searchCity("san francisco");
loadSearch(searchCity);
loadUnitSwitch(switchUnits);
loadInfo();


function switchUnits () {
    isUsUnits = !isUsUnits;
    loadContent(weatherData, isUsUnits);
}

async function searchCity (city) {
    weatherData = processWeatherData(await fetchWeatherData(city));
    loadContent(weatherData, isUsUnits);
}