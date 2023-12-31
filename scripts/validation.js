// enabling validation by calling enableValidation()
// pass all the settings on call

const formSelector = document.querySelector(".modal__label");
const formElement = document.querySelector(".modal__form");
const inputElement = document.querySelector(".modal__input");
const modalAddNewCard = document.querySelector("#add-card-form");
const inputErrorElement = document.querySelector(".modal__input-error");
const errorClass = ".modal__input_type_error_visible";
const validationMessage = "";
const textContent = document.querySelector(".modal__input-error");
const inputErrorClass = document.querySelector(".modal__input_invalid");
const inactiveButtonClass = document.querySelector(".modal__button_disabled");
const submitButtonClass = document.querySelector(".modal__button");
const inputElements = document.querySelectorAll(".modal__input");

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    SHOWINPUT                                   ||
// ! ||--------------------------------------------------------------------------------||

//Modal Profile

function showInputError(formSelector, inputElement, options) {
  const inputError = formSelector.querySelector(
    "#" + inputElement.id + "-error"
  );
  inputElement.classList.add(options.inputErrorClass);
  inputError.textContent = inputElement.validationMessage;
  inputError.classList.add(options.errorClass);
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    HIDEINPUT                                   ||
// ! ||--------------------------------------------------------------------------------||

//Modal Profile

const hideInputError = (formSelector, inputElement, options) => {
  const inputError = formSelector.querySelector(
    "#" + inputElement.id + "-error"
  );
  inputElement.classList.remove(options.inputErrorClass);
  inputError.textContent = validationMessage;
  inputError.classList.remove(options.errorClass);
};

// ! ||--------------------------------------------------------------------------------||
// ! ||                              CHECK INPUT VALIDITY                              ||
// ! ||--------------------------------------------------------------------------------||

//Modal Validity

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function toggleSubmitButton(inputElements, submitButtonClass) {
  let foundInvalidInput = false;

  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      foundInvalidInput = true;
    }
  });

  if (foundInvalidInput) {
    submitButtonClass.classList.add("modal__button_disabled");
    submitButtonClass.disabled = true;
  } else {
    submitButtonClass.classList.remove("modal__button_disabled");
    submitButtonClass.disabled = false;
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButtonClass = formElement.querySelector(".modal__button");

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleSubmitButton(inputElements, submitButtonClass);
    });
  });
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                ENABLE VALIDATION                               ||
// ! ||--------------------------------------------------------------------------------||

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formSelector) => {
    formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formSelector, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonClass: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_invalid",
  errorClass: "modal__input_type_error_visible",
};

enableValidation(config);
