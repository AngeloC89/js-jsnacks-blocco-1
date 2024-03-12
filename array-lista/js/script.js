// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.

let frigorifero = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];


console.log(frigorifero)
//aggiungo al frigo la pesca che qualcuno ha lasciato sul tavolo
frigorifero.push('pesca')

trovato = false;
//ciclo for per cercare il cocomero nel frigo
for (i = 0; i <= frigorifero.length; i++) {
    if (frigorifero[i] === 'cocomero')
        trovato = true;
    // console.log(trovato);
};
if (trovato) {
    console.log('trovato! Devo solo preparare il cocktail.')
}
else {
    console.log('Oh No, devo uscire a comprare il comomero!');

};