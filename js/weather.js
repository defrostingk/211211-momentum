function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.querySelector(
        "#weather .weather__weather-icon"
      );
      const temp = document.querySelector("#weather .weather__temp");
      const weather = document.querySelector("#weather .weather__weather-desc");
      const city = document.querySelector("#weather .weather__city");
      weatherIcon.innerHTML = '<i class="fas fa-cloud fa-lg"></i>';
      temp.innerHTML = `${parseInt(data.main.temp)}&#8451;`;
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
