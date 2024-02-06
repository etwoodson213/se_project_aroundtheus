// enabling validation by calling enableValidation()
// pass all the settings on call

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    SHOWINPUT                                   ||
// ! ||--------------------------------------------------------------------------------||

//Modal Profile

// function showInputError(formSelector, inputElement, settings) {
//   const inputError = formSelector.querySelector(
//     "#" + inputElement.id + "-error"
//   );
//   inputElement.classList.add(settings.inputErrorClass);
//   inputError.textContent = inputElement.validationMessage;
//   inputError.classList.add(settings.errorClass);
// }

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    HIDEINPUT                                   ||
// ! ||--------------------------------------------------------------------------------||

//Modal Profile

const hideInputError = (formSelector, inputElement, settings) => {
  const inputError = formSelector.querySelector(
    "#" + inputElement.id + "-error"
  );
  inputElement.classList.remove(settings.inputErrorClass);
  inputError.textContent = "";
  inputError.classList.remove(settings.errorClass);
};

// ! ||--------------------------------------------------------------------------------||
// ! ||                              CHECK INPUT VALIDITY                              ||
// ! ||--------------------------------------------------------------------------------||

//Modal Validity

function checkInputValidity(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

function checkInputIsInvalid(inputElements) {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//Submit Button Toggle

function toggleSubmitButton(inputElements, submitButton, inactiveButtonClass) {
  if (checkInputIsInvalid(inputElements)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, settings) {
  const { inputSelector } = settings;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(settings.submitButtonClass);

  toggleSubmitButton(inputElements, submitButton, settings.inactiveButtonClass);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, settings);
      toggleSubmitButton(
        inputElements,
        submitButton,
        settings.inactiveButtonClass
      );
    });
  });
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                ENABLE VALIDATION                               ||
// ! ||--------------------------------------------------------------------------------||

function enableValidation(settings) {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formSelector) => {
    formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formSelector, settings);
  });
}

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonClass: ".modal__button",
  inactiveButtonClass: "modal__button-disabled",
  activeSubmitButton: "modal__button-active",
  inputErrorClass: "modal__input-invalid",
  errorClass: "modal__input_type_error_visible",
};

enableValidation(settings);
