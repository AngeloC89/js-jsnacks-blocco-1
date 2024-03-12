// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array


let inserisci = document.querySelector('.inserisci')
let stampa = document.querySelector('.stampa')
let output = document.getElementById('display')
let displayB = document.getElementById('displayB')


//questa funzione racchiude in un bottone tutto..
inserisci.addEventListener('click', function () {
    let numeroElementi = parseInt(document.getElementById('numero').value);
    elementi = [];
    ultimiCinque = [];

    //questo ciclo-for verifica che venga inserito un valore non inferiore a 6, in tal caso restituisce errore...
    for (i = 1; i <= numeroElementi; i++) {
        if (numeroElementi < 6) {
            output.innerHTML = 'inserisci un numero non inferiore a 6.';
            console.log('inserisci un numero non inferiore a 6.')
            break;
            //altrimenti prosegue
        } else {
            elementi.push(getRndInteger(1, 100));
            output.innerHTML = elementi;
            console.log(elementi);



        }

    }
    //questo ciclo-for stampa in automaticogli ultimi 5 numeri dell'array elementi
    for (i = numeroElementi - 5; i < numeroElementi; i++) {
        ultimiCinque.push(elementi[i])
        console.log(elementi[i])
        displayB.innerHTML = ultimiCinque;
    }


    //questo bottone stampa il numero di elementi scelto dall'utente
    stampa.addEventListener('click', function () {
        let numeriDaStampare = parseInt(document.getElementById('stampa').value);
        stampaUtente = []

        for (i = numeroElementi - numeriDaStampare; i < numeroElementi; i++) {
            if (numeriDaStampare > numeroElementi) {
                displayC.innerHTML = 'valore non valido.'
            } else {
                stampaUtente.push(elementi[i])
                displayC.innerHTML = stampaUtente;
                console.log(elementi[i])
            }



        }});
});