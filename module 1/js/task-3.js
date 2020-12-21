const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('пароль?');

if (ADMIN_PASSWORD === password) {
  message = 'Добро пожаловать!';
  alert(message);
} else if (password == null) {
  message = "Отменено пользователем!";
  alert(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  alert(message);
}