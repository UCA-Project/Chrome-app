const clock = document.querySelector(".clock");


function getTime() {
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

//clock.innerText = hour+":"+minute+":"+second
clock.innerText = `${hour}:${minute}:${second}`
}

setInterval(getTime, 1000)