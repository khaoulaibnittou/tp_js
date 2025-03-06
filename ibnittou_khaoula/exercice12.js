const readline = require('readline-sync');

let note1 = parseFloat(readline.question("Entrez la première note : "));
let coefficient1 = parseFloat(readline.question("Entrez le coefficient de la première note : "));

let note2 = parseFloat(readline.question("Entrez la deuxième note : "));
let coefficient2 = parseFloat(readline.question("Entrez le coefficient de la deuxième note : "));

let note3 = parseFloat(readline.question("Entrez la troisième note : "));
let coefficient3 = parseFloat(readline.question("Entrez le coefficient de la troisième note : "));

let moyennePonderee = (note1 * coefficient1 + note2 * coefficient2 + note3 * coefficient3) / (coefficient1 + coefficient2 + coefficient3);
console.log(`La moyenne pondérée est : ${moyennePonderee.toFixed(2)}`);