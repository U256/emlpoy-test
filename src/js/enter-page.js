'use strict'

function toggleVisibility(context) {
	context.classList.toggle('active__step')
}
function hideVisibility(context) {
	context.classList.remove('active__step')
}

let startStep = document.querySelector('.enter-start');
let registrationStep = document.querySelector('.enter-registration');
let loginStep = document.querySelector('.enter-login');

// без реализации
let submitSignUp = document.querySelector('.submit-sign-up');



//toLoginBtn
document.querySelector('.to-login').addEventListener('click', e => {
	toggleVisibility(startStep);
	toggleVisibility(loginStep);
});
//toRegistrationBtn
document.querySelector('.to-registration').addEventListener('click', e => {
	toggleVisibility(startStep);
	toggleVisibility(registrationStep);
});



// back from registration/login  to start step buttons
function backToStartStep() {
	toggleVisibility(startStep);
	hideVisibility(registrationStep);
	hideVisibility(loginStep);
}
document.querySelectorAll('.enter-back-btn').forEach(backBtn =>
	backBtn.addEventListener('click', backToStartStep)
);


// from 'in' to 'up' & vice versa
let switchStepButtons = document.querySelectorAll('.switch-btn');

switchStepButtons.forEach(element => {

	element.addEventListener('click', e => {
		e.preventDefault;
		toggleVisibility(registrationStep);
		toggleVisibility(loginStep);
	});
});


// sighIn teleport to main site
document.querySelector('.submit-sign-in').addEventListener('click', e => {
	e.preventDefault()
	location.assign("index.html")
});


