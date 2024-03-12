//Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let longArray = [1,2,3,4,5,6,7,8,9,10];

let shortArray = [1,2,3,4,5];

let aDiff = longArray.length - shortArray.length;
console.log(aDiff);

for(i = 0; i < aDiff; i++){
    shortArray.push(getRndInteger(1, 100));
    console.log(shortArray);


};
