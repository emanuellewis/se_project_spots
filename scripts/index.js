const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector("#profile-name_input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description_input",
);

const newPostBtn = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostLink = newPostModal.querySelector("#new-post-image_input");
const newPostCaption = newPostModal.querySelector("#new-post-image_caption");

editProfileBtn.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});
editProfileCloseBtn.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});
newPostCloseBtn.addEventListener("click", () => {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  newPostModal.classList.remove("modal_is-opened");

  console.log(newPostCaption.value);
  console.log(newPostLink.value);
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);
