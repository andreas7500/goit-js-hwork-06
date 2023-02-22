const counter = {
  value: 0,
  increment() {
    console.log(this);
    this.value += 1;
  },
  decrement() {
    console.log(this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  console.log('click on decrement');
  counter.decrement();
  console.log(counter);
  valueElem.textContent = counter.value;
});
incrementBtn.addEventListener('click', () => {
  console.log('click on increment');
  counter.increment();
  console.log(counter);
  valueElem.textContent = counter.value;
});
