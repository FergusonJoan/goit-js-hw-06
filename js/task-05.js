//* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputFormEl = document.querySelector("#name-input");
const outputTitleEl = document.querySelector("#name-output");

inputFormEl.addEventListener("input", (event) => {
  outputTitleEl.textContent = event.currentTarget.value.trim();
  if (!outputTitleEl.textContent) {
    outputTitleEl.textContent = "Anonymous";
  }
});
