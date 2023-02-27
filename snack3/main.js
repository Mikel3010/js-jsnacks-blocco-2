// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['marco', 'luca', 'aldo']
const cognomi = ['rossi', 'bianchi', 'neri']





for (let i = 0; i < 3; i++){
    const nomeCasuale  = Math.floor(Math.random()*nomi.length);

    const cognomeCasuale  = Math.floor(Math.random()*cognomi.length);
    
    console.log(nomi[nomeCasuale] + cognomi[cognomeCasuale])
}