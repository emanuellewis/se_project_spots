// //
// //
// //
// //
// //

// // READY:
// const toggleButtonState = (inputList, buttonElement) => {
//   //   if (hasInvalidInput(inputList)) {
//   //     buttonElement.classList.add("button_inactive");
//   //   } else {
//   //     buttonElement.classList.remove("button_inactive");
//   //   }
// };

// // TODO:
// const setEventListeners = (formEl) => {
//   const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
//   const buttonEl = formEl.querySelector(".modal__submit-btn");
//   toggleButtonState(inputList, buttonEl);

//   inputList.forEach((inputEl) => {
//     inputEl.addEventListener("input", function () {
//       checkInputValidity(formEl, inputEl);
//       //   toggleButtonState(inputList, buttonEl); //FIXME:
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".modal__form"));
//   formList.forEach((formEl) => {
//     formEl.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(formEl.querySelectorAll(".modal__input"));

//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset);
//     });
//   });

//   //   console.log("working on the validation");
// };

// enableValidation();

const showInputError = (formEl, inputEl, errorMsg) => {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = errorMsg;
  inputEl.classList.add("modal__input_type_error");
};

const hideInputError = (formEl, inputEl) => {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = "";
  inputEl.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  });
};

const disabledBtn = (buttonEl) => {
  buttonEl.disabled = true;
  buttonEl.classList.add("modal__submit-btn-inactive");
};
const enabledBtn = (buttonEl) => {
  buttonEl.classList.remove("modal__submit-btn-inactive");
  buttonEl.disabled = false;
};

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    disabledBtn(buttonEl);
  } else {
    enabledBtn(buttonEl);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__submit-btn");

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();

/* 
profile-name_input
profile-name_input-error

profile-description_input
profile-description_input-error

new-post-image_input
new-post-image_input-error

new-post-image_caption
new-post-image_caption-error
*/
