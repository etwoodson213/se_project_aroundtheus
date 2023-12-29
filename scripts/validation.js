// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formElement, options) {
    const { inputSelector } = options;
    const inputElements = [...formElement.querySelectorAll(inputSelector)];
    inputElements.forEach(inputElement => {
        inputElement.addEventListener("input", (e) => {
            console.log(inputElement.inputErrorClass);
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
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
