let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginForm.querySelector("#login-button")
let greeting = document.querySelector("#greeting")

loginInput.value

function onLoginSubmit(){
    let name = loginInput.value
    console.log(name)
}
loginBtn.addEventListener("click", onLoginSubmit)