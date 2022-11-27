let loginForm = document.querySelector("#login-form")
let loginInput = loginForm.quertSelector("#login-input")
let loginBtn = loginForm.quertSelector("#login-button")
let greeting = document.querySelector("#greeting")




let userName= localStorage.setItem("userName")

if(localStorage.getItem("userName") != null) {
    greeting.innerText = `안녕하세요, %{userName}님`
    loginForm.classList.add("hidden")
}
else{
    function onLoginSubmit(e) {
    let name = loginInput.value
    console.log(name)
    e.preventDefault()
    greeting.innerText = `안녕하세요, %{name}님`
    loginForm.classList.add("hidden")
    localStorage.setItem("userName", name)
    }      
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
loginForm.addEventListener("submit", onLoginSubmit)