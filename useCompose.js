/**
 * To make it short, composition and piping are almost the same, 
 * the only difference being the execution order; 
 * If the functions are executed from left to right, it's a pipe, on the other hand, 
 * if the functions are executed from right to left it's called compose.
 */

/**
 * 
 * @param  {...any} fns 
 * (...fns) - This is an example of using the rest parameter in JavaScript.
 *  It allows you to pass an arbitrary number of arguments to the function
 *  and collects them into an array named fns. In this context, fns is an array of functions that you want to compose.
 * @returns 
 */
const compose = (...fns) => (initialVal) =>
  fns.reduceRight((val, fn) => fn(val), initialVal);

// create our single responsibility functions
const sayLoudly = (string) => {
  return string.toUpperCase();
};

const exclaim = (string) => {
  return string + "!!";
};

// compose our single responsibility functions into a single one

const shout = compose(sayLoudly, exclaim);

console.log(exclaim("crumbs"));

// crumbs!!

console.log(shout("crumbs"));

// CRUMBS!!

const add5 = (x) => x + 5;
const double = (x) => x * 2;
const composedFunction = compose(add5, double);

const result = composedFunction(10); // This would first double 10 (20) and then add 5 (25).
console.log(result); // Output: 25
