let clock = document.querySelector(".clock");

function getClock() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();

setInterval(getClock, 1000);
