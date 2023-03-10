// ?Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
//* Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector(".change-color");
const docEl = document.querySelector("body");
const outputEl = document.querySelector(".color");

const handleClick = (event) => {
  if (event.target.nodeName === "BUTTON") {
    docEl.style.backgroundColor = getRandomHexColor();
    outputEl.textContent = getRandomHexColor();
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", handleClick);
