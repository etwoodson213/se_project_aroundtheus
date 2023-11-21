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
// ! ||                                    Elements                                    ||
// ! ||--------------------------------------------------------------------------------||


const profileEditBtn = document.querySelector("#profile-edit-btn");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalBtn = document.querySelector("#profile-modal-btn");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#modal-input-title");
const profileSubtitleInput = document.querySelector("#modal-input-subtitle");
// const profileSaveBtn = document.querySelector("#modal-btn-save");
const profileEditForm = profileEditModal.querySelector(".modal__form");


// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||


function openpopup() {
  profileEditModal.classList.add("modal__opened");
}

 function closepopup() {
  profileEditModal.classList.remove("modal__opened");
 }


// ! ||--------------------------------------------------------------------------------||
// ! ||                                     Events                                     ||
// ! ||--------------------------------------------------------------------------------||


profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  openpopup();
});

profileModalBtn.addEventListener("click", () => {
  closepopup();
});

profileEditForm.addEventListener("submit" , (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closepopup();
})