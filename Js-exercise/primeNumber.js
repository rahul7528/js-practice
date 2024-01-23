numb = Number(prompt('Enter your number'));
isPrime=true;
for(let i=2; i<numb; i++){
    if(numb%i == 0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log(numb + ' is a prime number')
}
else{
    console.log(numb + ' is not prime number')
}