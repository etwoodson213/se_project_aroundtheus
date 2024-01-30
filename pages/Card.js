export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                setEventListeners                               ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        console.log("like button clicked");
        this._handleLikeBtn();
      });

    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        console.log("delete button clicked");
        this._handleDeleteBtn();
      });

    //".card__image"
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        console.log("image clicked");
        this._picturePreview();
      });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                    Handlers                                    ||
  // ! ||--------------------------------------------------------------------------------||

  //like button handler
  _handleLikeBtn() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  //delete button handler
  _handleDeleteBtn() {
    this._cardElement.remove();
  }

  //picturePreview
  _picturePreview = () => {
    this._cardElement.querySelector(".modal__popup");
    // modalPopup.src = this._link;
    this._cardElement.querySelector(".modal__popup-caption");
    // modalPopupCaption.textContent = this._name;
    this._cardElement.querySelector(".modal__picture");
    // modalPicture.alt = `Photo of ${this._name}`;
    this._cardElement.querySelector.classList.add("modal_opened");
    this._cardElement.removeEventListener("keydown", closeModalsByEsc);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                   Card Render                                  ||
  // ! ||--------------------------------------------------------------------------------||

  //create card element
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);

    //return card view
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    //set event listeners
    this._setEventListeners();
    //return card
    return this._cardElement;
  }
}
