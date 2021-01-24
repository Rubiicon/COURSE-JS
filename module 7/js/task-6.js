"use strict";

const input = document.querySelector('#validation-input');
const lengthInput = input.getAttribute('data-length');


input.addEventListener('blur', valueChek);

function valueChek(event) {
  const currentValue = event.currentTarget.value;
  const valueLength = currentValue.length;

  if (lengthInput > valueLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}