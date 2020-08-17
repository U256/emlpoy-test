'use strict'

let notificationsBell = document.querySelector('.notifications-btn');
let notificationsX = document.querySelector('.close-bar__btn');
let notificationsBar = document.querySelector('.notifications-bar');

notificationsBell.addEventListener('click', e => {
  let isNotifBarOn = notificationsBar.classList.toggle('notifications-bar__active')

  if (isNotifBarOn) {
    setTimeout(() => {
      notificationsBar.classList.remove('notifications-bar__active')
    }, 6000)
  }
})
notificationsX.addEventListener('click', e => {
  notificationsBar.classList.remove('notifications-bar__active')
})

////////////////////////////////
document.querySelector('.left-panel__switcher').addEventListener('click', e => {
  document.querySelector('.left-panel').classList.toggle('left-panel_active')
})
////////////////////////////


/////////////////////////////////
document.querySelector('.logout-btn').addEventListener('click', e => {
  location.assign("http://127.0.0.1:5501/enter-form.html")
});

document.querySelector('.submit-sign-in').addEventListener('click', e => {
  e.preventDefault()
  location.assign("http://127.0.0.1:5501/index.html")
});
/////////////////////////////////


/////////////////////////
let toBlockButtonsArray = document.querySelectorAll('.toblock-btn');;
let blocksArray = document.querySelectorAll('.prim-blocks')
let toBlockButtonsContainer = document.querySelector('.left-panel__toblock-links')

toBlockButtonsContainer.addEventListener('click', function (e) {

  toBlockButtonsArray.forEach((toBlockBtn) => {
    toBlockBtn.classList.remove("toblock-btn_active");
  });
  blocksArray.forEach((block) => {
    block.classList.remove("active-prim-block");
  });

  e.target.classList.add("toblock-btn_active");

  //e.target.getAttribute('rel') - button number
  blocksArray[e.target.getAttribute('rel')].classList.add("active-prim-block");

  document.querySelector('.left-panel').classList.remove('left-panel_active')
})



////////////////////////////
// async function showAvatar() {

//   // запрашиваем JSON с данными пользователя
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();