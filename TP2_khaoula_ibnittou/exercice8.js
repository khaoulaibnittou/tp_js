/**
 *
 *
 * @param {function} f premiere fct
 * @param {function} g deuxieme fct
 */
const composer = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const incrementer = (x) => x + 1;


const doublePuisIncrementer = composer(incrementer, double);
const incrementerPuisDouble = composer(double, incrementer);


console.log(doublePuisIncrementer(5));
console.log(incrementerPuisDouble(5)); 