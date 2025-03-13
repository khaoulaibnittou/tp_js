/**
 *
 *
 * @param {number} n nombre
 */
function afficherCarre(n) {
    console.log(n * n);
}
function executer(f, n) {
    f(n);
}
executer(afficherCarre, 4); 
executer(afficherCarre, 5); 