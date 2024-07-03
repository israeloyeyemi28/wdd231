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
lastModified.innerHTML = `<p>Updated : ${formattedDate}</p>`;
// hamburger btn
const hamBurgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");
hamBurgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamBurgerElement.classList.toggle("open");
});

//Member logos
const cards = document.getElementById("business");
const fileName = "data/members.json";
// FETCH MEMBERS
async function fetchMemebers() {
  const response = await fetch(fileName);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.members);
    console.table(data);
  }
}
fetchMemebers();
//dislay icons function &  it
function displaySpotlights(members) {
  const spotlights = members.filter(
    (member) =>
      member.membershipLevel === "gold" || member.membershipLevel === "silver"
  );
  const randomSpotlights = shuffleArray(spotlights);
  let logoNum = 4;
  displayMembers(randomSpotlights.slice(0, logoNum));
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function displayMembers(members) {
  members.forEach((member) => {
    let link = document.createElement("a");
    // let logo = document.createElement("img")
    link.innerHTML = `<p class = "linkTxt">Link: <a style="text-decoration: underline">${member.website}</a>`;
    link.className = "logoLink";
    let image = document.createElement("img");
    image.className = "random-logo";
    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Image Of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "300");
    image.setAttribute("height", "350");
    cards.appendChild(image);
    cards.appendChild(link);
    // membershipLabel.addEventListener("click", () => {
    //   displayModal(course);
    // });
  });
}
// Join html part
