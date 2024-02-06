class FormValidator {
  constructor(settings, formSelector) {
    this._formSelector = formSelector;
    this._settings = settings;

    this._inputSelector = settings.inputSelector;
    this._submitButtonClass = settings.submitButtonClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._activeSubmitButton = settings.activeSubmitButton;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = settings.formElement;
    this._formelements = settings.formElements;
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Show Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _showInputError = (_formSelector, _inputElement) => {
    this._inputElement = this._formSelector.querySelector(".modal__input");

    this._formSelector.querySelector("#" + _inputElement.id + "-error");

    this._inputElement.classList.add(this._inputErrorClass);

    this._inputError.textContent = inputElement.validationMessage;
    this._inputError.classList.add(this._errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Hide Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _hideInputError = (_formSelector, _inputElement, _settings) => {
    const inputError = _formSelector.querySelector(
      "#" + _inputElement.id + "-error"
    );
    _inputElement.classList.remove(this._settings.inputErrorClass);
    this._inputError.textContent = "";
    this._inputError.classList.remove(this._settings.errorClass);
    console.log(this._hideInputError);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                              Check Input Validity                              ||
  // ! ||--------------------------------------------------------------------------------||

  _checkInputValidity(_formElement, _inputElement, _settings) {
    if (!_inputElement.validity.valid) {
      _showInputError(_formElement, _inputElement, _settings);
    } else {
      this._hideInputError(_formElement, _inputElement, _settings);
    }
  }

  _checkInputIsInvalid(_inputElements) {
    return _inputElements.some((_inputElement) => {
      return !_inputElement.validity.valid;
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                          Toggle Submit Button Function                         ||
  // ! ||--------------------------------------------------------------------------------||

  //removed inputElements from parameter list, because it is not needed.

  _toggleSubmitButton(_inputElements, _submitButton, _inactiveButtonClass) {
    _submitButton = this._formSelector.querySelector(this._submitButtonClass);
    _inactiveButtonClass = this._inactiveButtonClass;

    if (_checkInputIsInvalid(_inputElements)) {
      _submitButton.classList.add(_inactiveButtonClass);
      _submitButton.disabled = true;
    } else {
      _submitButton.classList.remove(_inactiveButtonClass);
      _submitButton.disabled = false;
    }
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Set Event Listeners                              ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    inputElements = this.formElement.querySelectorAll(this._inputSelector);
    submitButton = this.formElement.querySelector(this._submitButtonClass);
    inputElement = this.formElement.querySelector(this._inputSelector);

    toggleSubmitButton(inputElements, submitButton, inactiveButtonClass);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        _checkInputValidity(this._formElement, inputElement, this._settings);
        _toggleSubmitButton(
          inputElements,
          submitButton,
          this._inactiveButtonClass
        );
      });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Enabling validation                              ||
  // ! ||--------------------------------------------------------------------------------||

  _enableValidation() {
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(this._formSelector, this._settings);
  }
}

//  const editFormValidator = new FormValidator(settings, formSelector);

export default FormValidator;
