console.log('JS OK!');
/* 

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1- creo la funzione con una keyword
2- chiedo all'utente un nome
3- faccio un ciclo for per girare la parola
4- memorizzo la parola in una variabile
5- controllo se la parola dell'utente è uguale a quella girata 
6- restituisco true o false

*/

const write = document.getElementById('palindrom');
const userWord = prompt('Inserisci una parola').trim();


let reverseWord;
let result = `La parola ${userWord} `;



// ! FUNZIONE CHE RITORNA UN PALINDROMO 

function palindromWord(word){
   
   reverseWord = '';

   for (let i = userWord.length - 1; i >= 0; i--){
      reverseWord += userWord[i];
   }
   console.log(reverseWord);
   
   return (reverseWord);
}

// ! QUESTO SERVE PER STAMPARE LA FUNZIONE
// write.innerText = palindromWord();


if(userWord === palindromWord()){
   result +=  `è palindroma`;
   console.log('La parola è palindroma')
} else {
   result += `non è palindroma`
   console.log('La parola non è palindroma')
}


write.innerText = result;