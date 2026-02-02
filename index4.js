"use strict";
const a = prompt("Enter a string");
const b = prompt("Enter another string");
if (a.length !== 0 && b.length !== 0) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const num1 = Number(prompt("Enter a number"));
const num2 = Number(prompt("Enter another number"));
if (num1 + num2 > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const text = prompt("Enter some text");
const word = "JavaScript".toLowerCase();
if (text.toLowerCase().includes(word)) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const num = Number(prompt("Enter a number"));
if (num >= 10 && num <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const name = prompt("Enter a name that is at least 3 characters long");
const email = prompt("Enter an email");
const password = prompt("Enter a password that is at least 6 characters long");
if (name.length >= 3 && email.includes("@.") && password.length >= 6) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
