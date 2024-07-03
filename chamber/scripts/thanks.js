// GET USER DETAILS TO APPEND IN THANKS PAGE
const currentUrl = window.location.href;
let everthing = currentUrl.split("?");
let formData = everthing[1].split("&");

function show(value) {
  console.log(value);
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
<p>Request For: ${show("first")} ${show("last")}</p>
<p>Organization Name: ${show("organization").replace("+", " ")}</p>
<p>Organization Title: ${show("organization-title")}</p>
<div>
</div>
<p>Your email: <a>${show("email")}</a></p>
`;
show("");
