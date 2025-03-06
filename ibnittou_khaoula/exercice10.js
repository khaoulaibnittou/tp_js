const readline = require('readline-sync');

let mot = readline.question("Entrez un mot : ");
let motInverse = mot.split('').reverse().join('');

console.log(`Le mot inversé est : ${motInverse}`);