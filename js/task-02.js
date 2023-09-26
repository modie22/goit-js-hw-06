const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientseulEL = document.querySelector("#ingredients");
const ingredientsCol = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");
    return liEl;
  });
};
const ingredientLiEl = ingredientsCol(ingredients);
ingredientseulEL.append(...ingredientLiEl);
