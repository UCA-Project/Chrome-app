let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginForm.querySelector("login-button")
let greeting = document.querySelector("#greeting")

let userName = localStorage.getItem("userName")

if(userName != null) {
    greeting.innerText = `안녕하세요, ${userName}님!`
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

// addEventListener의 기본 꼴
// 뭐.addEventListener(이벤트명, (콜백)함수)