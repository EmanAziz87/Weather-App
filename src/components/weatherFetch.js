import cityCoordinatesFetch from './cityCoordinatesFetch';
const apiKey = '8a227b6cb926c6a88967c261a7dca101';

async function getWeather() {
    const waitForCityCoordinates = await cityCoordinatesFetch();
    const [lat, lon] = waitForCityCoordinates;
    console.log(waitForCityCoordinates);
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
}

export default getWeather;
