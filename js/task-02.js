const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((el) => {
  const itemEl = document.createElement("li");

  itemEl.classList.add("item");

  itemEl.textContent = el;

  return itemEl;
});

list.append(...items);

console.log(list);
