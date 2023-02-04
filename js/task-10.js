//? Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
//? Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
//? Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

//? Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
//? Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
//? Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const divControlsEl = document.querySelector("#controls");
const boxEl = document.querySelector("#boxes");

const inputEl = document.querySelector("[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", onDestroyBoxes);

boxEl.style.display = `flex`;
boxEl.style.flexWrap = `wrap`;

function onCreateBoxes() {
  const amount = inputEl.value;
  const collectionBoxes = createBoxes(amount);
  inputEl.value = "";
  boxEl.append(...collectionBoxes);
}

function createBoxes(amount) {
  let collection = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    item.style.marginRight = `10px`;
    item.style.backgroundColor = `${getRandomHexColor()}`;
    size += 10;
    collection.push(item);
  }
  return collection;
}

function onDestroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
