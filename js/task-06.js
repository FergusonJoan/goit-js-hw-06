//? Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
//* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//* Если введено подходящее количество символов, то border

const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener("blur", onInput);

function onInput(event) {
  formInputEl.classList = "";
  if (event.currentTarget.value.length === +formInputEl.dataset.length) {
    formInputEl.classList.add("valid");
  } else {
    formInputEl.classList.add("invalid");
  }
}

console.log(formInputEl);
