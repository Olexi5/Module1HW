"use strict";
// //6
// const products = [
//   { name: "apple", price: 20, quantity: 6 },
//   { name: "banana", price: 25, quantity: 4 },
//   { name: "orange", price: 30, quantity: 2 },
// ];
// function calculateTotalPrice(allProdcuts, productName) {
//   for (let item of allProdcuts) {
//     if (item.name === productName) {
//       return item.price * item.quantity;
//     }
//   }
// }
// console.log(calculateTotalPrice(products, "banana"));

// //5
// function getAllPropValues(arr, prop) {
//   let propArr = [];
//   for (let item of arr) {
//     if (Object.keys(item).includes(prop)) {
//       propArr.push(item[prop]);
//     } else {
//       return "No such property";
//     }
//   }
//   return propArr;
// }
// console.log(getAllPropValues(products, "quantity"));

// //4
// const salary = {
//   ivan: 15000,
//   lisa: 50000,
//   felix: 55000,
//   petro: 30000,
// };
// function countTotalSalary(obj) {
//   let sum = 0;
//   for (let value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(countTotalSalary(salary));

// //3
// const employees = {
//   ivan: 6,
//   lisa: 11,
//   felix: 8,
//   petro: 9,
// };
// function findBestEmployee(employees) {
//   let max = Object.values(employees)[0];
//   for (let num of Object.values(employees)) {
//     max = num > max ? num : max;
//   }
//   for (let item in employees) {
//     if (employees[item] === max) {
//       return item;
//     }
//   }
// }
// console.log(findBestEmployee(employees));

// //2
// const book = {
//   title: "Six of crows",
//   author: "Li Bardugo",
//   genre: "fantasy",
//   year: 2015,
// };
// function countProps(obj) {
//   let count = 0;
//   for (let i =0; i<Object.keys(obj).length; i++) {
//     count += 1;
//   }
//   return count
// }
// console.log(countProps(book))

// //1
// const user={
//     hobby: "dancing",
//     premium: true,
//     doing(){
//         this.mood = 'happy'
//         this.hobby = "skydiving";
//         this.premium = false
//         for(let item of Object.keys(user)){
//             console.log(`${item}: ${this[item]}`)
//         }
//     }
// }
// user.doing()