const oninput = document.querySelector("input#validation-input");
const symbolLength = Number(oninput.dataset.length);

const textfunction = (events) => {
  if (events.currentTarget.value.length === symbolLength) {
    oninput.classList.add("valid");
    oninput.classList.remove("invalid");
  } else {
    oninput.classList.add("invalid");
    oninput.classList.remove("valid");
  }
};
oninput.addEventListener("blur", textfunction);
