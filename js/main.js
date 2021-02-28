let button = document.querySelector(".btn_to_ass");
let modal = document.querySelector("#modal");
let close_modal = document.querySelector(".close_modal");
let overlaySubscribeBtn = document.querySelector('.modal-form_btn');
let overlaySubscribe = document.querySelector('.subscribe .block_modal-overlay');
let overlayToAss = document.querySelector('.to_ass .block_modal-overlay');
let overlayToAssBtn = document.querySelectorAll('.block_modal-buttons > .modal-button');

button.addEventListener("click", function() {
    modal.classList.add("active");
});

overlaySubscribeBtn.addEventListener("click", function() {
  overlaySubscribe.classList.add("active");
});

for (let i = 0; i < overlayToAssBtn.length; i++) {
     overlayToAssBtn[i].addEventListener("click", function() {
       overlayToAss.classList.add("active");
     });
 }

function closeModal() {
  modal.classList.remove("active");
}
close_modal.addEventListener("click", closeModal);

window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});

window.addEventListener("keydown", e => {
  const checkClass = document.querySelector(".active");
  if (e.keyCode === 13 && checkClass) {
    modal.classList.remove("active");
    e.preventDefault();
  }
});
