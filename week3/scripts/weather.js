// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
let lat = 49.7;
let apiKey = "c4e920fb56bf3504b04364c64c177fb7";
let lon = 6.64;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
console.log("HEllo");
async function apiFetch() {
  try {
    const response = await fetch(url);
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
// 2026cc9883490e04a8412142d4da0c5d
// c4e920fb56bf3504b04364c64c177fb7
// ("https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&units=metric&appid={apiKey}");

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp}°C`;
  const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let alt = data.weather[0].description;
  weatherIcon.setAttribute('src', iconSRC);
  weatherIcon.setAttribute('alt', alt);
  captionDesc.textContent = `${alt}`
}
