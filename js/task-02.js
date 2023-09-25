const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientseulEL = document.querySelector("#ingredients");
//const inEl = [];
//for(let i=0;i<ingredients.length;i++){
//  inEl.push(document.createElement('li'));
//  inEl[i].textContent=ingredients[i];
//  inEl[i].classList.add('item');
//}
//ingredientseulEL.append(...inEl);
//console.log(ingredientseulEL);
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
