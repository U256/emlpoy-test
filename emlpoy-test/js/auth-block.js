'use strict'

//////// TAB SWITCH
let toTabButtonsArray = document.querySelectorAll('.to-tab-btn');
let toTabButtonsContainer = document.querySelector('.auth-top-row');
let tabsArray = document.querySelectorAll('.auth-tabs');

toTabButtonsContainer.addEventListener('click', function (e) {

	toTabButtonsArray.forEach(toTabBtn => {
		toTabBtn.classList.remove("to-tab-btn__active");
	});
	tabsArray.forEach((tab) => {
		tab.classList.remove("active-auth-tab");
	});

	e.target.classList.add("to-tab-btn__active");

	//e.target.getAttribute('rel') - button number
	tabsArray[e.target.getAttribute('rel')].classList.add("active-auth-tab");
})



//////// FORMS
let personSettingsForm = document.querySelector('.person-settings-form');
let submitPersonSettings = personSettingsForm.submitSettings;
let persSettingsFields = document.querySelectorAll('.settings-change-field');
let persSettingsFieldWrappers = document.querySelectorAll('.settings-field-wrapper');

let notifSettingsForm = document.querySelector('.notif-settings-form');
let notifSettingsCheckboxesArr = document.querySelectorAll('.settings-checkbox');
let submitNotifSettings = notifSettingsForm.submitNotifications;

function showNotice(className, innerHTML) {
	let notice = document.createElement('div');
	notice.className = className;
	notice.innerHTML = innerHTML;
	document.body.append(notice)

	setTimeout(() => notice.remove(), 5000);
}
//showNotice("error-notice", "Error. Try again")

function showHint(innerHTML, place) {
	let hint = document.createElement('div');
	hint.className = 'fill-required';
	hint.innerHTML = innerHTML;
	place.append(hint)

	setTimeout(() => hint.remove(), 4000);
}


///// Person settings form
function areRequiredFieldsFill() {
	if (
		persSettingsFields[0].value == '' ||
		persSettingsFields[1].value == '' ||
		persSettingsFields[2].value == '' ||
		!persSettingsFields[2].value.includes("@") ||
		!persSettingsFields[2].value.includes(".")
	) return false;
	else return true;
}


personSettingsForm.addEventListener('input', e => {

	if (areRequiredFieldsFill()) {
		submitPersonSettings.classList.add("active-submit-btn")
		// submitPersonSettings.removeAttribute("disabled")
	} else {
		submitPersonSettings.classList.remove("active-submit-btn")
		// submitPersonSettings.setAttribute("disabled", "true")
	}
})


personSettingsForm.addEventListener('submit', e => {

	//active-class avaliability from prev logic block uses as check for submit-btn action
	if (submitPersonSettings.classList.contains("active-submit-btn")) {
		showNotice("submit-notice", "Saved");
	}
	else {
		e.preventDefault()

		if (persSettingsFields[0].value == '') {
			showHint("Please write name", persSettingsFieldWrappers[0])
		}
		if (persSettingsFields[1].value == '') {
			showHint("Please fill", persSettingsFieldWrappers[1])
		}
		if (persSettingsFields[2].value == '') {
			showHint("Email is required", persSettingsFieldWrappers[2])
		}
		else if (!persSettingsFields[2].value.includes("@") ||
			!persSettingsFields[2].value.includes(".")) {
			showHint("...@example.com", persSettingsFieldWrappers[2])
		}
	}
})




///// Notifications settings form
function currentCheckboxesPositions(checksArr) {
	//Array with binary cells of every checkbox values

	let checksPositions = [];
	checksArr.forEach(checkbox => {
		checksPositions.push(checkbox.checked)
	});
	return checksPositions;
} // Вообще это с бэка приходит, но без такого костыля не будет нормально выглядеть

function areArraysTheSame(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] != arr2[i]) return false;
	}
	return true;
}


let checksPositionsOnLoad = currentCheckboxesPositions(notifSettingsCheckboxesArr);


notifSettingsForm.addEventListener("click", e => {


	let checksPositionsNow = currentCheckboxesPositions(notifSettingsCheckboxesArr);

	if (areArraysTheSame(checksPositionsNow, checksPositionsOnLoad)) {
		submitNotifSettings.setAttribute("disabled", "true")
		submitNotifSettings.classList.remove("active-submit-btn")
	} else {
		submitNotifSettings.removeAttribute("disabled")
		submitNotifSettings.classList.add("active-submit-btn")
	}
})











