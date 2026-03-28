"use strict";
//1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];
// Функція countItems тут
function countItems(array, condition) {
  let count = 0;
  for (let item of array) {
    condition(item) ? (count += 1) : count;
  }
  return count;
}
// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;
// Тестування
console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

//2
// Функція calculate тут
const calculate = (a, b, operation) => operation(a, b)
// Стрілкові функції для операцій тут
const add = (a, b) => a+b
const subtract = (a, b) => a-b
const multiply = (a, b) => a*b
const divide = (a, b) => b===0? "Error" : a/b
// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку

//3
const repeatMessage = (times, cb) =>{
    for(let i =0; i<times; i++){
        console.log(cb(i))
    }
}
const generator = (i) => `hi it's me, ${i+1}th time`
const generator1 = (i) => "hi it's me"
const generator2 = (i) => i*9
repeatMessage(8, generator)
repeatMessage(8, generator1)
repeatMessage(8, generator2);
//більше колбеків я не придумала

//4
let movies = ['Freddy', 'Wicked', 'Me']
function processMovies(movies, action){
    let newArr =[]
    for(let item of movies){
        action(item, movies.indexOf(item)) === undefined? false : newArr.push(action(item, movies.indexOf(item)))
    }
    return newArr
}
const isSmall = (item, i) => item.length <= i? undefined : item.substring(i, i+2)
const isBig = (item, i) => item.length>i? undefined : item.charAt()
const hi = (item, i) => item+=' hi'
console.log(processMovies(movies, isSmall))
console.log(processMovies(movies, isBig));
console.log(processMovies(movies, hi));
