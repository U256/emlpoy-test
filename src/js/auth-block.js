'use strict'

//////// TABs SWITCH
let toTabButtonsArray = document.querySelectorAll('.to-tab-btn');
let toTabButtonsContainer = document.querySelector('.auth-top-row');
let tabsArray = document.querySelectorAll('.auth-tabs');

toTabButtonsContainer.addEventListener('click', function (e) {

	// sift buttons, separate background clicks
	if (e.target.hasAttribute('rel')) {

		toTabButtonsArray.forEach(toTabBtn => {
			toTabBtn.classList.remove("to-tab-btn__active");
		});
		tabsArray.forEach((tab) => {
			tab.classList.remove("active-auth-tab");
		});

		e.target.classList.add("to-tab-btn__active");

		//e.target.getAttribute('rel') - button number
		tabsArray[e.target.getAttribute('rel')].classList.add("active-auth-tab");
	}
})



//////// FORMS
let personSettingsForm = document.querySelector('.person-settings-form');
let submitPersonSettings = personSettingsForm.submitSettings;
let persSettingsFields = document.querySelectorAll('.settings-change-field');
let persSettingsFieldWrappers = document.querySelectorAll('.settings-field-wrapper');

let notifSettingsForm = document.querySelector('.notif-settings-form');
let notifCheckboxesArr = document.querySelectorAll('.settings-checkbox');
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

	setTimeout(() => hint.remove(), 3000);
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

	areRequiredFieldsFill() ?
		submitPersonSettings.classList.add("active-submit-btn") :
		submitPersonSettings.classList.remove("active-submit-btn")

	// submitPersonSettings.removeAttribute("disabled")
	// submitPersonSettings.setAttribute("disabled", "true")

})


personSettingsForm.addEventListener('submit', e => {

	//active-class avaliability (from prev logic block) uses as check for submit-btn activation
	if (submitPersonSettings.classList.contains("active-submit-btn")) {

		e.preventDefault()
		persSettingsFields.forEach(input => input.value = "")
		submitPersonSettings.classList.remove("active-submit-btn")
		//prev 3 lines is nonsence/ just for imitaiton

		showNotice("submit-notice", "Saved");
	}
	else {
		e.preventDefault()	//stops form submit

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


///// Phone number mask
let numberField = document.querySelector('input[name="number"]');
numberField.addEventListener("input", mask);
numberField.addEventListener("focus", mask);
numberField.addEventListener("blur", mask);

function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		let range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}
function mask(event) {
	let matrix = "+_ (___) ___ ____",
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = this.value.replace(/\D/g, "");

	if (def.length >= val.length) val = def;
	this.value = matrix.replace(/./g, function (a) {
		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	});
	if (event.type == "blur") {
		if (this.value.length == 2) this.value = ""
	} else setCursorPosition(this.value.length, this)
};






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


let checksPositionsOnLoad = currentCheckboxesPositions(notifCheckboxesArr);

let isSteer1Set = false;
let isSteer3Set = false;
let isSteer5Set = false;

notifSettingsForm.addEventListener("click", e => {

	//checkboxes hints
	if (event.target.checked) {
		let steer = document.createElement('div');
		steer.className = 'steer-for-checkbox';

		if ((event.target == notifCheckboxesArr[1]) && !isSteer1Set) {
			steer.innerHTML = 'For your mobile or tablet device';
			event.target.parentNode.after(steer);
			isSteer1Set = true;
		}
		if ((event.target == notifCheckboxesArr[3]) && !isSteer3Set) {
			steer.innerHTML = 'Customer calls only';
			event.target.parentNode.after(steer);
			isSteer3Set = true;
		}
		if ((event.target == notifCheckboxesArr[5]) && !isSteer5Set) {
			steer.innerHTML = 'For your mobile or tablet device';
			event.target.parentNode.after(steer);
			isSteer5Set = true;
		}
	}

	//comparing checkboxes positions to activate submit btn
	let checksPositionsNow = currentCheckboxesPositions(notifCheckboxesArr);

	if (areArraysTheSame(checksPositionsNow, checksPositionsOnLoad)) {
		submitNotifSettings.setAttribute("disabled", "true")
		submitNotifSettings.classList.remove("active-submit-btn")
	} else {
		submitNotifSettings.removeAttribute("disabled")
		submitNotifSettings.classList.add("active-submit-btn")
	}
})

//NONSENCE / just for imitaiton
notifSettingsForm.addEventListener("submit", e => {

	e.preventDefault() //stops form submit
	if (!submitNotifSettings.hasAttribute("disabled")) {
		showNotice("submit-notice", "Saved");
	}
	submitNotifSettings.setAttribute("disabled", "true")
	submitNotifSettings.classList.remove("active-submit-btn")
	checksPositionsOnLoad = currentCheckboxesPositions(notifCheckboxesArr);
})









