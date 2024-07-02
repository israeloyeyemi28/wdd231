const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", function () {
  modal.showModal();
});
closeModal.addEventListener("click", function () {
  modal.close();
});
