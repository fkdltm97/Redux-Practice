const weather = document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY = "35555b4b65373fab9d9a8df1a950f980";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json();
    }) .then(function(json){
        const temperature = json.main.temp;
        const place  = json.name;
        weather.innerText = `온도 :${temperature}    지역: ${place}`
    })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude ,longitude);
}

function handleGeoError() {
  console.log("Error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //get Weather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init() {
  loadCoords();
}

init();
