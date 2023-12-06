const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
// to get random numbers
// Math.random() gives number between 0-0.99
console.log((Math.random()*10) + 1);
// to get number between 1-9 we have to multiply it with 10 (0.1 * 10 = 1)
// there are chances to get 0 in random and 0*10 = 0 therefore we have to add 1
console.log(Math.floor(Math.random()*10) + 1);
// Math.floor to round off the values and get a single digit.

// Trick
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Generate random Number
// (max - min + 1) (20-10 + 1) (+ 1 to avoid 0)
// + min to atleast add min value 
