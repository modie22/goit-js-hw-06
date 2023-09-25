const refs = {
    valueEl: document.querySelector("#value"),
    decrementBtn: document.querySelector('button[data-action ="decrement"]'),
    incrementBtn: document.querySelector('button[data-action ="increment"]'),
  };
let counterValue = 0;

 const decrementfunction = () => {
    refs.valueEl.textContent = counterValue--;
};

const incrementfunction = () => {
    refs.valueEl.textContent = counterValue++;
};

refs.decrementBtn.addEventListener("click", decrementfunction);
refs.incrementBtn.addEventListener("click", incrementfunction);

