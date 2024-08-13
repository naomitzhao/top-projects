// make an API request and either return the data or -1
export async function fetchWeatherData (location) {
    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?&unitGroup=metric&key=6UTUVYRGLDSL6P35F4U5XZGTD`)
        .then(function (response) {
            return response.json();
        }).catch(() => {
            return -1;
        });
    return weatherData;
}

// make an object with the relevant fields of the data JSON
export function processWeatherData (data) {
    return(
        {
            condition: data.currentConditions.conditions, 
            location: data.resolvedAddress, 
            temp: data.currentConditions.temp, 
            low: data.days[0].tempmin, 
            high: data.days[0].tempmax, 
            wind: data.currentConditions.windspeed,
            humidity: data.currentConditions.humidity
        }
    );
}