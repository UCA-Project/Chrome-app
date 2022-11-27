let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginForm.querySelector("#login-button")
let greeting = document.querySelector("#greeting")
let userName = localStorage.getItem("userName")

if(userName != null) {
    getting.innerText = `안녕하세요, ${userName}님!`
    loginForm.classList.add("hidden")
} else {
    function onLoginSubmit(e) {
        let name = loginInput.value
        console.log(name)
        e.preventDefault()
        greeting.innerText = `안녕하세요, ${name}님!`
        loginForm.classList.add("hidden")
        localStorage.setItem("userName", name)
    }
    loginForm.addEventListener("submit", onLoginSubmit)
}
/*
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
*/

