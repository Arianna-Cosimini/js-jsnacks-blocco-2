
let userInput;
let result = document.querySelector("p");
    userInput=Number(prompt("inserisci un numero"));

    if (!isNaN(userInput)){
        if(userInput % 2 == 0){
            result.innerHTML = `Inserito numero pari: <br> ${userInput}`

        }else{
            userInput + 1;
            result.innerHTML = `Inserito numero dispari a cui abbiamo aggiunto 1: <br> ${userInput + 1}`
        }
    }else {
        alert ("Inserisci un numero valido");
    }

