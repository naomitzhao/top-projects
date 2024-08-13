export default function loadContent (weatherData, isUsUnits = false) {
    const condition = document.getElementById("condition");
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const low = document.getElementById("low");
    const high = document.getElementById("high");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");

    condition.textContent = weatherData.condition.toUpperCase();
    cityName.textContent = weatherData.location.toUpperCase();
    humidity.textContent = Math.round(weatherData.humidity) + "%";

    let tempText = Math.round(weatherData.temp) + "°";
    let lowText = Math.round(weatherData.low) + "°";
    let highText = Math.round(weatherData.high) + "°";
    let windText = Math.round(weatherData.wind) + " KPH";

    if (isUsUnits) {
        tempText = convertToFahrenheit(weatherData.temp) + "°";
        lowText = convertToFahrenheit(weatherData.low) + "°";
        highText = convertToFahrenheit(weatherData.high) + "°";
        windText = convertToMph(weatherData.wind) + " MPH";
    }

    temp.textContent = tempText;
    low.textContent = lowText;
    high.textContent = highText;
    wind.textContent = windText;
}

function convertToFahrenheit (celsius) {
    return Math.round(celsius * 9 / 5 + 32);
}

function convertToMph (kph) {
    return Math.round(kph / 1.609);
}