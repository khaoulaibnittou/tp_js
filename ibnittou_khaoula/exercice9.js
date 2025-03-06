const readline = require('readline-sync');

let prefixe = readline.question("Entrez le préfixe de la facture : ");
let numeroBase = readline.question("Entrez le numéro de base : ");
let suffixe = readline.question("Entrez le suffixe : ");

let numeroFacture = `${prefixe}-${numeroBase}-${suffixe}`;
console.log(`Le numéro de facture complet est : ${numeroFacture}`);