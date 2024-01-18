// enabling validation by calling enableValidation()
// pass all the settings on call

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
  inputError.textContent = "";
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

function toggleSubmitButton(
  inputElements,
  submitButton,
  { inactiveButtonClass, activeSubmitButton }
) {
  let foundInvalid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) foundInvalid = true;
  });

  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    submitButton.classList.toggle("disabled");
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
    submitButton.classList.toggle("active");
    submitButton.classList.add(activeSubmitButton);
  }

  //   const checkFormValidity = (allInputs) =>
  //     allInputs.every((input) => input.validity.valid);

  //   const isFormValid = checkFormValidity(inputElements);

  //   if (!isFormValid) {
  //     submitButton.classList.add("disabled", "modal__button-disabled");
  //     submitButton.disabled = true;
  //   } else {
  //     submitButton.classList.remove("disabled", "modal__button-disabled");
  //     submitButton.disabled = false;
  //     submitButton.classList.add("active");
  //   }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = document.querySelector(options.submitButtonClass);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleSubmitButton(inputElements, submitButton, options);
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

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonClass: ".modal__button",
  inactiveButtonClass: "modal__button-disabled",
  activeSubmitButton: "modal__button-active",
  inputErrorClass: "modal__input-invalid",
  errorClass: "modal__input_type_error_visible",
};

enableValidation(options);
