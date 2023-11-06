// Data Processing Pipelines

// Imagine you have an array of numbers, and you want to double each number,
//  filter out the even ones, and then find their sum.

const numbers = [1, 2, 3, 4, 5, 6];

const double = (num) => num * 2;
const isEven = (num) => num % 2 === 0;

const result = numbers
  .map(double)
  .filter(isEven)
  .reduce((acc, num) => acc + num, 0);

console.log(result); // 18