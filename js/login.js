const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-input");
const loginSubmit = loginForm.querySelector("#login-submit");
const welcome = document.querySelector("#welcome");
const storedName = localStorage.getItem("name");
const logoutForm = document.querySelector("#logout-form")
const logoutSubmit = logoutForm.querySelector("#logout-submit");

if (storedName == null) {
    logoutForm.classList.add("hidden")
} else {
    const welcomeQuote = `안녕하세요, ${storedName}님!`;
    welcome.innerText = welcomeQuote;
    loginForm.classList.add("hidden");
}



function onSubmit(e) {
    //alert("submit 이벤트 발생")
    const name = loginInput.value;
    e.preventDefault();
    localStorage.setItem("name", name);
    const welcomeQuote = `안녕하세요, ${name}님!`;
    welcome.innerText = welcomeQuote;
    loginForm.classList.add("hidden");
    logoutForm.classList.remove("hidden");
}

loginForm.addEventListener("submit", onSubmit)

function onLogoutSubmit() {
    localStorage.removeItem("name");
}

logoutForm.addEventListener("submit", onLogoutSubmit)