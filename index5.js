"use strict";
const drink = prompt("Вибери напій (кава, чай, сік)").toLowerCase();
switch (drink) {
  case "кава":
    console.log("Насолоджуйся своєю кавою");
    break;
  case "чай":
    console.log("З чим п'єш чай?");
    break;
  case "сік":
    console.log("А який сік обрав?");
    break;
  default:
    console.log("Щось незрозуміле написав");
}

const day = prompt("Enter a day of the week").toLowerCase();
switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("It is a work day");
    break;
  case "saturday":
  case "sunday":
    console.log("Woo it is weekend");
    break;
  default:
    console.log("Invalid day");
}

const month = Number(prompt("Enter a number of the month"));
switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("It is winter");
    break
  case 3:
  case 4:
  case 5:
    console.log("It is spring");
    break
  case 6:
  case 7:
  case 8:
    console.log("It is summer");
    break
  case 9:
  case 10:
  case 11:
    console.log("It is autumn");
    break
  default:
    console.log("Invalid month");
}

const color = prompt("Введіть колір (червоний, зелений, жовтий)").toLowerCase();
switch (color) {
  case "червоний":
    console.log("стоп");
    break
  case "жовтий":
    console.log("чекати");
    break
  case "зелений":
    console.log("йти");
    break
  default:
    console.log("Неправильний колір");
}

const a = Number(prompt("Enter a number"));
const b = Number(prompt("Enter another number"));
const operator = prompt("Enter an operator");
let sum;
switch (operator) {
  case "+":
    sum = a + b;
    break
  case "-":
    sum = a - b;
    break
  case "*":
    sum = a * b;
    break
  case "/":
    if (b !== 0) {
      sum = a / b;
    }
    break
  default:
    sum = "Invalid operator";
}
console.log(sum);
