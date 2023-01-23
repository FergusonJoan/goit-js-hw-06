//? Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
//? Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
//? Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// const divControlsEl = document.querySelector("#controls");
// const formDataEl = divControlsEl.children;

// const imputForm = divControlsEl.querySelector("input");
// const creteBtnEl = divControlsEl.querySelector("button");
// const destroyBtnEl = divControlsEl.lastElementChild;

// const markup = `<div></div>`;
// creteBtnEl.addEventListener("click", (event) => {
//   if (imputForm.value <= 1 || event.target.nodeName === "BUTTON") {
//     // divControlsEl.innerHTML = markup;
//     //console.log(`value: ${imputForm.value}`);
//     console.log(markup * imputForm.value);
//   }

//   divControlsEl.insertAdjacentHTML("beforeend", markup);
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = (amount) => {};
//randomDiv.style.height = `${i * 10 + 30}px`;
