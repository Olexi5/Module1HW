"use strict";
const celsius = 20;
const farenheit = celsius * 1.8 + 32;
console.log(farenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(
  `In a month with ${daysInMonth} days there are ${hoursInMonth} hours or ${minutesInMonth} minutes`,
);

let health = 100;
let energy = 100;
health -= 10;
energy -= 40;
console.log(`Your character has ${health} health and ${energy} energy`);

const totalPrice = 40;
const discount = 0.1;
const discountedPrice = totalPrice - (totalPrice * discount)
console.log(discountedPrice)

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber)
console.log(roundedDown);

const floatString = "45.67"
const parsedFloat = parseFloat(floatString)
console.log(parsedFloat)

const intString = "123"
const parsedInt = parseInt(intString)
console.log(parsedInt)

const number = 25
const sqrtNumber = Math.sqrt(number)
console.log(sqrtNumber)

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber)
const convertedString = String(integer)
console.log(convertedInt)
console.log(convertedString)