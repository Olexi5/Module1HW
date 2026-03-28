"use strict";
// //1
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// //2
// function calculateEngravingPrice(message, pricePerWord) {
//   let arr = message.split(" ");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += pricePerWord;
//   }
//   return sum;
// }
// const message = prompt("Enter your message (для 2, 3 задач)");
// const perWord = 5;
// console.log(calculateEngravingPrice(message, perWord));
// //3
// function findLongestWord(string) {
//   let arr = string.split(" ");
//   let max = arr[0];
//   for (let item of arr) {
//     if (item.length > max.length) {
//       max = item;
//     }
//   }
//   return max;
// }
// console.log(findLongestWord(message));
// //4
// function formatString(string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.replace(string.substring(40, string.length), "...");
//   }
// }
// let str = prompt("Enter a string");
// console.log(formatString(str));
// //5
// function checkForSpam(message) {
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let mes = prompt("Enter your message");
// console.log(checkForSpam(mes));
// //6
// function nums() {
//   let input = Number(prompt("Enter a number"));
//   let numbers = [];
//   let total = 0;
//   while (input) {
//     numbers.push(input);
//     input = Number(prompt("Enter a number"));
//   }
//   for (let item of numbers) {
//     total += item;
//   }
//   return total;
// }
// console.log(nums());
// //7
// function isValid(login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function isUnique(allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// function addLogin(allLogins, login) {
//   if (isValid(login)) {
//     if (isUnique(allLogins, login)) {
//       allLogins.push(login);
//       return "Логін успішно доданий!";
//     }else{
//       return "Такий логін уже використовується!";
//     }
//   } else {
//     return "Помилка! Логін повинен бути від 4 до 16 символів"
//   }
// }
// let login = prompt("Enter your login");
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// console.log(addLogin(logins, login))
