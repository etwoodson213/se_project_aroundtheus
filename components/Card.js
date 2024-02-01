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
        console.log("like button clicked");
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
    this._cardElement.remove();
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                             Still need to refactor                             ||
  // ! ||--------------------------------------------------------------------------------||

  //picture Preview
  _handlePreview() {
    this._cardElement.querySelector(".modal__popup");
    // modalPopup.src = this._link;
    this._cardElement.querySelector(".modal__popup-caption");
    // modalPopupCaption.textContent = this._name;
    this._cardElement.querySelector("#modal__picture");
    this._cardElement.querySelector.classList.add("modal_opened");
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
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    //set event listeners
    this._setEventListeners();
    //return card
    return this._cardElement;
  }
}
