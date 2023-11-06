// Exploring Higher-Order Functions

// Higher-order functions are functions that can accept other functions 
// as arguments or return them. They open the door to elegant and concise code.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/**
 * In this example, the multiplier function is a higher-order function
 *  that returns another function based on the factor provided.
 */