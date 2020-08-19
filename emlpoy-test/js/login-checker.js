'use strict'

let loginReq = new XMLHttpRequest();

loginReq.open("GET", "https://jsonplaceholder.typicode.com/users");

loginReq.responseType = 'json';

loginReq.onload = () => {
	let usersArr = [loginReq.response];
}

loginReq.send();



//location.assign("enter-form.html")