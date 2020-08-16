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




document.querySelector('.left-panel__switcher').addEventListener('click', e => {
  document.querySelector('.left-panel').classList.toggle('left-panel_active')
})




let toBlockButtonsArray = document.querySelectorAll('.toblock-btn');;
let blocksArray = document.querySelectorAll('.prim-blocks')

function deactivateBlock(block) {
  block.style.position = 'absolute';
  block.style.visibility = 'hidden';
  block.style.opacity = 0;
}
function activateBlock(block) {
  block.style.position = 'relative';
  block.style.visibility = 'visible';
  block.style.opacity = 1;
}

//activ //////////////
//////////// //////////
/////////////

// activate dashboard block when page loading
//activateBlock(blocksArray[0])
blocksArray[0].classList.add("activ");

for (let i = 0; i < blocksArray.length; i++) {
  toBlockButtonsArray[i].addEventListener('click', function (e) {

    toBlockButtonsArray.forEach((toBlockBtn) => {
      toBlockBtn.classList.remove("toblock-btn_active");
    });

    blocksArray.forEach((block) => {
      // deactivateBlock(block)
      block.classList.remove("activ");
    });
    
    // activateBlock(blocksArray[i]);
    toBlockButtonsArray[i].classList.add("toblock-btn_active");
    blocksArray[i].classList.add("activ");

    document.querySelector('.left-panel').classList.remove('left-panel_active')
  })
}



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