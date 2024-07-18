export function openModal(data) {
  let modal = document.getElementById("modal");
  //   const closeModal = document.querySelector(".close-btn");
  modal.innerHTML = "";
  modal.innerHTML = `
    <button id="closeModal">&#x274C;</button>
  <h3>${data.name}</h3>
  <p>is a dilligent worker of CareBuddies Babysitting Services. That ensures adequate protection, service, and care to your child/children</p>
  <h3>Specialty:</h3><p>${data.Type}</p>
  <h3>Skills:</h3>
  <ul>
    <li>${data.skills[0]}</li>
    <li>${data.skills[1]}</li>
    <li>${data.skills[2]}</li>
  </ul>
    `;
  modal.showModal();
  document.querySelector("#closeModal").addEventListener("click", function () {
    modal.close();
  });
}
