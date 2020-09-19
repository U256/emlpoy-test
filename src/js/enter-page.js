"use strict";

function toggleVisibility(context) {
  context.classList.toggle("enter-page__step_active");
}
function hideVisibility(context) {
  context.classList.remove("enter-page__step_active");
}

let startStep = document.querySelector(".enter-page__start-step");
let registrationStep = document.querySelector(".enter-page__registration-step");
let loginStep = document.querySelector(".enter-page__login-step");

//let submitSignUp = document.querySelector('.submit-sign-up');

//toLoginBtn
document
  .querySelector(".enter-page__to-login-step-btn")
  .addEventListener("click", () => {
    toggleVisibility(startStep);
    toggleVisibility(loginStep);
  });

//toRegistrationBtn
document
  .querySelector(".enter-page__to-registration-step-btn")
  .addEventListener("click", () => {
    toggleVisibility(startStep);
    toggleVisibility(registrationStep);
  });

// back from registration/login  to start step buttons
function backToStartStep() {
  toggleVisibility(startStep);
  hideVisibility(registrationStep);
  hideVisibility(loginStep);
}
document
  .querySelectorAll(".enter-page__back-btn")
  .forEach((backBtn) => backBtn.addEventListener("click", backToStartStep));

// from 'in' to 'up' & vice versa
let switchStepButtons = document.querySelectorAll(
  ".enter-page__switch-step-btn"
);

switchStepButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault;
    toggleVisibility(registrationStep);
    toggleVisibility(loginStep);
  });
});

// sighIn teleport to main site
document
  .querySelector(".enter-page__submit-sign-in")
  .addEventListener("click", (e) => {
    e.preventDefault();
    location.assign("index.html");
  });
