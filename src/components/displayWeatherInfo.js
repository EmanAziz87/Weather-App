function displayWeatherInfo(weatherData) {
    const mainContainer = document.querySelector('.container');
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

    mainContainer.appendChild(currentTemp);
    mainContainer.appendChild(feelsLikeTemp);
    mainContainer.appendChild(humidity);
    mainContainer.appendChild(country);
    mainContainer.appendChild(windSpeed);
    mainContainer.appendChild(weatherDescription);
    mainContainer.appendChild(weatherImageIcon);
}

export default displayWeatherInfo;
