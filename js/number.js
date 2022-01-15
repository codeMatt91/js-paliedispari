/*

Pari e Dispari
L’ utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.

1- chiediamo all'utente se pari o dispari
2- chiediamo di inserire un numero
3- generiamo un numero da 1 a 5 per il pc
4- sommiamo il risultato 
5- usaimo una funzione per dire se il risultato è pari o dispari
6- dichiariamo chi ha vinto

*/
// !RECUPERIAMO DAL DOMDOVE SCRIVERE

const write = prompt('Inserisci pari o dispari').trim().toUpperCase()
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
const response = document.getElementById('response');

console.log(`io ho inserito: ${write}`);
console.log(`io ho inserito: ${userNumber}`);

// !VALORI RECUPERATI DAL PC 
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(`il pc ha inserito: ${pcNumber}`);


const sum = userNumber + pcNumber;
console.log(`La somma uscita è : ${sum}`);

// !FUNZIONE PER RITORNARE PARI O DISPARI 
function returnEvenOrShots(number) {

   let response;
   if(number % 2 === 0){
      return response = 'PARI'; 
   } else {
      return response = 'DISPARI'
   }
}

if (returnEvenOrShots(sum) === 'PARI' && write === 'DISPARI'){
   response.innerText = `Ha vinto il pc!`;
} else if (returnEvenOrShots(sum) === 'PARI' && write === 'PARI') {
   response.innerText = `Hai vinto tu!`;
} else if (returnEvenOrShots(sum) === 'DISPARI' && write === 'DISPARI') {
   response.innerText = `Hai vinto tu!`;
} else if (returnEvenOrShots(sum) === 'DISPARI' && write === 'PARI') {
   response.innerText = `Ha vinto il pc!`;
} else {
   response.innerText = `PAREGGIO!`;
}