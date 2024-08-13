// load the main content (display of weather data) with formatting
// given weather data and whether the current units are US units.
export default function loadContent (weatherData, isUsUnits = false) {
    // put fields of weatherData into variables
    const condition = document.getElementById("condition");
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const low = document.getElementById("low");
    const high = document.getElementById("high");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");

    // load condition, city name, and humidity
    condition.textContent = weatherData.condition.toUpperCase();
    cityName.textContent = weatherData.location.toUpperCase();
    humidity.textContent = Math.round(weatherData.humidity) + "%";

    // format temperatures and wind in metric by default
    let tempText = Math.round(weatherData.temp) + "°";
    let lowText = Math.round(weatherData.low) + "°";
    let highText = Math.round(weatherData.high) + "°";
    let windText = Math.round(weatherData.wind) + " KPH";

    // if using us units, convert temperatures and wind to F and mph
    if (isUsUnits) {
        tempText = convertToFahrenheit(weatherData.temp) + "°";
        lowText = convertToFahrenheit(weatherData.low) + "°";
        highText = convertToFahrenheit(weatherData.high) + "°";
        windText = convertToMph(weatherData.wind) + " MPH";
    }

    // load temperatures and wind
    temp.textContent = tempText;
    low.textContent = lowText;
    high.textContent = highText;
    wind.textContent = windText;
}

// convert a temperature in celsius to fahrenheit (with rounding)
function convertToFahrenheit (celsius) {
    return Math.round(celsius * 9 / 5 + 32);
}

// convert a speed in kph to mph (with rounding)
function convertToMph (kph) {
    return Math.round(kph / 1.609);
}