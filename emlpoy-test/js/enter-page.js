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

// без реализации
let submitSignUp = document.querySelector('.submit-sign-up');



//toLoginBtn
document.querySelector('.to-login').addEventListener('click', e => {
	startStep.toggleVisibility();
	loginStep.toggleVisibility();
});
//toRegistrationBtn
document.querySelector('.to-registration').addEventListener('click', e => {
	startStep.toggleVisibility();
	registrationStep.toggleVisibility();
});



// back from registration/login  to start step buttons
function backToStartStep() {
	startStep.toggleVisibility();
	registrationStep.hideVisibility();
	loginStep.hideVisibility();
}
document.querySelectorAll('.enter-back-btn').forEach(backBtn => backBtn.addEventListener('click', backToStartStep));



// from 'in' to 'up' & vice versa
let switchStepButtons = document.querySelectorAll('.switch-btn');

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


// sigh In teleport to main site
document.querySelector('.submit-sign-in').addEventListener('click', e => {
	e.preventDefault()
	location.assign("http://127.0.0.1:5501/index.html")
});


