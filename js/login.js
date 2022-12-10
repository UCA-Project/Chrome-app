const loginform = document.querySelector("#login-form");
const logininput = loginform.querySelector("#login-input");
const loginsubmit = loginform.querySelector("#login-submit");
const logoutform = document.querySelector("#logout-form");
const logoutsubmit = logoutform.querySelector("#logout-submit");
const storename = localStorage.getItem("name");
const welcome = document.querySelector("welcome")

logoutform.addEventListener("submit",logout)
loginform.addEventListener("submit",onsubmit);

function logout(){
    localStorage.clear();
}

if(storename==null){
    logoutform.classList.add("hidden");
}
else{
    const welcomequite = `안녕하세요, $[storename]님!`;
    welcome.innerText = welcommequite;

    loginform.classList.add("hidden")
}

function onsubmit(event){
    const name = logininput.value;
    event.preventDefault();
    localStorage.setItem("name",name);
    console.log(event);
    loginform.classList.add("hidden");
    logoutform.classList.remove("hidden");
}

