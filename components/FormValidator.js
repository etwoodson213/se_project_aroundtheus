class FormValidator {
  constructor(options, formSelector) {
    this._inputSelector = options.inputSelector;
    this._submitButtonClass = options.submitButtonClass;
    this._inactiveButtonClass = options.inactiveButtonClass - disabled;
    this._activeSubmitButton = options.activeSubmitButton - active;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
    this._formElement = options.formElements;

    this._formSelector = formSelector;
    console.log(this);
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Show Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _showInputError(_formSelector, _inputElement) {
    this._formSelector.querySelector("#" + inputElement.id + "-error");
    _inputElement.classList.add(this._inputErrorClass);
    this._inputError.textContent = inputElement.validationMessage;
    this._inputError.classList.add(this._errorClass);
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                Hide Input Error                                ||
  // ! ||--------------------------------------------------------------------------------||

  _hideInputError = (_formSelector, _inputElement, _options) => {
    this._inputError = this._formSelector.querySelector(
      "#" + _inputElement.id + "-error"
    );
    _inputElement.classList.remove(this._options.inputErrorClass);
    this._inputError.textContent = "";
    this._inputError.classList.remove(this._options.errorClass);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                              Check Input Validity                              ||
  // ! ||--------------------------------------------------------------------------------||

  _checkInputValidity(_formElement, _inputElement, _options) {
    if (!_inputElement.validity.valid) {
      this._showInputError(_formElement, _inputElement, this._options);
    } else {
      this.hideInputError(_formElement, _inputElement, this._options);
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

  _toggleSubmitButton(_submitButton, _inactiveButtonClass) {
    _submitButton = this._formElement.querySelector(this._submitButtonClass);
    _inactiveButtonClass = this._inactiveButtonClass;

    if (checkInputIsInvalid(_inputElements)) {
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
    _inputElements = this._formElement.querySelectorAll(this._inputSelector);
    _submitButton = this._formElement.querySelector(this._submitButtonClass);
    _inputElement = this._formElement.querySelector(this._inputSelector);

    toggleSubmitButton(inputElements, submitButton, inactiveButtonClass);

    _inputElements.forEach((_inputElement) => {
      _inputElement.addEventListener("input", (e) => {
        checkInputValidity(this._formElement, _inputElement, this._options);
        toggleSubmitButton(
          _inputElements,
          _submitButton,
          this._inactiveButtonClass
        );
      });
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Enabling validation                              ||
  // ! ||--------------------------------------------------------------------------------||

  _enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(this._formSelector, this._options);
  }
}

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonClass: ".modal__button",
  inactiveButtonClass: "modal__button-disabled",
  activeSubmitButton: "modal__button-active",
  inputErrorClass: "modal__input-invalid",
  errorClass: "modal__input_type_error_visible",
};

// const addFormValidator = new FormValidator.bind(this)(
//   options,
//   addFormValidator
// );
// editFormValidator.enableValidation(options, editFormValidator);

export default FormValidator;
