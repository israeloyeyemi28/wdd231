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
  });
}
const memberDetails = document.getElementById("membershipDetails");
const np = document.querySelector(".np-member");
const bronze = document.querySelector(".bronze-member");
const silver = document.querySelector(".silver-member");
const gold = document.querySelector(".gold-member");
const closeModal = document.querySelector(".close-btn");
const benefits = document.querySelector(".benefits");
const benefitsTxt = document.querySelector(".benefits-txt");
// np
np.addEventListener("click", (event) => {
  if (event.target.className === "np-member") {
    benefits.innerHTML = `
    <ul>
      <li>Networking Opportunities</li>
      <li>Access to resources and information</li>
      <li>Access to Chamber events and conferences</li>
    </ul>
    <a href="#">Terms and Conditions</a>
    `;
    benefitsTxt.textContent = `Non Profits Benefits`;
    memberDetails.showModal();
    closeModal.addEventListener("click", function () {
      memberDetails.close();
    });
  }
});
// bronze
bronze.addEventListener("click", (event) => {
  if (event.target.className === "bronze-member") {
    benefits.innerHTML = `
    <ul>
      <li>Listing Chamber's online directory</li>
      <li>Subscription to newsletter</li>
      <li>Access to Chamber events and conferences, and networking opportunities</li>
    </ul>
    <a  href="#">Terms and Conditions</a>
    `;
    benefitsTxt.textContent = `Bronze Benefits`;
    benefits.style = "color:#fff;";
    memberDetails.showModal();
    closeModal.addEventListener("click", function () {
      memberDetails.close();
    });
  }
});
// silver
silver.addEventListener("click", (event) => {
  if (event.target.className === "silver-member") {
    benefits.innerHTML = `
    <ul>
      <li>All Bronze Benefits</li>
      <li>Enhanced Listing in the online directory with logo and description</li>
      <li>Priority registration for Chamber events</li>
      <li>Discounts on chamber programs and services</li>
      <li>Limited ads in Chamber publications</li>
    </ul>
    <a href="#">Terms and Conditions</a>
    `;
    benefitsTxt.textContent = `Silver Benefits`;
    memberDetails.showModal();
    closeModal.addEventListener("click", function () {
      memberDetails.close();
    });
  }
});
// gold
gold.addEventListener("click", (event) => {
  if (event.target.className === "gold-member") {
    benefits.innerHTML = `
    <ul>
      <li>All Silver Benefits</li>
      <li>Prominient listing in the online directory with features placement</li>
      <li>Complimentary ticketsto Chamber events and conferences</li>
      <li>Discounts on chamber programs and services</li>
      <li>Access to exclusive Gold-only events and networking opportunities</li>
      <li>Free advertising in chamber publications and website</li>
      <li>Personalized business consulting and advocacy</li>
    </ul>
    <a href="#">Terms and Conditions</a>
    `;
    benefitsTxt.textContent = `Silver Benefits`;
    memberDetails.showModal();
    closeModal.addEventListener("click", function () {
      memberDetails.close();
    });
  }
});

