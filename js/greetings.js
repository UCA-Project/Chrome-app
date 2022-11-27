let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginForm.querySelector("#login-button")
let greeting = document.querySelector("#greeting")


function onLoginSubmit(e){
    let name = loginInput.value
    console.log(name)
    console.log(e)
    e.preventDefault()
    greeting.innerText = `안녕하세요, ${name}님!`
    loginForm.classList.add("hidden")
}
loginForm.classList.remove("hidden")
loginForm.addEventListener("submit", onLoginSubmit)