import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";

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
    name: "London",
    link: "https://images.unsplash.com/photo-1696589723662-37ff13c609e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ! ||---------------------------------------------------------------------------------||
// ! ||                                    Profile Edit Button                         ||
// ! ||--------------------------------------------------------------------------------||

const formSelector = document.querySelector(".modal__label");
const formElement = document.querySelector(".modal__form");
const inputElement = document.querySelector(".modal__input");
const modalAddNewCard = document.querySelector("#add-card-form");
const inputErrorElement = document.querySelector(".modal__input-error");
const textContent = document.querySelector(".modal__input-error");
const inputErrorClass = document.querySelector(".modal__input-invalid");
const inactiveButtonClass = document.querySelector(".modal__button_disabled");
const activeSubmitButton = document.querySelector(".modal__button-active");
const submitButtonClass = document.querySelector(".modal__button");
const inputElements = document.querySelectorAll(".modal__input");
const cardSelector = "#card-template";
const modalEditForm = document.querySelector("#profile-edit-form");

//wrapper
const addNewCardModal = document.querySelector("#add-new-card-modal");

//button open
const profileEditBtn = document.querySelector("#profile-edit-btn");
//wrapper
const profileEditModal = document.querySelector("#profile-edit-modal");
//button close
const profileModalCloseButton = document.querySelector("#profile-modal-btn");
//title
const profileTitle = document.querySelector(".profile__title");
//subtitle
const profileSubtitle = document.querySelector(".profile__subtitle");
//edit title
const profileTitleInput = document.querySelector("#modal-input-name");
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

const modalImage = document.querySelector(".card__image");
const cardCaption = document.querySelector(".card__title");

//profile modal popup
profileEditBtn.addEventListener("click", () => {
  profileSubtitleInput.value = profileSubtitle.textContent;
  profileTitleInput.value = profileTitle.textContent;
  openPopup(profileEditModal);
});

//profile modal close
profileModalCloseButton.addEventListener("click", () => closePopup());
//profile submit
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup();
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||
const popup = new Popup({ popupSelector: '.modal' });

popup.handlePreview(cardData);
// function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalsByEsc);
// }

// function closePopup() {
//   document.querySelector(".modal_opened").classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalsByEsc);
// }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Form Validation                                ||
// ! ||--------------------------------------------------------------------------------||

const settings = {
  inputSelector: ".modal__input",
  submitButtonClass: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  activeSubmitButton: "modal__button-active",
  inputErrorClass: "modal__input-invalid",
  errorClass: "modal__input_type_error_visible",
};

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = addNewCardModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(settings, editFormElement);
const addFormValidator = new FormValidator(settings, addFormElement);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

// ! ||--------------------------------------------------------------------------------||
// ! ||                          Handle Preview -  Refactored?                         ||
// ! ||--------------------------------------------------------------------------------||

const cardElement = cardTemplate.cloneNode(true);
const cardImageEl = cardElement.querySelector(".card__image");
const cardTitleEl = cardElement.querySelector(".card__title");
const modalPopup = modalPicture.querySelector(".modal__popup");
const modalPopupCaption = modalPicture.querySelector(".modal__popup-caption");

function handlePreview(cardData) {
  modalPopup.src = cardData.link;
  modalPopupCaption.textContent = cardData.name;
  modalPicture.alt = `Photo of ${cardData.name}`;
  popup(modalPicture);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  from card.js                                  ||
// ! ||--------------------------------------------------------------------------------||
function renderCard(cardData, cardListEl) {
  const card = new Card(cardData, "#card-template", handlePreview);
  const cardElement = card.getView();
  cardListEl.prepend(cardElement);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                     Events                                     ||
// ! ||--------------------------------------------------------------------------------||

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Add New Card Button                           ||
// ! ||--------------------------------------------------------------------------------||

//button open
const addNewCardBtn = document.querySelector(".profile__add-button");

// //wrapper
// const addNewCardModal = document.querySelector("#add-new-card-modal");

//button close
const cardModalCloseBtn = addNewCardModal.querySelector(
  "#modal-card-close-btn"
);

//modal open
addNewCardBtn.addEventListener("click", () => openPopup(addNewCardModal));

//modal close
cardModalCloseBtn.addEventListener("click", () => closePopup(addNewCardModal));

//
const addCardFormElement = addNewCardModal.querySelector(".modal__input");

//card title input
const cardTitleInput = addNewCardModal.querySelector(
  ".modal__input_type_title"
);

const cardLinkInput = addNewCardModal.querySelector(".modal__input_type_link");

//add new card popup
addNewCardModal.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(addNewCardModal);
  evt.target.reset();
  addFormValidator.toggleSubmitButton();
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Modal Picture                                 ||
// ! ||--------------------------------------------------------------------------------||

//button close
const modalPictureClose = document.querySelector(".modal__picture-close");
modalPictureClose.addEventListener("click", () => closePopup(modalPicture));

//overlay
const modals = document.querySelectorAll(".modal");

//close modals on esc
function closeModalsByEsc(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}

//close modals on overlay click
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePopup(modal);
    }
  });
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                           Delete Buttons - Refactored                          ||
// ! ||--------------------------------------------------------------------------------||
// const cardItem = document.querySelector(".card__item");

// //card like button
// const cardLikeBtn = document.querySelectorAll(".card__like-button");

// //card delete button
// const cardDeleteBtn = document.querySelectorAll(".card__delete-button");
