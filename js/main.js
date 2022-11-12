const clock = document.querySelector(".clock");

function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();

  clock.innerText = `${hour}:${minute}:${seconds}`;
}

setInterval(getTime, 1000);
