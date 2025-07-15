// Configuration object
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Show validation error
function showInputError(formEl, inputEl, errorMsg, config) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = errorMsg;
  inputEl.classList.add(config.inputErrorClass);
}

// Hide validation error
function hideInputError(formEl, inputEl, config) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = "";
  inputEl.classList.remove(config.inputErrorClass);
}

// Validate single input
function checkInputValidity(formEl, inputEl, config) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
}

// Check if any input is invalid
function hasInvalidInput(inputList) {
  return inputList.some((inputEl) => !inputEl.validity.valid);
}

// Toggle submit button state
function toggleButtonState(inputList, buttonEl, config) {
  const isInvalid = hasInvalidInput(inputList);
  buttonEl.disabled = isInvalid;
  buttonEl.classList.toggle(config.inactiveButtonClass, isInvalid);
}

// Set listeners and initial button state
function setEventListeners(formEl, config) {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonEl = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonEl, config);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputList, buttonEl, config);
    });
  });
}

// Enable validation on all matching forms
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });
}

// Initialize validation
enableValidation(settings);
