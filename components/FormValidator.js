class FormValidator {
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;

    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonClass = options.submitButtonClass;
    this._inactiveButtonClass = options.inactiveButtonClass - disabled;
    this._activeSubmitButton = options.activeSubmitButton - active;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
  }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Show Input Error                                ||
// ! ||--------------------------------------------------------------------------------||

_showInputError(_formSelector, inputElement, options) {
    this._formSelector.querySelector(
      "#" + inputElement.id + "-error"
    );
    inputElement.classList.add(options.inputErrorClass);
    inputError.textContent = inputElement.validationMessage;
    inputError.classList.add(options.errorClass);
  }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Hide Input Error                                ||
// ! ||--------------------------------------------------------------------------------||

hideInputError = (formSelector, inputElement, options) => {
    const inputError = formSelector.querySelector(
      "#" + inputElement.id + "-error"
    );
    inputElement.classList.remove(options.inputErrorClass);
    inputError.textContent = "";
    inputError.classList.remove(options.errorClass);
  };

// ! ||--------------------------------------------------------------------------------||
// ! ||                              Check Input Validity                              ||
// ! ||--------------------------------------------------------------------------------||

_checkInputValidity(formElement, inputElement, options) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, options);
    } else {
      hideInputError(formElement, inputElement, options);
    }
  }
  
  _checkInputIsInvalid(inputElements) {
    return inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                          Toggle Submit Button Function                         ||
  // ! ||--------------------------------------------------------------------------------||

  _toggleSubmitButton(inputElements, submitButton, inactiveButtonClass) {
    if (checkInputIsInvalid(inputElements)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
    }
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                               Set Event Listeners                              ||
  // ! ||--------------------------------------------------------------------------------||

  _setEventListeners() {
    const inputElements = this._formElement.querySelectorAll(
      this._inputSelector
    );
    const submitButton = this._formElement.querySelector(
      this._submitButtonClass
    );

    toggleSubmitButton(inputElements, submitButton, this._inactiveButtonClass);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        checkInputValidity(this._formElement, inputElement, this._options);
        toggleSubmitButton(
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
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(this._formSelector, this._options);
  }
}

const editFormValidator = new FormValidator(this._options, this.editFormValidator);
const addFormValidator = new FormValidator(this._options, this.addFormValidator);
editFormValidator.enableValidation();

export default FormValidator;
