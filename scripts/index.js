const editprofilebutton = document.querySelector(".profile__edit-button");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosebutton = editprofilemodal.querySelector(
  ".modal__close-button"
);

const newpostbutton = document.querySelector(".profile__new-post-button");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebutton = newpostmodal.querySelector(".modal__close-button");

editprofilebutton.addEventListener("click", function () {
  editprofilemodal.classList.add("modal_is-opened");
});

editprofileclosebutton.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal_is-opened");
});

newpostbutton.addEventListener("click", function () {
  newpostmodal.classList.add("modal_is-opened");
});

newpostclosebutton.addEventListener("click", function () {
  newpostmodal.classList.remove("modal_is-opened");
});
