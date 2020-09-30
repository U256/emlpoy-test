"use strict";

//JS-функция определения поддержки WebP
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


//logout
document.querySelector(".header__logout-btn").addEventListener("click", () => {
  location.assign("enter-page.html");
});


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

//////
