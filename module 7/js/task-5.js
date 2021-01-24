"use strict";

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.dir(output);

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = inputValue;
  }
}