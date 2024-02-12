export default class Card {
  constructor(cardData, cardSelector, handlePreview) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handlePreview = handlePreview;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                setEventListeners                               ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    //".card__like-button"
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", this._handleLikeBtn);

    //".card__delete-button"
    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardDeleteButton.addEventListener("click", this._handleDeleteBtn);

    //".card__image"
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.addEventListener("click", () => {
      this._handlePreview({ name: this._name, link: this._link });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                    Handlers                                    ||
  // ! ||--------------------------------------------------------------------------------||

  //like button handler
  _handleLikeBtn = () => {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };

  //delete button handler
  _handleDeleteBtn() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  // //picture Preview - not needed in Card.js (yet)
  // _handlePreview = ({name, link}) => {
  //   modalPopup.src = this._link;
  //   modalPopupCaption.textContent = this._name;
  //   modalPicture.alt = `Photo of ${this._name}`;
  // };

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
