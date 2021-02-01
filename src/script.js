function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let feelElement = document.querySelector("#feel");
    feelElement.innerHTML = Math.round(response.data.main.feels_like);

}

let apiKey = "aef208e4266d921b0a65e7200cab5d80";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;
let units = "metric";

axios.get(apiUrl).then(displayTemperature);