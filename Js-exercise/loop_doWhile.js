// Similar to the while loop, but it always executes the block of code at least once before checking the condition.

// It is recommended when you have to run the code atlest for once, then it checks the condition.

/*
Syntax

do {
    code block to be executed
  }
  while (condition);

*/


let i = 5;

do {
  console.log("This is iteration " + i); // It will run first time
  i++;                                   // Increment the value by 1 = 6
} while (i < 5);                         // 6 < 5 = false, loop exit

// Output:
// This is iteration 5

// Condition is false but still the code runs for first time.

