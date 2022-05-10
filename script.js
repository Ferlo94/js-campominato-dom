// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// -----------------------------------------------------

function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bombs = [];
const numberBombs = 2;
const numberAttempts = 5;

while(bombs.length < numberBombs) {
    const bomb = getRndInteger(1, 100);

    if(bombs.includes(bomb) === false ) {
        bombs.push(bomb);
    }
}

console.log(bombs);

let bombExploded = false;
let attempts = [];

while(!bombExploded && attempts.lenght < numberAttempts) {

    let userNumber;

    do {
        userNumber = Number(prompt("Inserisci un numero"));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);
    
    if (bombs.includes(userNumber)) {
        bombExploded = true;

    } else if (attempts.includes(userNumber)) {
        alert("Il numero e' gia' stato inserito!");

    } else {
        attempts.push(userNumber);
    }
}

if (bombExploded) {
    alert(`GAME OVER. Il tuo punteggio e'${attempts.length}`)
} else {
    alert("HAI VINTO!");
}