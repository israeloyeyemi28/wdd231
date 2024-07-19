import { displaySitters } from "./dom.js";
// import { displayForm } from "./sitterName.js";
const url = "./data/carebuddies.json";
export async function fetchSitters(url) {
  try {
    const response = await fetch(url);
    let data = await response.json();
    displaySitters(data);
    displayForm(data);
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching Sitters:", error);
    return [];
  }
}

