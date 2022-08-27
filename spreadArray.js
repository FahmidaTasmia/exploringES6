const number = [2,7,8,1,30,44,55,5,3];
const number2 =[32,45,88,97];
const newArray =[999,...number,...number2,7777];
// console.log(newArray);

// console.log(Math.min(...number));
const [a,b,...rest]=number;
// console.log(a,b,rest);
// console.log(rest);


const num1 = [1,2,3];
const num2 =[...num1];

num1.push(88,80);
console.log(num1,num2)