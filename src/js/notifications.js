'use strict'

let notificationsBell = document.querySelector('.header__notifications-btn');
let notificationsX = document.querySelector('.notifications-bar__close-btn');
let notificationsBar = document.querySelector('.notifications-bar');

notificationsBell.addEventListener('click', () => {
	let isNotifBarOn = notificationsBar.classList.toggle('notifications-bar_active')

	if (isNotifBarOn) {
		setTimeout(() => {
			notificationsBar.classList.remove('notifications-bar_active')
		}, 7000)
	}
})
notificationsX.addEventListener('click', () => {
	notificationsBar.classList.remove('notifications-bar_active')
})