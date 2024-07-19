let select = document.getElementById("sitter-name");
let form = document.querySelector(".sitter-box");
const url = "./data/carebuddies.json";
//display the selct options
function displayForm(data) {
  data.carebuddies.forEach((product) => {
    const option = document.createElement("option");
    option.textContent = `${product.name} [${product.Type}]`;
    option.value = product.name;
    console.log(option.value);
    select.appendChild(option);
    form.appendChild(select);
  });
}
async function fetchSitters(url) {
  try {
    const response = await fetch(url);
    let data = await response.json();
    displayForm(data);
    // console.table(data);
    return data;
  } catch (error) {
    console.error("Error fetching Sitters:", error);
    return [];
  }
}
fetchSitters(url)
 

