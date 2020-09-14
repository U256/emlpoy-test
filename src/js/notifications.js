'use strict'

let notificationsBell = document.querySelector('.header__notifications-btn');
let notificationsX = document.querySelector('.close-bar__btn');
let notificationsBar = document.querySelector('.notifications-bar');

notificationsBell.addEventListener('click', () => {
	let isNotifBarOn = notificationsBar.classList.toggle('notifications-bar__active')

	if (isNotifBarOn) {
		setTimeout(() => {
			notificationsBar.classList.remove('notifications-bar__active')
		}, 6000)
	}
})
notificationsX.addEventListener('click', () => {
	notificationsBar.classList.remove('notifications-bar__active')
})