const apiKey = '8a227b6cb926c6a88967c261a7dca101';
const city = 'Toronto';

async function cityCoordinatesFetch() {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const cityNameData = await response.json();
    const [lat, long] = [cityNameData[0].lat, cityNameData[0].lon];

    return [lat, long];
}

export default cityCoordinatesFetch;
