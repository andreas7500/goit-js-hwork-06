// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".
// const refs = {
//   input: document.querySelector('#name-input'),
//   nametInput: document.querySelector('#name-output'),
// };
const input = document.querySelector('#name-input');
const nametInput = document.querySelector('#name-output');
input.addEventListener('input', function (event) {
  nametInput.textContent = event.currentTarget.value;
});
