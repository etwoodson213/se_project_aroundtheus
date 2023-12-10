const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Profile Edit Button                         ||
// ! ||--------------------------------------------------------------------------------||

//button open
const profileEditBtn = document.querySelector("#profile-edit-btn");
//wrapper
const profileEditModal = document.querySelector("#profile-edit-modal");
//button close
const profileModalBtn = document.querySelector("#profile-modal-btn");
//title
const profileTitle = document.querySelector(".profile__title");
//subtitle
const profileSubtitle = document.querySelector(".profile__subtitle");
//edit title
const profileTitleInput = document.querySelector("#modal-input-title");
//edit subtitle
const profileSubtitleInput = document.querySelector("#modal-input-subtitle");
//submit button
const profileEditForm = profileEditModal.querySelector(".modal__form");
//card template
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
//card list
const cardListEl = document.querySelector(".card__list");
const modalPicture = document.querySelector("#modal-picture");

//profile modal popup
profileEditBtn.addEventListener("click", () => openPopup(profileEditModal));
profileTitleInput.value = profileTitle.textContent;
profileSubtitleInput.value = profileSubtitle.textContent;
//profile modal close
profileModalBtn.addEventListener("click", () => closePopup(profileEditModal));
//profile submit
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup(profileEditModal);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

function createCard(cardData) {
  const cardElement = getCardElement(cardData);
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.addEventListener("click", () => openPopup(modalPicture));
  cardListEl.prepend(cardElement);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                     Events                                     ||
// ! ||--------------------------------------------------------------------------------||

initialCards.forEach((cardData) => createCard(cardData, cardListEl));

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Add New Card Button                           ||
// ! ||--------------------------------------------------------------------------------||

//button open
const addNewCardBtn = document.querySelector(".profile__add-button");

//wrapper
const addNewCardModal = document.querySelector("#add-new-card-modal");

//button close
const modalCloseBtn = addNewCardModal.querySelector("#modal-close-btn");

//modal open
addNewCardBtn.addEventListener("click", () => openPopup(addNewCardModal));

//modal close
modalCloseBtn.addEventListener("click", () => closePopup(addNewCardModal));

//
const addCardFormElement = addNewCardModal.querySelector(".modal__input");

//card title input
const cardTitleInput = addNewCardModal.querySelector(
  ".modal__input_type_title"
);
const cardLinkInput = addNewCardModal.querySelector(".modal__input_type_link");

addNewCardModal.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  createCard({ name, link }, cardListEl);
  closePopup(addNewCardModal);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Modal Picture                                 ||
// ! ||--------------------------------------------------------------------------------||

//wrapper
modal__picture = document.querySelector("#modal-picture");

//button close
const modalPictureClose = document.querySelector(".modal__picture-close");
modalPictureClose.addEventListener("click", () => closePopup(modal__picture));

// function openModalPicture(modal__picture) {
//   modal.classList.add(modal__picture);
// }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Card buttons                                 ||
// ! ||--------------------------------------------------------------------------------||

const cardItem = document.querySelector(".card__item");

//card like button
const cardLikeBtn = document.querySelectorAll(".card__like-button");

//card delete button
const cardDeleteBtn = document.querySelectorAll(".delete__card-button");

cardDeleteBtn.forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".card__item").remove();
  });
});


