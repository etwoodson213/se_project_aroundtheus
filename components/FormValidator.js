export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonClass = settings.submitButtonClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._activeSubmitButton = settings.activeSubmitButton;
    this._inputErrorClass = settings.inputErrorClass;
    this._inputErrorElement = settings.inputErrorElement;
    this._errorClass = settings.errorClass;
    this._setEventListeners = this._setEventListeners.bind(this);

    this._formElement = formElement;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Show Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _showInputError = (inputElement) => {
    const inputError = this._formElement.querySelector(
      "#" + inputElement.id + "-error"
    );
    inputElement.classList.add(this._inputErrorClass);

    inputError.textContent = inputElement.validationMessage;

    inputError.classList.add(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Hide Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _hideInputError = (inputElement) => {
    const inputError = this._formElement.querySelector(
      "#" + inputElement.id + "-error"
    );

    inputElement.classList.remove(this._inputErrorClass);

    inputError.textContent = "";

    inputError.classList.remove(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                              Check Input Validity                              ||
  // ! ||--------------------------------------------------------------------------------||

  _checkInputValidity(inputElement) {
    if (this._checkInputIsInvalid) {
      return this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _checkInputIsInvalid() {
    this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                          Toggle Submit Button Function                         ||
  // ! ||--------------------------------------------------------------------------------||

  //removed inputElements from parameter list, because it is not needed.

  toggleSubmitButton() {
    if (this._checkInputIsInvalid()) {
      this._disabledButton();
    } else {
      this._enabledButton();
    }
  }

  _disabledButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enabledButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Set Event Listeners                              ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonClass
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleSubmitButton();
      });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Enabling validation                              ||
  // ! ||--------------------------------------------------------------------------------||

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}
