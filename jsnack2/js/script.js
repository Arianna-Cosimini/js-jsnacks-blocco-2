const computerChoice = Math.floor(Math.random() * 100) + 1;
    console.log(computerChoice)
    let userChoice;
    let tentativi = 0;
    const near = 10;
    let result = document.querySelector("p");

do {
    
    userChoice = Number(prompt("Scegli un numero da 1 a 100"));
    
    if (userChoice > computerChoice) {
       alert ("Il numero che hai inserito é troppo alto! <br> Non scoraggiarti, RIPROVA!" )
    } else if (userChoice < computerChoice) {
       alert ("Il numero che hai inserito é troppo basso! <br> Non scoraggiarti, RIPROVA!") 

    } else {
        console.log(`${userChoice} è uguale a ${computerChoice}`)
    }

    const differenza = Math.abs(userChoice - computerChoice);
    if (differenza <= near) {
       alert ("Dai che ci sei vicino!" )
    }
    tentativi++;


} while (userChoice !== computerChoice);