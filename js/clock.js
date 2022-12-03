let clock = document.querySelector("#clock")

function getClock() {
    let now = new Date()
    let hour = String(now.getHours()).padStart(2, "0")
    let minute = String(now.getMinutes()).padStart(2, "0")
    let second = String(now.getSeconds()).padStart(2, "0")

    clock.innerText = `${hour}:${minute}:${second}`
}

setInterval(getClock, 1000)