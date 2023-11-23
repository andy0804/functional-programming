const isMultipleOf3 = input => (input % 3) === 0;
const isMultipleOf5 = input => (input % 5) === 0;
const isMultipleOf5And3 = input => isMultipleOf3(input) && isMultipleOf5(input);

const outputFizz = () => "Fizz"; // _.constant("Fizz")
const outputBuzz = () => "Buzz";
const outputFizzBuzz = () => "FizzBuzz"; 
const otherwise = () => true; // _.stubTrue
const outputNumber = number => number // _.identity 


const fizzBuzz1 = _.cond([
    [isMultipleOf5And3, outputFizzBuzz],
    [isMultipleOf3, outputFizz],
    [isMultipleOf5, outputBuzz],
    [otherwise, outputNumber ]
]);
