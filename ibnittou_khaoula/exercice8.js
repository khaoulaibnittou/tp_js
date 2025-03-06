const readline = require('readline-sync');

let prixHT = parseFloat(readline.question("Entrez le prix hors taxe : "));
let tauxTVA = parseFloat(readline.question("Entrez le taux de TVA (en %) : "));

let prixTTC = prixHT * (1 + tauxTVA / 100);
console.log(`Le prix TTC est : ${prixTTC.toFixed(2)}`);