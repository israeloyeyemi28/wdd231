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

// const cards = document.querySelector(".grid");
// const url = "./data/carebuddies.json";

const cards = document.querySelector(".grid");
import updatePageVisitsCount from "../script/pageCount.js";
import { fetchSitters } from "../script/api.js";
const url = "./data/carebuddies.json";
fetchSitters(url);
updatePageVisitsCount();

// async function getSitters(url) {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     let sitters = data.carebuddies;
//     console.table(sitters);
//     return sitters;
//   }
// }
// getSitters(url);
// // displaySitters(sitters);

// // async function filterSitters(filter = "all") {
// //   let sitters = await getSitters(url);
// //   switch (filter) {
// //     case "infant":
// //       sitters = sitters.filter((sitter) => sitter.Type === "Infants");
// //       break;
// //     case "todd":
// //       sitters = sitters.filter((sitter) => sitter.Type === "Todd");
// //       break;
// //     case "adult":
// //       sitters = sitters.filter((sitter) => sitter.Type === "Elders");
// //       break;
// //     default:
// //       break;
// //   }
// //   displaySitters(sitters);
// // }

// // all.addEventListener("click", () => {
// //   let sitters =  getSitters(url);
// // });

//   displaySitters(sitters);
// function displaySitters(sitters) {
//   cards.innerHTML = ``;
//   sitters.forEach((sitter) => {
//     let card = document.createElement("section");
//     let name = document.createElement("h3");
//     let skills = document.createElement("h3");
//     let type = document.createElement("h3");
//     let phone = document.createElement("h3");
//     let pic = document.createElement("img");
//     name.innerHTML = `<bold>${sitter.name}</bold>`;
//     console.log(`${sitter.name}}`);
//     type.innerHTML = `Type: ${sitter.Type}`;
//     skills.innerHTML = `Skills: ${sitter.skills}`;
//     phone.innerHTML = `${sitter.phone}`;
//     pic.setAttribute("src", sitter.image);
//     pic.setAttribute("alt", `pic of ${sitter.name}`);
//     pic.setAttribute("loading", "lazy");
//     pic.setAttribute("width", "340");
//     pic.setAttribute("height", "440");
//     pic.className = "pic";
//     card.appendChild(name);
//     card.appendChild(type);
//     card.appendChild(phone);
//     card.appendChild(skills);
//     card.appendChild(pic);
//     cards.appendChild(card);
//   });
// }
