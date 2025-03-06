const readline = require('readline-sync');

let mot = readline.question("Entrez un mot : ");
console.log(`La longueur du mot est : ${mot.length}`);