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