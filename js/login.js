const loginform = document.querySelector("#login");
const loginInput = loginform.querySelector("#login-input");
const loginSubmit = loginform.querySelector("#login-submit");
const welcome = document.querySelector("#welcome");


const storedName = localStorage.getItem("name");

document.querySelector("#logout").onclick = function(e) {
    
    if (storedName == null) {
        alert("로그인부터 해주세요!");
    }
    else {
        localStorage.removeItem('name');
        location.reload();
    }

}


if (storedName == null) {
    localStorage.removeItem('name');
}
else {
    const welcomeQuote = `안녕하세요. ${storedName}님!`;
    welcome.innerText = welcomeQuote;

    loginform.classList.add("hidden");
    
}



function onSubmit(event){
    const name = loginInput.value;
    //event.preventDefault();
    localStorage.setItem("name", name);

}
loginform.addEventListener("submit", onSubmit);