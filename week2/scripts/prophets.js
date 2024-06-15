const url =
  "https:brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");
//display prophets on cards
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

function displayProphets(prophets) {
  cards.innerHTML = ``;
  prophets.forEach((prophet) => {
    let card = document.createElement("section");

    let fullName = document.createElement("h1");
    let portrait = document.createElement("img");
    let details = document.createElement("h3");
    let place = document.createElement("h3");
    let childrenNo = document.createElement("h3");
    let order = document.createElement("h3");
    let length = document.createElement("h3");
    fullName.innerHTML = ` <bold>${prophet.name} ${prophet.lastname}</bold>`;
    console.log(`${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day president`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    details.innerHTML = `Birth: ${prophet.birthdate}
    `;
    place.innerHTML = `Place: ${prophet.birthplace}`;
    childrenNo.innerHTML = `Children: ${prophet.numofchildren}`;
    length.innerHTML = `Prophet Years: ${prophet.length}`;
    order.innerHTML = `Order: ${prophet.order}`;
    //append the card woth the elements
    card.appendChild(fullName);
    card.appendChild(details);
    card.appendChild(place);
    card.appendChild(childrenNo);
    card.appendChild(length);
    card.appendChild(order);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}
const all = document.getElementById("all");
const utah = document.getElementById("utah");
const nonUs = document.getElementById("non-us");
const years = document.getElementById("years");
const children = document.getElementById("children");
const service = document.getElementById("service");

switch (filter) {
  case "utah":
    prophets = prophets.filter((prophet) => prophet.birthplace === "idaho");
    break;
  case "nonUs":
    prophets = prophets.filter((prophet) => prophet.birthplace === "England");
    break;
  case "years":
    prophets = prophets.filter((prophet) => prophet.lenght >= 15);
    break;
  case "children":
    prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
    break;
  default:
    break;
}

// buttons
all.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("all");
  all.classList.add("active");
});

utah.addEventListener("click", () => {
  clearButtonClasses();
  prophets = prophets.filter((prophet) => prophet.birthplace === "idaho");
  displayProphets("prophets");
  idaho.classList.add("active");
});

nonUs.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("prophets");
  nonUs.classList.add("active");
});

years.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("years");
  ten.classList.add("active");
});

children.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("children");
  childs.classList.add("active");
});

function clearButtonClasses() {
  filterbuttons = document.querySelectorAll("button");
  filterbuttons.forEach((button) => (button.className = ""));
}
