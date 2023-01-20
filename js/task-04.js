// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decreaseBtnEl = document.querySelector("button[data-action='decrement']");
const increaseBtnEl = document.querySelector("button[data-action='increment']");
const counterValueEl = document.querySelector("#value");

let counterValue = +counterValueEl.textContent;

const updateCounter = function () {
  counterValueEl.textContent = counterValue;
};

decreaseBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

increaseBtnEl.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
