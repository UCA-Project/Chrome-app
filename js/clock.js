let clock = document.querySelector("#clock");
console.log(clock);
function getClock(){
    let now = new Date();
    console.log(now)
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second =now.getSeconds()
    //consere.log(new Date())
    //clock.innerText = hour+":"+minute+":"+second
    clock.innerText = `${hour}:${minute}:${second}`
}

setInterval(getClock,1000)