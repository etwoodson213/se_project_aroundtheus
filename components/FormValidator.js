export default class FormValidator {
  constructor(settings, formSelector) {
    this._formSelector = formSelector;

    this._inputSelector = settings.inputSelector;
    this._submitButtonClass = settings.submitButtonClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._activeSubmitButton = settings.activeSubmitButton;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = settings.formElement;
    this._formelements = settings.formElements;
    this._inputElement = settings.inputElement;
    this._inputElements = settings.inputElements;
    this._setEventListeners = this._setEventListeners.bind(this);
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Show Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _showInputError = (formSelector, inputElement, settings) => {
    this._formSelector.querySelector("#" + this._inputElement.id + "-error");

    this._inputElement.classList.add(this._inputErrorClass);

    this._inputElement.textContent = this._inputElement.validationMessage;
    this._inputElement.classList.add(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Hide Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _hideInputError = (formSelector, inputElement, settings) => {
    this._inputError = this._formSelector.querySelector(
      "#" + this._inputElement.id + "-error"
    );
    this._inputElement.classList.remove(this._inputErrorClass);
    this._inputError.textContent = "";
    this._inputElement.classList.remove(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                              Check Input Validity                              ||
  // ! ||--------------------------------------------------------------------------------||

  _checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
      return this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _checkInputIsInvalid(inputElement) {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                          Toggle Submit Button Function                         ||
  // ! ||--------------------------------------------------------------------------------||

  //removed inputElements from parameter list, because it is not needed.

  _toggleSubmitButton(_inputElements, _submitButton, _inactiveButtonClass) {
    _submitButton = this._formSelector.querySelector(this._submitButtonClass);
    _inactiveButtonClass = this._inactiveButtonClass;

    if (this._checkInputIsInvalid(_inputElements)) {
      _submitButton.classList.add(_inactiveButtonClass);
      _submitButton.disabled = true;
    } else {
      _submitButton.classList.remove(_inactiveButtonClass);
      _submitButton.disabled = false;
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

  _setEventListeners(formSelector, settings) {
    this._inputElements = Array.from(
      this._formSelector.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formSelector.querySelector(
      this._submitButtonClass
    );
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
        this._toggleSubmitButton(
          inputElement,
          this._submitButton,
          this._inactiveButtonClass
        );
      });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Enabling validation                              ||
  // ! ||--------------------------------------------------------------------------------||

  _enableValidation(settings) {
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners(this._formSelector, this._settings);
  }
}

// const editFormValidator = new FormValidator(settings, formSelector);
