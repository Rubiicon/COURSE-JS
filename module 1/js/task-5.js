const country = prompt('Страна доставки?');

function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let price;

if (country === null || country === "") {
  alert('Отменено пользователем!');
} else {
  switch (capitalizeString(country)) {
    case 'Китай':
      price = 100;
      break;

    case 'Чили':
      price = 250;
      break;

    case 'Австралия':
      price = 170;
      break;

    case 'Индия':
      price = 80;
      break;

    case 'Ямайка':
      price = 120;
      break;

    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
}

if (price !== undefined) {
  alert(`Доставка в ${capitalizeString(country)} будет стоить ${price} кредитов`);
}