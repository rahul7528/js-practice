// let message = 'I am Rahul';

//random Characters
alphaBts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'; 
randomString ='';
for(i=0; i<4; i++){
    randomString += alphaBts[Math.floor(Math.random() * alphaBts.length)]
}console.log(randomString)


//Encode the message

function encodeMess(message){
    messReverse = message.split('').reverse().join('');
    newMess = randomString + messReverse + randomString;
    return newMess
}

encodeMess(prompt('Enter your message'));


//Decode the encoded message
function decodeMess(message){
    removeStartingString = message.slice(4);
    removeEndingString = removeStartingString.slice(0, -4);
    messReverse = removeEndingString.split('').reverse().join('');
    return messReverse
}

decodeMess(prompt('Enter your message'))
