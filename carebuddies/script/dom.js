import { openModal } from "./modal.js";
const cards = document.querySelector(".grid");
export function displaySitters(data) {
  cards.innerHTML = ``;
  data.carebuddies.forEach((data) => {
    // let select = document.getElementById("sitter-name");
    console.table(data["dominant-color"], data["color"], data.skills);
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let div = document.createElement("div");
    div.className = "div";
    let type = document.createElement("h4");
    let phone = document.createElement("h4");
    let pic = document.createElement("img");
    let details = document.createElement("button");
    // let option = document.createElement("option");
    details.className = "more";
    name.innerHTML = `<bold>${data.name}</bold>`;
    type.innerHTML = `Type: ${data.Type}`;
    // console.table(data.skills);
    phone.innerHTML = `${data.phone}`;
    pic.setAttribute("src", data.image);
    pic.setAttribute("alt", `pic of ${data.name}`);
    pic.setAttribute("loading", "lazy");
    pic.setAttribute("width", "340");
    pic.setAttribute("height", "440");
    pic.setAttribute("border-radius", "15px");
    pic.className = "pic";
    card.style.backgroundColor = `${data["dominant-color"]}`;
    card.style.color = `${data["color"]}`;
    if (data["dominant-color" == "#4D4844"]) {
      card.style.color = "#fff";
    }
    details.innerHTML = `Pick Sitter`;
    details.style.width = "50%";
    details.style.padding = "10px";
    details.style.margin = "0 auto";
    //display the selct options
    // option.textContent = data.name;
    // option.value = data.name;
    // console.log(option.value);
    // select.append(option)
    // select.appendChild(option);
    // console.log(select);
    div.appendChild(pic);
    div.appendChild(name);
    div.appendChild(type);
    div.appendChild(phone);
    div.appendChild(details);
    card.appendChild(pic);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(phone);
    card.appendChild(details);
    card.appendChild(div);
    // card.appendChild(option);
    card.addEventListener("click", () => openModal(data));
    cards.appendChild(card);
  });
}
