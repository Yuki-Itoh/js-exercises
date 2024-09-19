"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
  button.disabled = true;
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  const evtSource = new EventSource("http://localhost:3001/message");
  evtSource.onmessage = function (event) {
    messageElement.textContent = event.data;
  };

  evtSource.onerror = () => {
    button.disabled = false;
  };
}
