// hamburger btn
const hamBurgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");
hamBurgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamBurgerElement.classList.toggle("open");
});
// scroll effect
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// const hiddenElements = document.querySelector(".div");
// hiddenElements.forEach((el) => observer.observe(el));

const cards = document.querySelector(".grid");
import updatePageVisitsCount from "../script/pageCount.js";
import { fetchSitters } from "../script/api.js";
const url = "./data/carebuddies.json";
fetchSitters(url);
updatePageVisitsCount();