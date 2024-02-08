export default class Card {
  constructor({ name, link }, cardSelector, handlePreview) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handlePreview = handlePreview;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                setEventListeners                               ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    //".card__like-button"
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeBtn();
      });

    //".card__delete-button"
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteBtn();
      });

    //".card__image"
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreview(this);
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
    this._cardElement.closest(".card__item").remove();
  }

  // //picture Preview - not needed in Card.js (yet)
  // _handlePreview = ({name, link}) => {
  //   modalPopup.src = this._link;
  //   modalPopupCaption.textContent = this._name;
  //   modalPicture.alt = `Photo of ${this._name}`;
  // };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                    Functions                                   ||
  // ! ||--------------------------------------------------------------------------------||

  //close modals w/ esc
  _closeModalsByEsc(evt) {
    if (evt.key === "Escape") {
      const openedModal = this._cardElement.querySelector(".modal_opened");
      closePopup(openedModal);
    }
  }

  // // ! ||--------------------------------------------------------------------------------||
  // // ! ||                                   Card Render                                  ||
  // // ! ||--------------------------------------------------------------------------------||

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
