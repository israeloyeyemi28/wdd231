import { temples } from "../data/temples.js";
console.log(temples);
import { url } from "../data/temples.js";
console.log(url);

const showHere = document.querySelector("#showHere");

function displayItems(data) {
  data.forEach((temple) => {
    console.log(temple);
    const photo = document.createElement("img");
    photo.src = `${url}${temple.path}`;
    photo.alt = temple.name;
    photo.addEventListener("click", () => {
      console.log("Image Clicked");
      showStuff(temple);
    });
    showHere.appendChild(photo);
  });
}
displayItems(temples);

const myDialog = document.querySelector("#mydialog");
const myTitle = document.querySelector("#title");
const myClose = document.querySelector("#button");
const myInfo = document.querySelector("#my-info");
myClose.addEventListener("click", () => myDialog.close());
function showStuff(temple) {
  myTitle.innerHTML = temple.name;
  console.log(myTitle);
  myInfo.innerHTML = `Dedicated on: ${temple.dedicated} by${temple.person}`;
  console.log(myInfo);
  myDialog.showModal();
}
