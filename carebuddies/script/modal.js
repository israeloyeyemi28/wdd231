export function openModal(data) {
  let modal = document.getElementById("modal");
  let body = document.querySelector(".body");
  const closeModal = document.querySelector(".close-btn");

  body.innerHTML = `<h2>${data.carebuddies.name}</h2>
    <p>${data.carebuddies.Type}</p>
    `;
  modal.showModal();
  closeModal.addEventListener("click", function () {
    modal.close();
  });
}


// function displayModal(course) {
//   courseDetails.innerHTML = "";
//   courseDetails.innerHTML = `
//   <button id="closeModal">X</button>
//   <h2>${course.subject}  ${course.number}</h2>
//   </div>
//   <h3>${course.title}</h3>
//   <p><strong>Credits</strong>: ${course.credits}</p>
//   <p><strong>Certificate</strong>: ${course.certificate}</p>
//   <p>${course.description}</p>
//   <p><strong>Technology</strong>: ${course.technology.join(", ")}</p>
//   `;
//   courseDetails.showModal();
//   document.querySelector("#closeModal").addEventListener("click", () => {
//     courseDetails.close();
//   });
// }