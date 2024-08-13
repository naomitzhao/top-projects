import "./indexStyles.css";
import StarrySky from "./assets/starry_sky.jpg";

import loadInfo from "./footer.js";
import loadSearch from "./header.js";
import loadContent from "./content.js";
import { fetchWeatherData, processWeatherData } from "./weatherData.js";


// console.log("hello world!");
const body = document.querySelector("body");
body.style.background = "url(" + StarrySky + ") 100% / cover no-repeat";

const weatherData = processWeatherData(await fetchWeatherData("san francisco"));
loadContent(weatherData);
loadSearch();
loadInfo();
