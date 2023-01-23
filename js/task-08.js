// *Напиши скрипт управления формой логина.

//? Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
//? Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
//? Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// const formEl = document.querySelector(".login-form");

// const buttonEl = document.querySelector(".login-form button");
// const elementsEl = formEl.elements;
// const inputsEl = document.querySelectorAll(".login-form input");

// console.log(inputsEl);

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(formEl);
//   const obj = {};

//   formData.forEach((value, key) => {
//     if (!value) {
//       return alert("Bсе поля должны быть заполнены");
//     }
//     obj[key] = value;
//     event.currentTarget.reset();
//   });
//   console.log(obj);
// });

const formEl = document.querySelector(".login-form");

const buttonEl = document.querySelector(".login-form button");
const elementsEl = formEl.elements;
const inputsEl = document.querySelectorAll(".login-form input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = [...event.currentTarget.formEl].reduce(
    (formData, { element, value }) => {
      if (!value) {
        return alert("Bсе поля должны быть заполнены");
      }
      element = value;
      event.currentTarget.reset();
      return formData;
    },
    {}
  );
  console.log(formData);
});
