const credit = 23580;
const pricePerDroid = 3000;
const amount = prompt('Количество дроидов, для покупки?');

if (amount === null) {
  alert('Отменено пользователем!');
} else {
  let totalPrice = amount * pricePerDroid;
  if (totalPrice > credit) {
    alert('Недостаточно средств на счету!');
  } else {
    let balance = credit - totalPrice;
    alert(`Вы купили ${amount} дроидов, на счету осталось 
    ${balance} кредитов.`);
  }
}