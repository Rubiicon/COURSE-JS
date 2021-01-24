"use strict";

const quantityCategories = document.querySelectorAll('.item').length;
const categories = document.querySelectorAll('h2');

console.log(`В списке ${quantityCategories} категории.`);


categories.forEach(element => {
  const nameCategories = element.innerHTML;
  const countCategories = element.nextElementSibling.children.length;

  console.log(`Категория: ${nameCategories}
Количество элементов: ${countCategories}.`);
});