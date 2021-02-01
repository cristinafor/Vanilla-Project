function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    console.log(response.data);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "aef208e4266d921b0a65e7200cab5d80";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;
let units = "metric";

axios.get(apiUrl).then(displayTemperature);