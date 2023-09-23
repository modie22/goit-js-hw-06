const categoriesulEl = document.querySelector("#categories");
const childrenulEl = categoriesulEl.children;
console.log(`Number of categories: ${childrenulEl.length}`);

const itemliEl = document.querySelectorAll(".item");
console.log(itemliEl);
itemliEl.forEach((liel) => {
  console.log(`Category: ${liel.firstElementChild.textContent}`);
  console.log(`Elements: ${liel.lastElementChild.children.length}`);
});
