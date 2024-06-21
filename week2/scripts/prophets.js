const url =
  "https:brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const all = document.getElementById("all");
const idaho = document.getElementById("idaho");
const nonUs = document.getElementById("non-us");
const old = document.getElementById("old");
const children = document.getElementById("children");
const service = document.getElementById("service");
const cards = document.querySelector("#cards");

const filterProphets = async (filter = "all") => {
  let prophets = await getProphetData(url);
  console.table(prophets);
  switch (filter) {
    case "idaho":
      prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
      break;
    case "nonUs":
      prophets = prophets.filter((prophet) => prophet.birthplace === "England");
      break;
    case "service":
      prophets = prophets.filter((prophet) => prophet.lenght >= 15);
      break;
    case "old":
      prophets = prophets.filter((prophet) =>
      getAgeInYears(prophet.birthdate, prophet.deathdate) >= 95
      );
      break;
    case "children":
      prophets = prophets.filter((prophet) => prophet.numofchildren >= 4);
      break;
    default:
      break;
  }
  displayProphets(prophets);
};
async function getProphetData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.prophets;
  }
}
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
all.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("all");
  all.classList.add("active");
});

idaho.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("idaho");
  idaho.classList.add("active");
});

nonUs.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("nonUs");
  nonUs.classList.add("active");
});


children.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("children");
  children.classList.add("active");
});

old.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("children");
  old.classList.add("active");
});

service.addEventListener("click", () => {
  clearButtonClasses();
  filterProphets("service");
  service.classList.add("active");
});

function getAgeInYears(birthdate, deathdate) {
  let birth = new Date(birthdate);
  let death = new Date(deathdate);
  if (deathdate === null) {
    death = new Date();
  }
  return Math.floor((death - birth) / (365 * 24 * 3600 * 1000));
}

function clearButtonClasses() {
  filterbuttons = document.querySelectorAll("button");
  filterbuttons.forEach((button) => (button.className = ""));
}
filterProphets(url);
