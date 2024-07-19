const currentUrl = window.location.href;
console.log(currentUrl);
let everthing = currentUrl.split("?");
console.log(everthing);
let formData = everthing[1].split("&");
formData.forEach((data) => {
  console.table(data);
});

function show(value) {
  formData.forEach((data) => {
    if (data.startsWith(value)) {
      result = data.split("=")[1].replace("%40", "@").replace("%2B", "+");
      // console.log(result);
    }
  });
  return result;
}
show("");
console.log(show("completeDate"));
const showData = document.getElementById("results");
showData.innerHTML = `<div>
<fieldset>
<p>Booking for: ${show("child-first")} ${show("child-last")} <strong>${show(
  "child-type"
)}</strong></p>
<p></p>
<p>Parent / Guardian name: ${show("first")} ${show("last")}</p>
<p>Phone-Number: ${show("phone")}</p>
<a>Email: ${show("email")}</a>
<p>Starting Date: ${show("completeDate")}</p>
<p>Sitter:  ${show("sitter").replace("+", " ")}</p>
<p>Important: ${show("description")}</p>
</fieldset>
`;
// show("");
// // <p>Request For: ${show("first")} ${show("last")}</p>
// // <p>Organization Name: ${show("organization").replace("+", " ")}</p>
// // <p>Organization Title: ${show("organization-title")}</p>
// // <p>Child Type: ${show("membership").replace("+", " ")}</p>
// // </div>
// // <p>Your email: <a>${show("email")}</a></p>
