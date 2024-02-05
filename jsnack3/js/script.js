const nameList1 = ["Arianna", "Nicolò", "Emanuele"];
console.log(nameList1)

const namelist2 = ["Cinzia", "Paolo", "Celeste", "Luca", "Marco", "Sofia"];
console.log(namelist2)

let userQuestion;
let result;

do {
    userQuestion=prompt("Inserisci un nome");

    
        nameList1.push(userQuestion);
        console.log(nameList1)
    
    
}while (nameList1.length != namelist2.length){
    result= document.querySelector("p").innerHTML = `${nameList1} <br> ha la stessa lunghezza di: <br> ${namelist2}`;
}
