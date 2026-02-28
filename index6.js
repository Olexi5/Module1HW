"use strict";
//1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//2
for (let i = 2; i < 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
//3
for (let i = 0; i <= 10; i++) {
  console.log(`7*${i} = ${7 * i}`);
}
//4
const n = Number(prompt("Enter n"));
for (let i = 0; ; i++) {
  if (i >= n) {
    break;
  }
  console.log(i)
}
//5
let k = 0
while(k<20){
  k++
  if(k%3===0){
    continue
  }
  console.log(k)
}
