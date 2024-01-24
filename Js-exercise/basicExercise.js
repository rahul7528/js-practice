//1
/////////////////////////////     REVERSE A STRING      /////////////////

var str = "I am a string"
console.log(str.split("").reverse().join(""));

//.split()- Converts string to an array   >> ['I', ' ', 'a', 'm', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']
//.reverse() - Reverse the array     >> ['g', 'n', 'i', 'r', 't', 's', ' ', 'a', ' ', 'm', 'a', ' ', 'I']
//.join("")  - Join all elements of an array into a string   >> 'gnirts a ma I'


//for loop
stng = "I am a string"
newStng = '';
for(i=stng.length-1; i >= 0; i--){
    newStng += stng[i];
}
console.log(newStng)

// Here we have started a loop from backwards. 







//2
/////////////////////////////     FACTORIAL     /////////////////

function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}

factorial(n)

//This function is checking if the input is 0 or 1 if yes it will returns 1
//If the input is above 2 then it will re-run this statement n * factorial(n-1) until we end up to 0 or 1.
//This is a concept of recursive function because of > factorial(n-1)
//function that keeps calling itself is a recursive function





//3
////////////////////////////      Palindrome      ////////////

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
   }

isPalindrome("NITIN")


