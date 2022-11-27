let clock = document.querySelector('#clock');
console.log(clock);


let now = new Date();
console.log(now);

now.getHours()

let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()

clock.innerText = `${hour}:${minute}:${second}`

//clock.innerText = hour + ":" + minute + ":" + second