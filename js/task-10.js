const refs = {
  amountEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};
console.log(refs.createEl);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let elem = document.createElement('div');

    elem.style.width = 30 + 10 * i + 'px';
    elem.style.height = 30 + 10 * i + 'px';
    elem.style.backgroundColor = getRandomHexColor();

    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener('click', function () {
  let amount = refs.amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener('click', function () {
  refs.boxesEl.innerHTML = '';
  refs.amountEl.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
