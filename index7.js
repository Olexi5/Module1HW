"use strict";

//1
const arr1 = [1, 2, 3];
arr1[1] = 10;
console.log(arr1);
//2
const arr2 = ["hi", "bro", "hello"];
arr2.push("friends");
console.log(arr2);
//3
const arr3 = [6, 10, 49, 78];
let sum = 0;
for (let item of arr3) {
  sum += item;
}
console.log(sum);
//4
const arr4 = [1,2,3,4,5]
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i])
}
//5
const arr5 = ["hello", "hi", "rock", "friends", "interesting"]
for (let string of arr5){
    if (string.length>5){
        console.log(string)
    }
}
//6
const nums = [43,3,56,23,8,87,45,9,93,85]
let max = nums[0]
for (let num of nums){
    if(num>=max){
        max=num
    }
}
console.log("max = ",max)
//7
const nums2 = [43,93,86,74,6,7,83,6,94,85]
for (let num2 of nums2){
    if (num2%2 ===0){
        console.log(num2)
    }
}