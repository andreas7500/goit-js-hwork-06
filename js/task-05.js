const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const updateValue = e => {
  if (e.target.value.trim()) {
    outputName.textContent = e.target.value;
  } else {
    outputName.textContent = 'Anonymous';
  }
};

inputName.addEventListener('input', updateValue);
