// Leveraging Function Composition

// Function composition is like Lego for functions.
//  It involves combining simple functions to build more complex ones. This makes code modular and easier to reason about.

const add = (x, y) => x + y;
const square = (x) => x * x;

function compose(...functions) {
  return (input) => functions.reduceRight((acc, fn) => fn(acc), input);
}

const addAndSquare = compose(square, add);

console.log(addAndSquare(3, 4)); // 49