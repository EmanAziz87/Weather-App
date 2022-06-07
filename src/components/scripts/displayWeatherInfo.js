const weatherInfoContainer = document.createElement('div');
weatherInfoContainer.classList.add('weather-info-container');

function displayWeatherInfo(weatherData) {
    const mainContainer = document.querySelector('.container');

    weatherInfoContainer.replaceChildren();
    mainContainer.appendChild(weatherInfoContainer);

    const weatherImageIcon = document.createElement('img');
    weatherImageIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherImageIcon.classList.add('weather-icon');
    weatherInfoContainer.appendChild(weatherImageIcon);

    addWeatherInfoItem(`${Math.round(weatherData.main.temp)}°C`, 'main-temp');
    addWeatherInfoItem(
        `${weatherData.name}, ${weatherData.sys.country}`,
        'location-info'
    );
    addWeatherInfoItem(
        weatherData.weather[0].description,
        'weather-description'
    );
    addWeatherInfoItem(
        `Feels Like: ${Math.round(weatherData.main.feels_like)}°C`,
        'feels-like-temp'
    );
    addWeatherInfoItem(
        `Humidity Levels: ${weatherData.main.humidity}%`,
        'humidity-value'
    );
    addWeatherInfoItem(`Wind: ${weatherData.wind.speed}m/s`, 'wind-speed');

    function addWeatherInfoItem(contents, className) {
        const div = document.createElement('div');
        div.textContent = contents;
        div.classList.add('weather-info', className);
        weatherInfoContainer.appendChild(div);
    }
}

export default displayWeatherInfo;
