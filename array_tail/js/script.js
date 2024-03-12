// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array



let numeroElementi = parseInt(prompt('inserisci il numero di elementi: '));
//numeridastampare chiede all'utente quanti elementi vuole stampare dalla array creata
let numeriDaStampare = parseInt(prompt('quanti elementi vuoi stampare?'))
let elementi = [];


for(i = 0; i <= numeroElementi; i++){
    if (numeroElementi < 6){
        console.log('inserisci un numero non inferiore a 6.')
        break;
    }else{
        elementi.push(getRndInteger(1, 100));
        console.log(elementi);
    }

};
for(i = numeroElementi - numeriDaStampare; i < numeroElementi; i++){
    console.log(elementi[i])
};