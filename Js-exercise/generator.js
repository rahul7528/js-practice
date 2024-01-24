
//Theory

// Generator is defined to handle asynchronous code (can pause its work and then continue later). 
// Almost works the same as Async/Await but with different syntax.
// Useful in scenarios where you want to produce a sequence of values over time like printing numbers from 1-1000.



function* myGenerator() {
    yield 1; // Pauses here and returns 1
    yield 2; // Pauses here and returns 2
    yield 3; // Pauses here and returns 3
  }
  
  // Using the generator
  const gen = myGenerator();
  
  console.log(gen.next()); // Outputs: { value: 1, done: false }
  console.log(gen.next()); // Outputs: { value: 2, done: false }
  console.log(gen.next()); // Outputs: { value: 3, done: false }
  console.log(gen.next()); // Outputs: { value: undefined, done: true }
  


  //"function*" - syntax is used to create a generator function.
  //yield & next() - whenever we make a call to .next() function it will take out the value from yield. 

  

//// Example 2 
//// Generating infinite number

function* myGenerator(){
    let i = 0;
    while(true){
         yield i++;
    }
}

const infGen = myGenerator();

console.log(infGen.next().value); // Outputs: 0
console.log(infGen.next().value); // Outputs: 1

// No matter how many time I run this console statement will it give me the incremented value.

