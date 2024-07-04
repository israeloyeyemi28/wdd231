// GET USER DETAILS TO APPEND IN THANKS PAGE
const currentUrl = window.location.href;
let everthing = currentUrl.split("?");
let formData = everthing[1].split("&");
console.log(formData);

function show(value) {
  formData.forEach((data) => {
    if (data.startsWith(value)) {
      result = data.split("=")[1].replace("%40", "@").replace("%2B", "+");
      console.log(result);
    }
  });
  return result;
}

const showData = document.getElementById("results");
showData.innerHTML = `
<div>
<h2>Welcome To Our Chamber</h2>
<p>Request For: ${show("first")} ${show("last")}</p>
<p>Organization Name: ${show("organization").replace("+", " ")}</p>
<p>Organization Title: ${show("organization-title")}</p>
<p>Membership: ${show("membership").replace("+", " ")}</p>
</div>
<p>Your email: <a>${show("email")}</a></p>
`;
show("");
//Timestamp
const timeStampVal = document.querySelector(".timestamp");
const now = new Date();
const settings = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: "false",
  timeZone: "Nigeria/Lagos",
  timeZoneName: "short",
};
const showTime = now.toLocaleString("en-US", settings);
timeStampVal.innerHTML = `<p>Timestamp: ${showTime}</p>`;
