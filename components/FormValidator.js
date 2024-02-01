export default class FormValidator {
  constructor(formElement, _options) {
    this._formElement = formElement;
    this._options = {
      formSelector: ".modal__form",
      inputSelector: ".modal__input",
      submitButtonClass: ".modal__button",
      inactiveButtonClass: "modal__button-disabled",
      activeSubmitButton: "modal__button-active",
      inputErrorClass: "modal__input-invalid",
      errorClass: "modal__input_type_error_visible",
    };
  }
}
