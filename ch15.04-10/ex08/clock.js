(function updateClock() {
  // Update the SVG clock graphic to show current time
  let now = new Date(); // Current time
  let sec = now.getSeconds(); // Seconds
  let min = now.getMinutes() + sec / 60; // Fractional minutes
  let hour = (now.getHours() % 12) + min / 60; // Fractional hours
  let secangle = sec * 6;
  let minangle = min * 6; // 6 degrees per minute
  let hourangle = hour * 30; // 30 degrees per hour

  // Get SVG elements for the hands of the clock
  let sechand = document.querySelector("#clock .secondhand");
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  // Set an SVG attribute on them to move them around the clock face
  sechand.setAttribute("transform", `rotate(${secangle}, 50, 50)`);
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  // Run this function again in 10 seconds
  setTimeout(updateClock, 1000);
})(); // Note immediate invocation of the function here.
