

export default function loadContent (weatherData) {
    const condition = document.getElementById("condition");
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const low = document.getElementById("low");
    const high = document.getElementById("high");
    const wind = document.getElementById("wind");
    const humidity = document.getElementById("humidity");

    condition.textContent = weatherData.condition.toUpperCase();
    cityName.textContent = weatherData.location.toUpperCase();
    temp.textContent = weatherData.temp + "°";
    low.textContent = weatherData.low + "°";
    high.textContent = weatherData.high + "°";
    wind.textContent = weatherData.wind + " MPH";
    humidity.textContent = weatherData.humidity + "%";
}