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
lastModified.innerHTML = `<h4>Updated : ${formattedDate}</h4>`;
// hamburger btn
const hamBurgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");
hamBurgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamBurgerElement.classList.toggle("open");
});
const cards = document.getElementById("cards");
const gridView = document.querySelector("#gridView");
const listView = document.querySelector("#listView");
const url = "./data/members.json";
async function fetchMemebers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const members = data.members;
    return members;
  } catch (error) {
    console.error("Error Fetching Members", error);
  }
}
function displayMembers(members, viewType) {
  cards.innerHTML = "";
  cards.className = viewType;
  members.forEach((member) => {
    let card = document.createElement("section");
    card.classList.add("card");
    let company = document.createElement("h3");
    company.innerHTML = `${member.company}`;
    let image = document.createElement("img");
    image.className = "card-logo";
    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Image Of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "340");
    image.setAttribute("height", "440");
    let phone = document.createElement("h3");
    phone.innerHTML = `${member.phone}`;
    let website = document.createElement("h4");
    website.innerHTML = `Link: <a>${member.website}</a>`;
    let address = document.createElement("h3");
    address.innerHTML = `${member.address}`;
    card.appendChild(image);
    card.appendChild(company);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cards.appendChild(card);
  });
}
async function handleViewChange(viewType) {
  const members = await fetchMemebers();
  displayMembers(members, viewType);
}
gridView.addEventListener("click", () => {
  handleViewChange("grid");
});
listView.addEventListener("click", () => {
  handleViewChange("list");
});
fetchMemebers();
handleViewChange("grid");