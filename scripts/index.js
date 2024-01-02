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
  // fill the form here
  // i am not sure if im am understanding the suggestion here?

  profileSubtitleInput.value = profileSubtitle.textContent;
  profileTitleInput.value = profileTitle.textContent;
  openPopup(profileEditModal);
});

// profileSubtitleInput.value = profileSubtitle.textContent;
// profileEditBtn.addEventListener("click", () => openPopup(profileEditModal));
// profileTitleInput.value = profileTitle.textContent;

//profile modal close
profileModalCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
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
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardDeleteBtn.closest(".card__item").remove();
  });

  cardImageEl.addEventListener("click", () => {
    modalPopup.src = cardData.link;
    modalPopupCaption.textContent = cardData.name;
    modalPicture.alt = `Photo of ${cardData.name}`;
    openPopup(modalPicture);
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

const modalPopup = document.querySelector(".modal__popup");
const modalPopupCaption = document.querySelector(".modal__popup-caption");

//create new card & modal picture preview
function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
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

//wrapper
const addNewCardModal = document.querySelector("#add-new-card-modal");

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
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Modal Picture                                 ||
// ! ||--------------------------------------------------------------------------------||

//button close
const modalPictureClose = document.querySelector(".modal__picture-close");
modalPictureClose.addEventListener("click", () => closePopup(modalPicture));

//overlay
const modals = document.querySelectorAll(".modal");

//close modals on overlay click and esc
modals.forEach((modal) => {
  document.addEventListener("keydown", function(e) {
    if (e.code === "Escape") {
      closePopup(modal);
    }
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePopup(modal);
    }
  });
});


// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Card buttons                                 ||
// ! ||--------------------------------------------------------------------------------||

const cardItem = document.querySelector(".card__item");

//card like button
const cardLikeBtn = document.querySelectorAll(".card__like-button");

//card delete button
const cardDeleteBtn = document.querySelectorAll(".card__delete-button");
