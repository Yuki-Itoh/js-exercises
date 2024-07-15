function displayTime() {
  const clock = document.querySelector("#clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
displayTime();
setInterval(displayTime, 1000);
