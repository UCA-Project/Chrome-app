const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("#login-input")
const loginBtn = document.querySelector("#login")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS_NAME = "hidden"
const USERNAME_KEY = "name"


const savedName = localStorage.getItem(USERNAME_KEY)



if (savedName == null) {
    function onLoginSubmit(e) {
        e.preventDefault()
        const userName = loginInput.value
        localStorage.setItem(USERNAME_KEY, userName)
        greeting.innerText = `안녕하세요, ${userName}님!`
        loginForm.classList.add(HIDDEN_CLASS_NAME)
    }
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    greeting.innerText = `안녕하세요, ${savedName}님!`
    loginForm.classList.add(HIDDEN_CLASS_NAME)
}

const 

// userName : '이원준'