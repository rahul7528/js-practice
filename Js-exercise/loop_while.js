// The while loop loops through a block of code as long as a specified condition is true

let i = 0;
while (i < 10) {    // It will run until, condition in the bracket is true
  i++;
}

// Ouput:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// Some of the use cases

// ************** User Input Validation:
/*
let userInput;
while (isNaN(userInput)) {
    userInput = prompt("Enter a number:");
}
console.log("You entered a valid number: " + userInput);
*/



// ************** Password Attempts:
/*
let password = "secret";
let attempts = 3;

while (attempts > 0) {
    let userGuess = prompt("Enter the password:");
    
    if (userGuess === password) {
        console.log("Correct password!");
        break;
    } else {
        attempts--;
        console.log("Incorrect password. " + attempts + " attempts remaining.");
    }
}
*/