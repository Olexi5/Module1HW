"use strict";
//1.4
console.log("Тема 13")
console.log("Задача 1")
const salary = {
  ivan: 15000,
  lisa: 50000,
  felix: 55000,
  petro: 30000,
};
function countTotalSalary(obj) {
  const { ivan, lisa, felix, petro } = obj;
  const sum = ivan + lisa + felix + petro;
  return sum;
}
console.log(countTotalSalary(salary));

//2
console.log("Задача 2");
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    return {
      id: this.transactions.length>0?this.transactions[this.transactions.length-1].id+1:0,
      amount,
      type,
    };
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
    if (amount > this.balance) {
      console.log("зняття такої суми не можливо, недостатньо коштів");
      return;
    }
    this.balance -= amount;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if ((item.id === id)) {
        return item;
      }
    }
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (let item of this.transactions) {
      if ((item.type === type)) {
        sum += item.amount;
      }
    }
    return sum
  },
};
account.deposit(5000)
account.withdraw(500)
account.deposit(8900)
account.withdraw(300)
console.log(account.getBalance())
console.log(account.getTransactionDetails(3))
console.log(account.getTransactionTotal('deposit'))
