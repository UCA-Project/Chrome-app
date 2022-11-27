let clock = document.querySelector("#clock");
console.log(clock);
function getClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    clock.innerText =`${hour}:${minute}:${second}`
}

setInterval(getClock, 1000)

