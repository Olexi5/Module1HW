"use strict";
//1
console.log("task 1")
const bankAccount = {
  ownerName: "Lexi",
  accountNumber: 28309,
  balance: 3200,
  deposit(money) {
    this.balance += money;
  },
  withdraw(money) {
    this.balance -= money;
  },
};
const doDepsit = confirm("Do you want to deposit?");
let depositMoney =
  doDepsit === true
    ? Number(prompt("Enter how much do you want to deposit"))
    : 0;
const doWithdraw = confirm("Do you want to withdraw?");
let withdrawMoney =
  doWithdraw === true
    ? Number(prompt("Enter how much do you want to withdraw"))
    : 0;
bankAccount.deposit(depositMoney);
bankAccount.withdraw(withdrawMoney);
console.log(bankAccount.balance);

//2
console.log("task 2");
const weather = {
  temperature: Number(prompt("Enter temperature")),
  humidity: 60,
  windSpeed: 3,
  isCold() {
    return this.temperature < 0 ? true : false;
  },
};
console.log(weather.isCold());

//3
console.log("task 3");
const user = {
  name: "Sofi",
  password: prompt('Enter your password'),
  email: prompt("Enter your email"),
  login() {
    return this.password.length >= 6 && this.email.includes("@gmail.com")
      ? "everything is alright"
      : "please check your email and password";
  },
};
console.log(user.login())

//4
console.log("task 4");
const movie = {
  title: "Wicked",
  director: "Jon M. Chu",
  year: 2024,
  rating: 7.3,
  isGood(){
    return this.rating>8? true : false
  }
};
console.log(movie.isGood())
console.log(movie)