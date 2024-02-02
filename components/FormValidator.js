class FormValidator {
  constructor(options, formElement ) {
    this._options = options;
    this._formElement = formElement;

    this._formSelector = options.modal__form;
    this._inputSelector = options.modal__input;
    this._submitButtonClass = options.modal__button;
    this._inactiveButtonClass = options.modal__button-disabled;
    this._activeSubmitButton = options.modal__button-active;
    this._inputErrorClass = options.modal__input-invalid;
    this._errorClass = options.modal__input_type_error_visible; 
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

// ! ||--------------------------------------------------------------------------------||
// ! ||                          Toggle Submit Button Function                         ||
// ! ||--------------------------------------------------------------------------------||

_toggleSubmitButton(inputElements, submitButton, this._inactiveButtonClass) {
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


}


const editFormValidator = new FormValidator(options, this.editFormValidator);
const addFormValidator = new FormValidator(options, this.addFormValidator);
editFormValidator.enableValidation();
