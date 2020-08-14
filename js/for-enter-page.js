'use strict'

Object.prototype.toggleVisibility = function () {
	this.classList.toggle('active__step')
}
Object.prototype.hideVisibility = function () {
	this.classList.remove('active__step')
}

let startStep = document.querySelector('.enter-start');
let registrationStep = document.querySelector('.enter-registration');
let loginStep = document.querySelector('.enter-login');

let toLoginBtn = document.querySelector('.to-login');
let toRegistrationBtn = document.querySelector('.to-registration');

// back from registration/login  to start step
let backToStartButtons = document.querySelectorAll('.enter-back-btn');
// from 'in' to 'up' & vice versa
let switchStepButtons = document.querySelectorAll('.switch-btn');

let submitSignUp = document.querySelector('.submit-sign-up');
let submitSignIn = document.querySelector('.submit-sign-in');




toLoginBtn.addEventListener('click', e => {
	startStep.toggleVisibility();
	loginStep.toggleVisibility();
});

toRegistrationBtn.addEventListener('click', e => {
	startStep.toggleVisibility();
	registrationStep.toggleVisibility();
});

function backToStartStep() {
	startStep.toggleVisibility();
	registrationStep.hideVisibility();
	loginStep.hideVisibility();
}
console.log(backToStartButtons);


// пришлось ради двух элементов выносить функцию и делать for
backToStartButtons.forEach(backBtn => backBtn.addEventListener('click', backToStartStep));

switchStepButtons[0].addEventListener('click', e => {
	e.preventDefault;
	registrationStep.toggleVisibility();
	loginStep.toggleVisibility();
});
switchStepButtons[1].addEventListener('click', e => {
	e.preventDefault;
	registrationStep.toggleVisibility();
	loginStep.toggleVisibility();
});


