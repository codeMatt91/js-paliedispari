console.log('JS OK!')

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

const userInput = document.getElementById('palindrom');
const generate = document.getElementById('generate');
let response = document.getElementById('response');



// ! FUNZIONE CHE RITORNA UN PALINDROMO 

function palindromWord(word) {

    reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    console.log(reverseWord);

    return (reverseWord);
}


generate.addEventListener('click', function() {


    const wordInput = userInput.value;
    const wordReverse = palindromWord(wordInput);
    let result = `La parola ${wordInput} `;

    if (wordInput === wordReverse) {
        result += `è palindroma`;
        response.innerText = result;
    } else {
        result += `non è palindroma`;
        response.innerText = result;
    }
})