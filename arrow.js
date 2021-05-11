// function dubleIt(number){
//  return number * 2;
// }
// const result = dubleIt(25);



// const dubleIt = function(number){
//     return number *2
// }

// arrow funtion
const dubleIt = number => number*2;
const result = dubleIt(25);
console.log(result);

const add = (x,y) => x + y;
const result2 =  add(20,40);
console.log(result2);

const give10 = () => 5;
const result3 =  give10();
console.log(result3);

const doMath = (a, b) =>{
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    return result ;
}

const result4 =  doMath(20,10);
console.log(result4);