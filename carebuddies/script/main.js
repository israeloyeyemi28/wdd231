// hamburger btn
const hamBurgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");
hamBurgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamBurgerElement.classList.toggle("open");
});
const cards = document.querySelector(".grid");
import updatePageVisitsCount from "../script/pageCount.js";
import { fetchSitters } from "../script/api.js";
const url = "./data/carebuddies.json";
fetchSitters(url);
updatePageVisitsCount();