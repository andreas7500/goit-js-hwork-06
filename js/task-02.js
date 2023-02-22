// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listElem = document.querySelector('#ingredients');

// const elements = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item-ingr');
//   itemEl.textContent = option;
//   return itemEl;
// });

// console.log(elements);
// listElem.append(...elements);

const makeListElm = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item-ingr');
    itemEl.textContent = option;
    return itemEl;
  });
};
const elements = makeListElm(ingredients);
listElem.append(...elements);
console.log(elements);
