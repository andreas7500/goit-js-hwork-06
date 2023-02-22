const textInput = document.querySelector('#validation-input');

console.log(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', event => {
  if (Number(textInput.getAttribute('data-length')) === event.currentTarget.value.length) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else if (Number(textInput.getAttribute('data-length')) === 0) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
