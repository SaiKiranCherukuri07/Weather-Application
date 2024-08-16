//Adding event listener when page is reloaded
window.addEventListener("load", userLocation);

//setInterval method to load time for every second
setInterval(timeAndDate, 1000);


//Setting Time and Date

  function timeAndDate (){
  let dateTimeNow = document.querySelector(".currentTime");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];

  const dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  let month = months[dateTime.getMonth()];
  let day = days[dateTime.getDay()];
  let date = dateTime.getDate();
  dateTimeNow.innerHTML = `<strong>${day} ${date} ${month}, ${time}</strong>`;
}


//Enter your valid weather API 
const apiKey = ""; //API KEY 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-Btn");

const weatherIcon = document.querySelector(".weather-img");
const weatherImage = document.getElementsByTagName('body')[0];
const cardImage = document.querySelector(".card");


//Function for User Live Location

function userLocation() {
  //alert("Allow access your location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationLive.innerHTML = "Browser doesn't support";
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiURL = "http://api.openweathermap.org/data/2.5/weather?units=metric";

  async function liveWeather() {
    let weather = await fetch(
      apiURL + `&lat=${lat}&lon=${lon}` + `&appid=${apiKey}`
    );
    let data = await weather.json();
    console.log(data);

    if (weather.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        weatherImage.style.backgroundImage = 'url("images/Cloudy.png")';
        cardImage.style.backgroundImage = "url('images/Cloudy.png')";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        weatherImage.style.backgroundImage = 'url("images/Rain3.png")';
        cardImage.style.backgroundImage = 'url("images/Rain3.png")';
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        weatherImage.style.backgroundImage = 'url("images/Drizzle3.png")';
        cardImage.style.backgroundImage = 'url("images/Drizzle3.png")';
      } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        weatherImage.style.backgroundImage = 'url("images/Snow2.png")';
        cardImage.style.backgroundImage = 'url("images/Snow2.png")';
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        weatherImage.style.backgroundImage = 'url("images/Mist1.png")';
        cardImage.style.backgroundImage = 'url("images/Mist1.png")';
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        weatherImage.style.backgroundImage = 'url("images/Sunny.png")';
        cardImage.style.backgroundImage = 'url("images/Sunny.png")';
      } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/haze.png";
        weatherImage.style.backgroundImage = 'url("images/Haze3.png")';
        cardImage.style.backgroundImage = 'url("images/Haze3.png")';
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  liveWeather();
}


//Function for weather when a city is searched

async function checkWeather(city) {
  const apiURL =
    "http://api.openweathermap.org/data/2.5/weather?units=metric&lat={lat}&lon={lon}&q=";
  const weatherApp = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await weatherApp.json();
  console.log(data);

  if (weatherApp.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      weatherImage.style.backgroundImage = 'url("images/Cloudy.png")';
      cardImage.style.backgroundImage = "url('images/Cloudy.png')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      weatherImage.style.backgroundImage = 'url("images/Rain2.png")';
      cardImage.style.backgroundImage = 'url("images/Rain2.png")';
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      weatherImage.style.backgroundImage = 'url("images/Drizzle3.png")';
      cardImage.style.backgroundImage = 'url("images/Drizzle3.png")';
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
      weatherImage.style.backgroundImage = 'url("images/Snow2.png")';
      cardImage.style.backgroundImage = 'url("images/Snow2.png")';
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      weatherImage.style.backgroundImage = 'url("images/Mist1.png")';
      cardImage.style.backgroundImage = 'url("images/Mist1.png")';
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      weatherImage.style.backgroundImage = 'url("images/Sunny.png")';
      cardImage.style.backgroundImage = 'url("images/Sunny.png")';
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
      weatherImage.style.backgroundImage = 'url("images/Haze3.png")';
      cardImage.style.backgroundImage = 'url("images/Haze3.png")';
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  
}
searchBtn.addEventListener("click", () => {
  if (searchBox.value == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    checkWeather(searchBox.value);
  }
});
