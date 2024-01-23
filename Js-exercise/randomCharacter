

alphaBts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'; 

randomString ='';
for(i=0; i<alphaBts.length+1; i++){
    randomString += alphaBts[Math.floor(Math.random() * alphaBts.length)]
}console.log(randomString)

//output - vzF8fDPszJ2xup6Y15hQoaechvXlBbrSQQy2tOzF5HLtbAVgLQOqqE1wafQP5px
//Math.random - To get random number (0-0.999)
//Math.floor - convert the decimal to integer
//alphaBts[i] and here we are getting random number through this method (Math.floor(Math.random() * alphaBts.length))

// i<alphaBts.length+1; = Since length of string is 63 characters, will get the output of ramdom 63 characters 





//Solution 2
//if we need fixed number of random characters
//Change "alphaBts.length+1" to fixed number

alphaBts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'; 

randomString ='';
for(i=0; i<4; i++){
    randomString += alphaBts[Math.floor(Math.random() * alphaBts.length)]
}console.log(randomString)




// Through a function

function randomalpha(stringLen){
    alphaBts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'
    randomChar = '';
    for(let i=1; i<=stringLen; i++){
        randomChar += alphaBts.charAt(Math.floor(Math.random() * alphaBts.length))
    }console.log(randomChar)
}
randomalpha(3)

//Test