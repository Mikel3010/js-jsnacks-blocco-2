let somma = 0;
let count = 1;
while (count <= 5){
    const input = Number(prompt(`inserisci numero(${count})`));
    if(!isNaN(input)){
        somma += input;
        count++;
    }
}

alert(somma);