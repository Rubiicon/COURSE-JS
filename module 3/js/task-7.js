/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return ({
      id: this.transactions.length + 1,
      amount: amount,
      type: type
    });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    let type = Transaction.DEPOSIT;
    this.transactions.push(this.createTransaction(amount, type));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      let type = Transaction.WITHDRAW;
      this.transactions.push(this.createTransaction(amount, type));
    } else {
      return console.log('Недостаточно средств!');
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return console.log(this.transactions[id - 1]);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let typeBalance = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        typeBalance += transaction.amount;
      }
    }
    return console.log(`${type}: ${typeBalance}`);
  },
};


console.log(account.createTransaction(12, Transaction.DEPOSIT));
account.deposit(122);
account.deposit(13657);
account.deposit(55);
account.withdraw(112);
account.withdraw(1);
account.withdraw(3563);
account.getBalance();

console.log(account.transactions);

account.getTransactionDetails(1);
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');