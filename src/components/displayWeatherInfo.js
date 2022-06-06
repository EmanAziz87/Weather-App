const weatherInfoContainer = document.createElement('div');

function displayWeatherInfo(weatherData) {
    const mainContainer = document.querySelector('.container');

    while (weatherInfoContainer.firstChild) {
        weatherInfoContainer.replaceChildren();
    }

    const currentTemp = document.createElement('div');
    const feelsLikeTemp = document.createElement('div');
    const humidity = document.createElement('div');
    const country = document.createElement('div');
    const windSpeed = document.createElement('div');
    const weatherDescription = document.createElement('div');
    const weatherImageIcon = document.createElement('img');

    currentTemp.innerHTML = weatherData.main.temp;
    feelsLikeTemp.innerHTML = `Feels Like: ${weatherData.main.feels_like}`;
    humidity.innerHTML = `Humidity Levels: ${weatherData.main.humidity}%`;
    country.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    windSpeed.innerHTML = `Wind: ${weatherData.wind.speed}m/s`;
    weatherDescription.innerHTML = weatherData.weather[0].description;
    weatherImageIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    mainContainer.appendChild(weatherInfoContainer);

    weatherInfoContainer.appendChild(currentTemp);
    weatherInfoContainer.appendChild(feelsLikeTemp);
    weatherInfoContainer.appendChild(humidity);
    weatherInfoContainer.appendChild(country);
    weatherInfoContainer.appendChild(windSpeed);
    weatherInfoContainer.appendChild(weatherDescription);
    weatherInfoContainer.appendChild(weatherImageIcon);
}

export default displayWeatherInfo;
