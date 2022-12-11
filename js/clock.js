const clock = document.querySelector("#clock")
let newElement = document.createElement("h2")

newElement.innerText = "테스트입니다. 새로 만들어진 엘리먼트"

document.body.appendChild(newElement)

function getClock() {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(getClock, 1000)

//clock.classList