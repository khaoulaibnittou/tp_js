const readline = require('readline-sync');

let heures = parseInt(readline.question("Entrez les heures : "));
let minutes = parseInt(readline.question("Entrez les minutes : "));
let secondes = parseInt(readline.question("Entrez les secondes : "));

let totalSecondes = heures * 3600 + minutes * 60 + secondes;
console.log(`La durée totale en secondes est : ${totalSecondes}`);