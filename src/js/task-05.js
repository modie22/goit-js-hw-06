const inputText = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const textfunction = (event) => {
  if (event.currentTarget.value === "") {
    spanEl.textContent = "Anonymous";
  } else spanEl.textContent = event.currentTarget.value;
};
inputText.addEventListener("input", textfunction);
