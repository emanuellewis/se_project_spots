const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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
const templateCard = document
  .querySelector("#template-card")
  .content.querySelector(".card");
const cardsElement = document.querySelector(".cards__list");

const modalPreview = document.querySelector("#preview-modal");
const modalPreviewCloseBtn = modalPreview.querySelector(
  ".modal__preview-close-btn",
);
const modalPreviewImage = modalPreview.querySelector(".modal__preview-image");
const modalPreviewCaption = modalPreview.querySelector(
  ".modal__preview-caption",
);

modalPreviewCloseBtn.addEventListener("click", () => {
  closeModal(modalPreview);
});

// TODO:
function getCardElement(data) {
  const cardElement = templateCard.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardPreview = document.querySelector("#preview-modal");
  const cardPreviewImage = cardPreview.querySelector(".modal__preview-image");
  const cardPreviewCaption = cardPreview.querySelector(
    ".modal__preview-caption",
  );
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__description-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__description-button-img_active");
  });
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    modalPreviewImage.src = data.link;
    modalPreviewImage.alt = data.name;
    modalPreviewCaption.textContent = data.name;
    openModal(modalPreview);
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
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

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();

  const inputValues = {
    name: newPostCaption.value,
    link: newPostLink.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsElement.prepend(cardElement);

  const newCard = closeModal(newPostModal);
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
newPostForm.addEventListener("submit", handleNewPostFormSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsElement.append(cardElement);
});
