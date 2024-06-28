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
lastModified.innerHTML = `<p>Updated : ${formattedDate}</p>`;
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
const forecastDiv = document.getElementById("forecast");
let lat = 6.41;
let lon = 2.89;
// 6.415
let apiKey = "c4e920fb56bf3504b04364c64c177fb7";
// let forecastKey = "d02d603052c5fe03cb030b6ee2a49c00";
// 2.89
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
async function apiFetch(url, displayFunction) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayFunction(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
// apiFetch();

function displayResults(data) {
  currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
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
  sunrise.innerHTML = time;
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const setTime = sunsetDate.toLocaleTimeString();
  sunset.innerHTML = setTime;
  // console.log(data);
}

function displayForecast(data) {
  // console.table(data);
  const todayTemp = document.createElement("p");
  const tomorrowTemp = document.createElement("p");
  const nextTemp = document.createElement("p");
  const tomorrow = new Date(data.list[8].dt_txt);
  const nextDay = new Date(data.list[16].dt_txt);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  todayTemp.innerHTML = `<strong>Today</strong>: ${Math.round(
    data.list[0].main.temp
  )}°C`;
  tomorrowTemp.innerHTML = `${days[tomorrow.getDay()]}: <strong>${Math.round(
    data.list[8].main.temp
  )}°C</strong>`;
  nextTemp.innerHTML = `${days[nextDay.getDay()]}:<strong>${Math.round(
    data.list[16].main.temp
  )}°C</strong>`;
  forecastDiv.appendChild(todayTemp);
  forecastDiv.appendChild(tomorrowTemp);
  forecastDiv.appendChild(nextTemp);
}
apiFetch(weatherUrl, displayResults);
apiFetch(forecastUrl, displayForecast);

//Member logos
const iconDiv = document.getElementById("loadIcons");
const fileName = "./data/members.json";
async function fetchMemebers() {
  const response = await fetch(fileName);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.members);
  }
}
//dislay icons function
const displaySpotlights = (members) => {
  const spotlights = members.filter(
    (member) =>
      member.mebershipLevel === "gold" || member.memmbershipLevel === "silver"
  );
  const randomIcons = randomIcons(spotlights);
  displayIcons(randomIcons.slice(0, 2));
};
function randomIcons(array) {
  for (let i = array.lenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function displayIcons(members) {
  members.forEach((member) => {
    let logo = document.createElement("a");
    logo.setAttribute("href", member.website);
    logo.innerHTML = `<img src=${member.image} alt="logo for${member.name}"height="100" loading="lazy"`;
    iconDiv.appendChild(logo);
  });
}
fetchMemebers();
