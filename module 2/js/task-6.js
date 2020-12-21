let input;
let numbers = [];
let total = 0;

do {
  input = prompt('Введите число!');
  if (!isNaN(input) && !isNaN(parseInt(input, 10))) {
    numbers.push(input);
  } else if (input != null) {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input != null);

for (let i = 0; i < numbers.length; i++) {
  total = total + parseInt(numbers[i]);
}
console.log(numbers);
alert(`Общая сумма чисел равна ${total}`);