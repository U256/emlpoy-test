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



//button activates only on change in form

let personSettingsForm = document.querySelector('.person-settings-form');
let personSettingsFieldsArr = document.querySelectorAll('.settings-change-field');
let submitPersonSettings = document.querySelector('.submit-profile-settings');

let notifSettingsForm = document.querySelector('.notif-settings-form');
let notifSettingsCheckboxesArr = document.querySelectorAll('.settings-checkbox');
let submitNotifSettings = document.querySelector('.submit-notif-settings');


function areRequiredFieldsFill() {
	if (
		personSettingsFieldsArr[0].value == '' ||
		personSettingsFieldsArr[1].value == '' ||
		personSettingsFieldsArr[2].value == '' ||
		!personSettingsFieldsArr[2].value.includes("@")
	) return false;
	else return true;
}

// onkeypress
personSettingsFieldsArr.forEach(field => {
	field.addEventListener('blur', e => {

		areRequiredFieldsFill() ?
			(submitPersonSettings.classList.add("active-submit-btn")
				//, submitPersonSettings.removeAttribute("disabled")
			) :
			(submitPersonSettings.classList.remove("active-submit-btn")
				//, submitPersonSettings.setAttribute("disabled", "true")
			)
	})

	field.addEventListener('focus', e => {
		// отключить крансую подсказку
	})
})


//disabled="disabled"
//Обязательные поля name 0, Last name 1, email 2 — без их заполнения кнопка Save settings не активна, и форму нельзя отправить. Поле e-mail должно удовлетворять формату e-mail — при неправильном заполнении форму отправить нельзя. Когда поле теряет фокус — вывести сообщение с ошибкой под этим полем, если таковые имеются. Отправить форму на сервер (любой). В случае ошибки вывести текст «Error. Try again» красного цвета. В случае успешной отправки — вывести текст зеленого цвета «Saved», удалить это сообщение через 5 секунд, кнопку Save Settings сделать неактивной.




notifSettingsForm.addEventListener("click", e => {
	сonsole.log(event.target) //input.checked
	// if (input.checked == true){}
})
//кнопка Save становится активной если изменились значения полей. В случае ошибки вывести текст «Error. Try again» красного цвета. В случае успешной отправки — вывести текст зеленого цвета «Saved», удалить это сообщение через 5 секунд, кнопку Save сделать неактивной.


// alert(form.elements.login); // <input name="login">

// let fieldset = form.elements.userFields;

//Для любого элемента форма доступна через element.form и наоборот form.element[index/name]




//*checkbox* onchange="document.getElementById('submit').disabled = !this.checked;"



//.active-submit-btn  - активный вид кнопочки

// function check() {
// 	if ($('#input').val() != '')
// 	$('#button').removeAttr();
//     else
// 	$('#button').attr();
// }
