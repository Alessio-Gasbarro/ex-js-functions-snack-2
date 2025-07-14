// 🏆 Snack 1 - Funzioni di somma
// 1. Funzione dichiarativa
function somma(a, b) {
    return a + b;
}

// 2. Funzione anonima assegnata a una variabile
const sommaAnonima = function (a, b) {
    return a + b;
};

// 3. Arrow function
const sommaArrow = (a, b) => a + b;

// 🏆 Snack 2 - Arrow function che calcola il quadrato di un numero
const quadrato = n => n * n;

// 🏆 Snack 3 - Funzione eseguiOperazione con callback
const sommaCB = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log("Snack 3:", eseguiOperazione(3, 4, sommaCB)); // Output: 7
console.log("Snack 3:", eseguiOperazione(3, 4, moltiplica)); // Output: 12

// 🏆 Snack 4 - Funzione creaTimer che restituisce un setTimeout
function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Snack 4: Tempo scaduto!");
        }, tempo);
    };
}

const timer = creaTimer(2000);
//timer(); Con questo testo il timer

// 🏆 Snack 5 - Funzione stampaOgniSecondo con setInterval
function stampaOgniSecondo(messaggio) {
    setInterval(() => {
        console.log("Snack 5:", messaggio);
    }, 1000);
}

// stampaOgniSecondo("Ciao");

// 🏆 Snack 6 - Contatore automatico con setInterval
function creaContatoreAutomatico(intervallo) {
    return function () {
        let contatore = 0;
        setInterval(() => {
            contatore++;
            console.log("Snack 6 - Contatore:", contatore);
        }, intervallo);
    };
}

// Esempio di utilizzo
// const startContatore = creaContatoreAutomatico(1000);
// startContatore();

// 🏆 Snack 7 - Funzione che ferma un timer dopo un certo tempo
function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const intervallo = setInterval(() => {
        console.log("Snack 7:", messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(intervallo);
        console.log("Snack 7: Timer fermato!");
    }, tempoStop);
}

// Esempio di utilizzo
// eseguiEferma("Messaggio", 1000, 5000);

// 🎯 Snack 8 (Bonus) - Conto alla rovescia
function contoAllaRovescia(n) {
    const timer = setInterval(() => {
        if (n > 0) {
            console.log("Snack 8:", n);
            n--;
        } else {
            console.log("Snack 8: Tempo scaduto!");
            clearInterval(timer);
        }
    }, 1000);
}

// Esempio di utilizzo
// contoAllaRovescia(5);

// 🎯 Snack 9 (Bonus) - Sequenza di operazioni con ritardo
function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((op, index) => {
        setTimeout(() => {
            console.log("Snack 9:");
            op();
        }, intervallo * index);
    });
}

// Esempio di utilizzo
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);

// 🎯 Snack 10 (Bonus) - Throttler
function creaThrottler(fn, limite) {
    let ultimoEseguito = 0;

    return function () {
        const adesso = Date.now();
        if (adesso - ultimoEseguito >= limite) {
            ultimoEseguito = adesso;
            fn();
        }
    };
}

// Esempio di utilizzo
const throttledLog = creaThrottler(() => console.log("Snack 10: Eseguito!"), 2000);
// throttledLog();
// setTimeout(throttledLog, 2500);