const readline = require('readline-sync');

let mot = readline.question("Entrez un mot : ");
let motInverse = mot.split('').reverse().join('');

let estPalindrome = mot === motInverse;
console.log(`Le mot est un palindrome : ${estPalindrome}`);