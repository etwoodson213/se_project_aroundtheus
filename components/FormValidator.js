export default class FormValidator {
  constructor(settings, formSelector) {
    this._formSelector = formSelector;

    this._inputSelector = settings.inputSelector;
    this._submitButtonClass = settings.submitButtonClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._activeSubmitButton = settings.activeSubmitButton;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputElement = settings.inputElement;
    this._inputelements = settings.inputelements;
    this._setEventListeners = this._setEventListeners.bind(this);
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Show Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _showInputError = (inputElement) => {
    this._formSelector.querySelector("#" + this._inputElement.id + "-error");

    this._inputElement.classList.add(this._inputErrorClass);

    this._inputElement.textContent = this._inputElement.validationMessage;
    this._inputElement.classList.add(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Hide Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _hideInputError = (inputElement) => {
    this._inputError = this._formSelector.querySelector(
      "#" + inputElement.id + "-error"
    );

    inputElement.classList.remove(this._inputErrorClass);

    this._inputError.textContent = "";

    inputElement.classList.remove(this._errorClass);
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
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                          Toggle Submit Button Function                         ||
  // ! ||--------------------------------------------------------------------------------||

  //removed inputElements from parameter list, because it is not needed.

  _toggleSubmitButton() {

    if (this._checkInputIsInvalid()) {
      this._toggleSubmitButton;
    } else {
      this._enabledButton;
    }
  }

  _disabledButton() {
    this._submitButton.classList.add(inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enabledButton() {
    this._submitButton.classList.remove(inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Set Event Listeners                              ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    this._inputElements = Array.from(
      this._formSelector.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formSelector.querySelector(
      this._submitButtonClass
    );
    //code breaks without line below
    this._inputElement = this._formSelector.querySelector(this._inputSelector);

    this._toggleSubmitButton(
      this._inputElements,
      this._submitButton,
      this._inactiveButtonClass
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(
          this._formSelector,
          inputElement,
          this._settings
        );
        this._toggleSubmitButton();
      });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Enabling validation                              ||
  // ! ||--------------------------------------------------------------------------------||

  enableValidation() {
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}
