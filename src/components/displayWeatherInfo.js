const weatherInfoContainer = document.createElement('div');
weatherInfoContainer.classList.add('weather-info-container');

function displayWeatherInfo(weatherData) {
    const mainContainer = document.querySelector('.container');

    weatherInfoContainer.replaceChildren();
    mainContainer.appendChild(weatherInfoContainer);

    addWeatherInfoItem(weatherData.main.temp, 'main-temp');
    addWeatherInfoItem(
        `Feels Like: ${weatherData.main.feels_like}`,
        'feels-like-temp'
    );
    addWeatherInfoItem(
        `Humidity Levels: ${weatherData.main.humidity}%`,
        'humidity-value'
    );
    addWeatherInfoItem(
        `${weatherData.name}, ${weatherData.sys.country}`,
        'location-info'
    );
    addWeatherInfoItem(`Wind: ${weatherData.wind.speed}m/s`, 'wind-speed');
    addWeatherInfoItem(
        weatherData.weather[0].description,
        'weather-description'
    );
    const weatherImageIcon = document.createElement('img');
    weatherImageIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherImageIcon.classList.add('weather-icon');
    weatherInfoContainer.appendChild(weatherImageIcon);

    function addWeatherInfoItem(contents, className) {
        const div = document.createElement('div');
        div.textContent = contents;
        div.classList.add(className);
        weatherInfoContainer.appendChild(div);
    }
}

export default displayWeatherInfo;
