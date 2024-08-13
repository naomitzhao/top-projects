

export async function fetchWeatherData (location) {
    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=6UTUVYRGLDSL6P35F4U5XZGTD`)
        .then(function (response) {
            return response.json();
        }).catch(function (err) {
            console.log(err);
        });

    return weatherData;
}

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