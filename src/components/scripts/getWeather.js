import displayWeatherInfo from './displayWeatherInfo.js';

const apiKey = '8a227b6cb926c6a88967c261a7dca101';

async function cityCoordinatesFetch(city) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${apiKey}`
    );
    const cityNameData = await response.json();
    console.log(cityNameData);
    const [lat, lon] = [cityNameData[0].lat, cityNameData[0].lon];
    return [lat, lon];
}

async function getWeather(city) {
    const waitForCityCoordinates = await cityCoordinatesFetch(city);
    const [lat, lon] = waitForCityCoordinates;
    console.log(lat, lon);
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeatherInfo(weatherData);
}

export default getWeather;
