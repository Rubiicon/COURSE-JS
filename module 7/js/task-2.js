"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


function createList(arr) {
  const ulIngredients = document.querySelector('#ingredients');

  for (let i = 0; i < arr.length; ++i) {
    const li = document.createElement('li');
    ulIngredients.appendChild(li).textContent = `${arr[i]}`;
  }
}
createList(ingredients);