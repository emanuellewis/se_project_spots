import "./index.css";

import {
  settings,
  enableValidation,
  disableButton,
} from "../scripts/validation.js";

import Api from "../utils/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "ca069e42-446a-422a-abc9-b8526562fcac",
    "Content-Type": "application/json",
  },
});

// Edit Profile Elements
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileSubmitBtn =
  editProfileModal.querySelector(".modal__submit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector("#profile-name_input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description_input",
);
// Avatar Selectors
const profileAvatar = document.querySelector(".profile__avatar");
const editAvatarBtn = document.querySelector(".profile__avatar-btn");
const editAvatarModal = document.querySelector("#edit-avatar-modal");
const editAvatarCloseBtn = editAvatarModal.querySelector(".modal__close-btn");
const editAvatarInput = editAvatarModal.querySelector(".modal__input");
const editAvatarSubmitBtn = editAvatarModal.querySelector(".modal__submit-btn");
const editAvatarForm = editAvatarModal.querySelector(".modal__form");

// New Post Elements
const newPostBtn = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const newPostLink = newPostModal.querySelector("#new-post-image_input");
const newPostCaption = newPostModal.querySelector("#new-post-image_caption");
const templateCard = document
  .querySelector("#template-card")
  .content.querySelector(".card");
const cardsElement = document.querySelector(".cards__list");

// Delete Confirmation
const deleteConfirmationModal = document.querySelector(
  "#delete-confirmation-modal",
);
const deleteConfirmationCloseBtn = deleteConfirmationModal.querySelector(
  ".modal__preview-close-btn",
);
const deleteConfirmationBtn =
  deleteConfirmationModal.querySelector(".modal__delete-btn");
const cancelConfirmationBtn =
  deleteConfirmationModal.querySelector(".modal__cancel-btn");

// Modal Preview Elements
const modalPreview = document.querySelector("#preview-modal");
const modalPreviewCloseBtn = modalPreview.querySelector(
  ".modal__preview-close-btn",
);
const modalPreviewImage = modalPreview.querySelector(".modal__preview-image");
const modalPreviewCaption = modalPreview.querySelector(
  ".modal__preview-caption",
);

let currentUserId = null;

// Open - Close Modals
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", escapeDown);
  editAvatarBtn.classList.add("profile__avatar__editor-is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", escapeDown);
  editAvatarBtn.classList.remove("profile__avatar__editor-is-opened");
}

// Event Listeners - Close modals
const escapeDown = (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");

    if (openedModal) {
      closeModal(openedModal);
    }
  }
};

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
});

modalPreviewCloseBtn.addEventListener("click", () => {
  closeModal(modalPreview);
});

function renderDeleteMoment(isLoading, button) {
  button.textContent = isLoading ? "Deleting" : "Delete";
}

// Delete Cards
let currentCard = null;

deleteConfirmationBtn.addEventListener("click", () => {
  if (currentCard) {
    renderDeleteMoment(true, deleteConfirmationBtn);
    api
      .deleteCard(currentCard.id)
      .then(() => {
        currentCard.element.remove();
        closeModal(deleteConfirmationModal);
        currentCard = null;
      })
      .catch((err) => console.error(err))
      .finally(() => renderDeleteMoment(false, deleteConfirmationBtn));
  }
});

cancelConfirmationBtn.addEventListener("click", () => {
  closeModal(deleteConfirmationModal);
  currentCard = null;
});
deleteConfirmationCloseBtn.addEventListener("click", () => {
  closeModal(deleteConfirmationModal);
});

// Profile open/close moment
editAvatarBtn.addEventListener("click", () => {
  openModal(editAvatarModal);
});
editAvatarCloseBtn.addEventListener("click", () => {
  closeModal(editAvatarModal);
});

// Render Loading BUTTON
function renderServerLoading(isLoading, button) {
  button.textContent = isLoading ? "Saving..." : "Save";
}

function getCardElement(data) {
  const cardElement = templateCard.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtnEl = cardElement.querySelector(".card__description-button");
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const isLiked =
    data.isLiked || data.likes?.some((user) => user._id === currentUserId);
  if (isLiked) {
    cardLikeBtnEl.classList.add("card__description-button-img_active");
  }

  // Like / Dislike conectado a la API
  cardLikeBtnEl.addEventListener("click", () => {
    const isCurrentlyLiked = cardLikeBtnEl.classList.contains(
      "card__description-button-img_active",
    );

    const likeMethod = isCurrentlyLiked
      ? api.dislikeCard(data._id)
      : api.likeCard(data._id);

    likeMethod
      .then(() => {
        cardLikeBtnEl.classList.toggle("card__description-button-img_active");
      })
      .catch((err) => console.error(err));
  });

  cardDeleteBtnEl.addEventListener("click", () => {
    openModal(deleteConfirmationModal);
    currentCard = {
      id: data._id,
      element: cardElement,
    };
  });

  cardImage.addEventListener("click", () => {
    modalPreviewImage.src = data.link;
    modalPreviewImage.alt = data.name;
    modalPreviewCaption.textContent = data.name;
    openModal(modalPreview);
  });

  return cardElement;
}

editProfileBtn.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});
newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderServerLoading(true, editAvatarSubmitBtn);

  api
    .updateAvatar({ avatar: editAvatarInput.value })
    .then((data) => {
      profileAvatar.src = data.avatar;
      disableButton(editAvatarSubmitBtn, settings);
      closeModal(editAvatarModal);
      editAvatarForm.reset();
    })
    .catch((err) => console.error(err))
    .finally(() => renderServerLoading(false, editAvatarSubmitBtn));
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  renderServerLoading(true, editProfileSubmitBtn);

  api
    .editUserInfo({
      name: profileNameInput.value,
      about: profileDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      disableButton(editProfileSubmitBtn, settings);
      closeModal(editProfileModal);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => renderServerLoading(false, editProfileSubmitBtn));
}

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  renderServerLoading(true, newPostSubmitBtn);

  const inputValues = {
    name: newPostCaption.value,
    link: newPostLink.value,
  };

  api
    .addCard(inputValues)
    .then((newCardData) => {
      const cardElement = getCardElement(newCardData);
      cardsElement.prepend(cardElement);
      evt.target.reset();
      closeModal(newPostModal);
      disableButton(newPostSubmitBtn, settings);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => renderServerLoading(false, newPostSubmitBtn));
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
editAvatarForm.addEventListener("submit", handleEditAvatarFormSubmit);

api
  .getAppInfo()
  .then(([cards, userData]) => {
    currentUserId = userData._id;

    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.src = userData.avatar;

    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsElement.append(cardElement);
    });
  })
  .catch((err) => {
    console.error(err);
  });

enableValidation(settings);
