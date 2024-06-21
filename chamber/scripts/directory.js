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
lastModified.innerHTML = `<h4>Last Updated : ${formattedDate}</h4>`;
const hamButton = document.getElementById("menu");
const nav = document.querySelector("#animateme");
hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
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
    console.table(members);
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
    let name = document.createElement("h2");
    name.className = "name";
    name.innerHTML = `${member.name}`;
    let company = document.createElement("h3");
    company.innerHTML = `${member.company}`;
    let image = document.createElement("img");
    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Image Of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "340");
    image.setAttribute("height", "440");
    let phone = document.createElement("h3");
    phone.innerHTML = `${member.phone}`;
    let industry = document.createElement("h3");
    industry.innerHTML = `${member.industry}`;
    let website = document.createElement("h4");
    website.innerHTML = `Link: <a>${member.website}</a>`;
    let description = document.createElement("h3");
    description.innerHTML = `${member.description}`;
    let address = document.createElement("h3");
    address.innerHTML = `${member.address}`;
    let MembershipLevel = document.createElement("h3");
    MembershipLevel.style.textTransform = "capitalize";
    MembershipLevel.innerHTML = `${member.membershipLevel}`;
    if (member.membershipLevel === "gold") {
      MembershipLevel.style.color = "yellow";
    } else {
      MembershipLevel.style.color = "silver";
    }
    card.appendChild(name);
    card.appendChild(company);
    card.appendChild(phone);
    card.appendChild(industry);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(MembershipLevel);
    card.appendChild(image);
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
