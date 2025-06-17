const editprofilebutton = document.querySelector(".profile__edit-button");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosebutton = editprofilemodal.querySelector(
  ".modal__close-button"
);
const editprofileform = editprofilemodal.querySelector(".modal__form");

const editprofilenameinput = editprofilemodal.querySelector(
  "#profile-name-input"
);

const editprofiledescriptioninput = editprofilemodal.querySelector(
  "#profile-description-input"
);

const newpostbutton = document.querySelector(".profile__new-post-button");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebutton = newpostmodal.querySelector(".modal__close-button");
const newpostform = newpostmodal.querySelector(".modal__form");

const newpostcardimageinput = newpostmodal.querySelector("#card-image-input");

const newposttextinput = newpostmodal.querySelector("#text-input");

const profilenameEl = document.querySelector(".profile__name");
const profiledescriptionEl = document.querySelector(".profile__description");

editprofilebutton.addEventListener("click", function () {
  editprofilenameinput.value = profilenameEl.textContent;
  editprofiledescriptioninput.value = profiledescriptionEl.textContent;
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

function handleEditprofileSubmit(evt) {
  evt.preventDefault();
  profilenameEl.textContent = editprofilenameinput.value;
  profiledescriptionEl.textContent = editprofiledescriptioninput.value;
  editprofilemodal.classList.remove("modal_is-opened");
}

editprofileform.addEventListener("submit", handleEditprofileSubmit);
