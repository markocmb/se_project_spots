// ---------- Configuration ----------

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// ---------- Show / Hide Validation Errors ----------

function showInputError(formEl, inputEl, errorMsg, config) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = errorMsg;
  inputEl.classList.add(config.inputErrorClass);
}

function hideInputError(formEl, inputEl, config) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorEl.textContent = "";
  inputEl.classList.remove(config.inputErrorClass);
}

// ---------- Individual Input Validation ----------

function checkInputValidity(formEl, inputEl, config) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, config);
  } else {
    hideInputError(formEl, inputEl, config);
  }
}

// ---------- Reset All Validation Errors ----------

function resetValidationErrors(formEl, config) {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  inputList.forEach((inputEl) => {
    hideInputError(formEl, inputEl, config);
  });
}

// ---------- Toggle Submit Button State ----------

function hasInvalidInput(inputList) {
  return inputList.some((inputEl) => !inputEl.validity.valid);
}

function toggleButtonState(inputList, buttonEl, config) {
  const isInvalid = hasInvalidInput(inputList);

  if (isInvalid) {
    buttonEl.disabled = true;
    buttonEl.classList.add(config.inactiveButtonClass);
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove(config.inactiveButtonClass);
  }
}

// ---------- Form Event Listeners ----------

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

// ---------- Enable Validation ----------

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });
}

// ---------- Initialize Validation ----------

enableValidation(config);
