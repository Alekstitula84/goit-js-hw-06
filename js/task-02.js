const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElem = document.getElementById("ingredients");



for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  ulElem.appendChild(liElem);
  liElem.classList.add("item")
}

