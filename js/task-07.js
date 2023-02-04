//* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.valueAsNumber = textEl.style.fontSize;

rangeEl.addEventListener("input", handleSize);
console.dir(rangeEl);

function handleSize(event) {
  textEl.style.fontSize = event.target.value + "px";
}
