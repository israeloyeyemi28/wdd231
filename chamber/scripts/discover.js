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

// Page Visit COunter
function updatePageVisitsCount() {
  const msToDays = 84600000;
  let lastVisit = window.localStorage.getItem("numDiscoverPage");
  const visitsDisplay = document.querySelector("#visits");
  // Calculate time difference
  let currentTime = new Date();
  let previousVisit = new Date(lastVisit);
  let timeDifference = currentTime.getTime() - previousVisit.getTime();
  let daysDifference = timeDifference / msToDays;
  console.log(daysDifference)
  if (lastVisit != null) {
    if (daysDifference > 0 && daysDifference < 1) {
      visitsDisplay.textContent = `Back So Soon! Awesome!`;
    } else if (Math.floor(daysDifference) === 1) {
      visitsDisplay.textContent = `You Last Visited ${Math.floor(
        daysDifference
      )} Days Ago`;
      console.log(daysDifference)
    }
  } else {
    visitsDisplay.textContent = `Welcome! Let Us Know If You Have Any Questions.`;
  }
  localStorage.setItem("numDiscoverPage", new Date());
}
updatePageVisitsCount();

// testPageVisit();
