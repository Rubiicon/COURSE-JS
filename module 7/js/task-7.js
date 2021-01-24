"use strict";

const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', sizeChange);

function sizeChange(event) {
  const value = event.currentTarget.value;
  text.style.fontSize = value + 'px';
  console.log(value);
}