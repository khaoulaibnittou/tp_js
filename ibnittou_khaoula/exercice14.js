const readline = require('readline-sync');

let prenom = readline.question("Entrez votre prénom : ");
let anneeNaissance = readline.question("Entrez votre année de naissance : ");

let motDePasse = `${prenom}${anneeNaissance}!`;
console.log(`Votre mot de passe est : ${motDePasse}`);                                