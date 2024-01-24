// Introduced in ECMAScript 2015 (ES6), it is used for iterating over iterable objects, like arrays or strings. It provides a more concise syntax compared to the traditional for loop.
// This loop gives value on iteration


// 1 **************  (Sum of Array)

arr = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(let element of arr){
    sum += element;
}
console.log("The sum is: " + sum);




// 2 ************** (Filter odd number)

arr = [1,2,3,4,5,6,7,8,9,10]
evenNum= []
for(let num of arr){
    if(num%2 == 0){
        evenNum.push(num)
    }
}console.log(evenNum)

