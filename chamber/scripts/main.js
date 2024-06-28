const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const today = new Date();
const currentYear = today.getFullYear();
year.textContent = currentYear;
const LastModifiedDate = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);
lastModified.innerHTML = `<h4>Updated : ${formattedDate}</h4>`;
// hamburger btn
const hamBurgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");
hamBurgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamBurgerElement.classList.toggle("open");
});
// WEATHER API PART
// select HTML elements in the document
const currentTemp = document.querySelector(".current-temp");
const weatherIcon = document.querySelector(".weather-icon");
const description = document.querySelector(".description");
const currentLocation = document.querySelector(".current-location");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const wind = document.querySelector(".wind");
let lat = 6.41;
let lon = 2.89;
// 6.415
let apiKey = "c4e920fb56bf3504b04364c64c177fb7";
// 2.89
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp}°C`;
  const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const cloud = `images/animated/cloudy.svg`;
  const rain = `images/animated/rainy-3.svg`;
  let alt = data.weather[0].description;
  const clear = `images/animated/day.svg`;
  if (data.weather[0].main === "Clouds") {
    weatherIcon.setAttribute("src", cloud);
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.setAttribute("src", clear);
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.setAttribute("src", rain);
  } else {
    weatherIcon.setAttribute("src", iconSRC);
  }

  weatherIcon.setAttribute("alt", alt);
  description.textContent = `${alt}`;
  currentLocation.textContent = `${data.name}`;
  high.textContent = `${Math.round(data.main.temp_max)}°C`;
  low.textContent = `${Math.round(data.main.temp_min)}°C`;
  humidity.textContent = `${data.main.humidity}`;
  wind.textContent = `${data.wind.speed}`;
  // TO GET SUNRISE & SUNSET DATES
  const sunriseTimestamp = `${data.sys.sunrise}`;
  const sunsetTimestamp = `${data.sys.sunset}`;
  // convert secs to milli secs
  const sunriseDate = new Date(sunriseTimestamp * 1000);
  const time = sunriseDate.toLocaleTimeString();
  console.log(time);
  sunrise.innerHTML = time;
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const setTime = sunsetDate.toLocaleTimeString();
  sunset.innerHTML = setTime;
}
