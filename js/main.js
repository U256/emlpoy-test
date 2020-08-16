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



document.querySelector('.left-panel__switcher').addEventListener('click', e => {
  document.querySelector('.left-panel').classList.toggle('left-panel_active')
})




// let dashboardToBlockBtn = document.querySelector('.dashboard-toblock-btn');
// let usersToBlockBtn = document.querySelector('.users-toblock-btn');
// let productsToBlockBtn = document.querySelector('.products-toblock-btn');
// let authentifToBlockBtn = document.querySelector('.authentication-toblock-btn');
// let typographyToBlockBtn = document.querySelector('.typography-toblock-btn');
// let iconsImagesToBlockBtn = document.querySelector('.icons-images-toblock-btn');

// let dashboardBlock = document.querySelector('.dashboard-block');
// let usersBlock = document.querySelector('.users-block');
// let productsBlock = document.querySelector('.products-block');
// let authentifBlock = document.querySelector('.authentication-block');
// let typographyBlock = document.querySelector('.typography-block');
// let iconsImagesBlock = document.querySelector('.icons-images-block');

// let [dashboardToBlockBtn, usersToBlockBtn, productsToBlockBtn, authentifToBlockBtn, typographyToBlockBtn, iconsImagesToBlockBtn] = document.querySelectorAll('.toblock-btn');

let toBlockButtonsArray = document.querySelectorAll('.toblock-btn');;
let blocksArray = document.querySelectorAll('.prim-blocks')

console.log(toBlockButtonsArray[0].getAttribute("rel"));
console.log(blocksArray[0]);





blocksArray[0].style.display = 'flex'


for (let i = 0; i < blocksArray.length; i++) {
  toBlockButtonsArray[i].addEventListener('click', function (e) {

    toBlockButtonsArray.forEach((toBlockBtn) => {
      toBlockBtn.classList.remove("toblock-btn_active");
    });
    
    blocksArray.forEach((block) => {
      block.style.display = 'none'
    });

    blocksArray[i].style.display = 'flex'
    toBlockButtonsArray[i].classList.add("toblock-btn_active");


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