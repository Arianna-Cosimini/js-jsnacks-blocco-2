const nameList1 = ["Arianna", "Nicolò", "Emanuele"];
console.log(nameList1)

const namelist2 = ["Cinzia", "Paolo","Luca","Celeste","Marco","Sofia"];
console.log(namelist2)

let userQuestion;
let result;

do {

    userQuestion=prompt("Inserisci un nome");

        if(nameList1.length < namelist2.length){
            
        nameList1.push(userQuestion);
        console.log(nameList1)
    
        }else if(namelist2.length < nameList1.length){
            namelist2.push(userQuestion)
        }
        

    
    
}while (nameList1.length !== namelist2.length){
    result= document.querySelector("p").innerHTML = `${nameList1} <br> ha la stessa lunghezza di: <br> ${namelist2}`;
}
