import { openModal } from "./modal.js";
const cards = document.querySelector(".grid");
export function displaySitters(data) {
  cards.innerHTML = ``;
  data.carebuddies.forEach((data) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let skills = document.createElement("h3");
    let type = document.createElement("h3");
    let phone = document.createElement("h3");
    let pic = document.createElement("img");
    name.innerHTML = `<bold>${data.name}</bold>`;
    console.log(`${data.name}}`);
    type.innerHTML = `Type: ${data.Type}`;
    skills.innerHTML = `Skills: ${data.skills}`;
    phone.innerHTML = `${data.phone}`;
    pic.setAttribute("src", data.image);
    pic.setAttribute("alt", `pic of ${data.name}`);
    pic.setAttribute("loading", "lazy");
    pic.setAttribute("width", "340");
    pic.setAttribute("height", "440");
    pic.className = "pic";
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(phone);
    card.appendChild(skills);
    card.appendChild(pic);
    card.addEventListener("click", () => openModal(data));
    cards.appendChild(card);
  });
}
