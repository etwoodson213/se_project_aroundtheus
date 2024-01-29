export default class Card {
  constructor({ name, link }, cardSelector, handleLikeBtn) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleLikeBtn = handleLikeBtn;
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
  _picturePreview() {
    //create new card modal
    const newCardModal = document.querySelector(".modal__item").cloneNode(true);
    //add new card modal to the DOM
    document.body.append(newCardModal);
    //open new card modal
    openPopup(newCardModal);
  }

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
    //set event listeners
    this._setEventListeners();
    //return card
  }
}
