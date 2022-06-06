import displayWeatherInfo from './displayWeatherInfo.js';

const apiKey = '8a227b6cb926c6a88967c261a7dca101';

async function cityCoordinatesFetch(city) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const cityNameData = await response.json();
    const [lat, long] = [cityNameData[0].lat, cityNameData[0].lon];
    return [lat, long];
}

async function getWeather(city) {
    const waitForCityCoordinates = await cityCoordinatesFetch(city);
    const [lat, lon] = waitForCityCoordinates;
    console.log(waitForCityCoordinates);
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const weatherData = await response.json();
    displayWeatherInfo(weatherData);
    console.log(weatherData);
}

export default getWeather;
