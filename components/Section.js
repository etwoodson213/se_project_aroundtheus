export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = document.querySelectorAll(initialCards);
    this._renderer = renderer;
    this._containerSelector = document.querySelector(card__list);

  }
}