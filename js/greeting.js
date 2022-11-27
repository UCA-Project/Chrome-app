let loginform =document.querySelector("#login-form")
//document.querySelector("#login-form")
let loginInput = loginForm.querySelector("#login-input")
let loginBtn = loginform.querySelector("#login-button")
let greeting = document.querySelector("#greeting")




let userName=localStorage.getItem("#localname")
if(userName!=null){
    greeting.innerText = `안녕하세요,${username}님!`
}else{
    function onLoginSubmit(e){
        console.log(e)
        let name = loginInput.value
        console.log(name)
        e.preventDefault()
        greeting.innerText = `안녕하세요,새로 오셨네요${name}님!`
        loginform.classList.add("hidden")
        localStorage.setItem("localname", name)
    }loginform.addEventListener("submit", onLoginSubmit)
}

//loginform.classList.remove("hidden")


//addEventListener의 기본꼴
//뭐.addEventListener(이벤트명,(콜백)함수)

