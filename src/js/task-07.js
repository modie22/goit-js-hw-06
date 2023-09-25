const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
spanRef.style.fontSize = `55px`;
const textFun = (events) => {
  console.log((spanRef.style.fontSize = `${events.currentTarget.value}px`));
};
inputRef.addEventListener("input", textFun);
