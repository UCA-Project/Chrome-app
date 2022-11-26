let loginForm = document.querySelector("#login-form");
let loginInput = document.querySelector("#login-input");
let loginBtn = document.querySelector("#login");
let greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  let userName = loginInput.value;
  alert(`Hello ${userName}`);
  event.preventDefault();
}
loginForm.addEventListener("submit", onLoginSubmit);
