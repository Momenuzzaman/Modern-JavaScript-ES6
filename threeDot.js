const number = [1,2,3,4,5];
const number2 =[6,7,8,9,10];
const number3 = [11,12,13,14,15];
const allNumber = number.concat(number2).concat(number3);
console.log(allNumber);
const allNumber2 = [...number, ...number2, ...number3];
console.log(allNumber2);