function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  let spanColor = getRandomHexColor();
  document.body.style.backgroundColor = spanColor;
  color.textContent = spanColor;
});
