let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginForm.querySelector("#login-button")
let greeting = document.querySelector("#greeting")
let userName = localStorage.getItem("userName")

let logoutBtn = document.querySelector("#logout-button")


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
    logoutBtn.classList.add("hidden")
}

logoutBtn.addEventListener("click", LGOUT)
if(userName != null) {
    logoutBtn.classList.remove("hidden")
    function LGOUT(f) {
        f.preventDefault()
        if(prompt("로그아웃 하시겠습니까?") == "yes"){
            localStorage.clearItem("userName")
            logoutBtn.classList.add("hidden")
        }
    }
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

