// Key Principles and Concepts

// Pure Functions: 
// These gems of functional programming always produce the same output 
// for the same input and have no side effects. Let's take an example:

// Impure function
let total = 0;
function addToTotal(amount) {
  total += amount;
  return total;
}

// Pure function
function add(a, b) {
  return a + b;
}
// In the above code, the addToTotal function modifies the external state (total), 
// making it impure. 
// On the other hand, the add function is pure because it doesn't rely on 
// an external state and returns a consistent result for the same inputs.