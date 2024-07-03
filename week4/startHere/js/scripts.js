let currentUrl = window.location.href;
console.log(currentUrl)
let everthing = currentUrl.split("?");
let formData = everthing[1].split("&");


function show(value) {
  console.log(value);
  formData.forEach((data) => {
    console.log(data);
    if (data.startsWith(value)) {
      result = data.split("=")[1].replace("%40","@");
    }
  });
  return result;
}
const showData = document.getElementById("results");
showData.innerHTML = `
<p>Appointment For ${show("first")} ${show("last")} </p>
<p>Proxy ${show("ordinance")} on ${show("fecha")}</p>
<p>Your Email: <a href=show(email)> ${show("email")}</a></p>
`
