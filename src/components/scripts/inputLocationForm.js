import getWeather from './getWeather.js';

function inputLocationForm() {
    const mainContainer = document.querySelector('.container');

    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.classList.add('search-bar');
    userInput.placeholder = 'Toronto, CA';

    const searchButton = document.createElement('input');
    searchButton.setAttribute('type', 'submit');
    searchButton.classList.add('submit-button');

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchContainer.appendChild(userInput);
    searchContainer.appendChild(searchButton);

    mainContainer.appendChild(searchContainer);

    getWeather('Burlington, CA');

    searchButton.addEventListener('click', () => {
        getWeather(userInput.value).catch((error) => {
            console.log(error);
        });
    });
}

export default inputLocationForm;
