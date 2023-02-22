// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
////////////////////////////////////////////////////////////
const elemsItem = document.querySelectorAll('li.item');

console.log(elemsItem);

console.log(elemsItem.length);
for (const elem of elemsItem) {
  console.log('Category:', elem.firstElementChild.textContent);
  const elemList = elem.lastElementChild;
  console.log('elements:', elemList.children.length);
}
