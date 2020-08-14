'use strict'

let notificationsBell = document.querySelector('.notifications-btn');
let notificationsX = document.querySelector('.close-bar__btn');

let notificationsBar = document.querySelector('.notifications-bar');



notificationsBell.addEventListener('click', e => {
	notificationsBar.classList.toggle('notifications-bar__active')
})

notificationsX.addEventListener('click', e => {
	notificationsBar.classList.remove('notifications-bar__active')
})