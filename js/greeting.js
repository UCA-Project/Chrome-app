let loginForm = document.querySelector("#login-form");
let loginInput = document.querySelector("#login-input");
let loginBtn = document.querySelector("#login");
let greeting = document.querySelector("#greeting");
let savedName = localStorage.getItem("userName");

if (savedName == null) {
  function onLoginSubmit(event) {
    event.preventDefault();
    let userName = loginInput.value;
    localStorage.setItem("userName", userName);

    greeting.innerText = `HI ${userName}`;
  }
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `HI ${userName}`;
}
