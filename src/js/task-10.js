function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
const step = document.querySelector("input[step]");
divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.marginTop = "30px";
divBoxesEl.style.flexDirection = "column";

const createBoxes = () => {
  divBoxesEl.innerHTML = "";
  let divArray = [];
  let sizeDefault = 20;
  const error = `enter number from ${inputNumberEl.min} to ${inputNumberEl.max}`;
  if (
    Number(inputNumberEl.value) >= Number(inputNumberEl.min) &&
    Number(inputNumberEl.value) <= Number(inputNumberEl.max)
  ) {
    for (let i = 0; i < inputNumberEl.value; i += 1) {
      sizeDefault += 10;
      divArray.push(
        `<div class ='elem' style='height: ${sizeDefault}px; background-color: ${getRandomHexColor()}; width: ${sizeDefault}px'></div>`
      );
    }
    divBoxesEl.insertAdjacentHTML("afterbegin", divArray.join(""));
  } else {
    divBoxesEl.insertAdjacentHTML("afterbegin", error);
  }
};

const destroyBoxes = () => {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
};
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
