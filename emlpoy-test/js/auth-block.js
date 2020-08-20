'use strict'

let toTabButtonsArray = document.querySelectorAll('.to-tab-btn');
let toTabButtonsContainer = document.querySelector('.auth-top-row');
let tabsArray = document.querySelectorAll('.auth-tabs');

toTabButtonsContainer.addEventListener('click', function (e) {

	toTabButtonsArray.forEach((toTabBtn) => {
		toTabBtn.classList.remove("to-tab-btn__active");
	});
	tabsArray.forEach((tab) => {
		tab.classList.remove("active-auth-tab");
	});

	e.target.classList.add("to-tab-btn__active");

	//e.target.getAttribute('rel') - button number
	tabsArray[e.target.getAttribute('rel')].classList.add("active-auth-tab");
})