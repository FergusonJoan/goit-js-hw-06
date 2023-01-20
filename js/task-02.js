// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

console.log(ingredientsListEl);
const newIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ingredientsListEl.append(...newIngredients);

console.log(ingredientsListEl);
