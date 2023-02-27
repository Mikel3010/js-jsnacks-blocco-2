// JSsnack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


const numero = Number(prompt('inserisci numero'));


if(numero % 2 === 0){
    console.log(numero)
}
else{
    const numeroDispari = numero + 1 
    console.log(numeroDispari)
}