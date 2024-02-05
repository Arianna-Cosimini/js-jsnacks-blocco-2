let numbers = [];
let sum = 0;

do {
    userNumber = Number(prompt("Inserisci un numero"));

    if(!isNaN(userNumber) && userNumber < 50){
        numbers.push(userNumber);
        sum += userNumber;
    }else{
        alert("inserisci un numero valido")
    }
}while(sum < 50);

console.log(numbers)
console.log(sum)