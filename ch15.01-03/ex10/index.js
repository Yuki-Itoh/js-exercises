const front = document.querySelector("#editor-front");
const back = document.querySelector("#editor-back");

front.addEventListener("click", () => {
  back.focus();
});

back.addEventListener("focus", () => {
  front.style.backgroundColor = "silver";
});

back.addEventListener("blur", () => {
  front.style.backgroundColor = "white";
});

back.addEventListener("input", () => {
  console.log(`input: value=${back.value}`);
  front.textContent = back.value;
});
