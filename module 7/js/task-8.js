"use strict";

const inputAmount = document.querySelector('#controls > input');
const render = document.querySelector('[data-action=render]');
const destroy = document.querySelector('[data-action=destroy]');
const boxes = document.querySelector('#boxes');

render.addEventListener('click', handleAmount);
destroy.addEventListener('click', destroyBoxes);

function handleAmount() {
  const amount = +inputAmount.value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  const size = 30;
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML('afterbegin', `<div></div>`);
    const box = document.querySelector('#boxes > div');
    box.style.width = size + i * 10 + 'px';
    box.style.height = size + i * 10 + 'px';
    box.style.backgroundColor = randomRGB();
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function randomRGB() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = `rgb(${r},${g},${b})`;
  return bgColor;
}