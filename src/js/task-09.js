function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

const btnFun = () => {
  const rancolor = getRandomHexColor();
  spanEl.textContent = rancolor;
  bodyEl.style.backgroundColor=rancolor;
}
buttonEl.addEventListener("click", btnFun);