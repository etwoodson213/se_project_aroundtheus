// enabling validation by calling enableValidation()
// pass all the settings on call

const formSelector = document.querySelector(".modal__form");
const formElement = document.querySelector(".modal__form");
const inputElement = document.querySelector(".modal__input");
const inputErrorElement = document.querySelector(".modal__input-error");
const options = {};
const errorClass = "modal__error_type-visible";


function showInputError(formElements, inputElement, options) {
  const inputError = formSelector.querySelector(
    "#" + inputElement.id + "-error"
  );
  inputElement.classList.add("input_error");
  inputError.textContent = options.validationMessage;
  inputError.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, options) => {} ;

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
    });
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_type_error-visible",
};

enableValidation(config);
