import getWeather from './getWeather.js';

function inputLocationForm() {
    const mainContainer = document.querySelector('.container');

    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.classList.add('search-bar');

    const searchButton = document.createElement('input');
    searchButton.setAttribute('type', 'submit');
    searchButton.classList.add('submit-button');

    mainContainer.appendChild(userInput);
    mainContainer.appendChild(searchButton);

    getWeather('Toronto');

    searchButton.addEventListener('click', () => {
        getWeather(userInput.value).catch((error) => {
            console.log(error);
        });
    });
}

export default inputLocationForm;
