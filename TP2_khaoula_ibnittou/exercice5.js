/**
 *
 *
 * @param {number} n nombre
 * @return {number} resultat
 */
function factorielle(n) {
    if (n <= 1) {
        return 1;}
    return n * factorielle(n - 1);
}
console.log(factorielle(5)); 
console.log(factorielle(3)); 
console.log(factorielle(1)); 