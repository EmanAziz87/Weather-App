import displayWeatherInfo from './displayWeatherInfo.js';

const apiKey = '8a227b6cb926c6a88967c261a7dca101';

async function getWeather(city) {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const weatherData = await response.json();
    displayWeatherInfo(weatherData);
}

export default getWeather;
