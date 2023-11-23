const isMultipleOf3 = input => (input % 3) === 0;
const isMultipleOf5 = input => (input % 5) === 0;
const isMultipleOf5And3 = input => isMultipleOf3(input) && isMultipleOf5(input);

const outputFizz = () => "Fizz"; // _.constant("Fizz")
const outputBuzz = () => "Buzz";
const outputFizzBuzz = () => "FizzBuzz"; 
const otherwise = () => true; // _.stubTrue
const outputNumber = number => number // _.identity 


const shouldFireFizzBuzz = input => isMultipleOf3(input) && isMultipleOf5(input);
const shouldFireFizz = input => isMultipleOf3(input) && !isMultipleOf5(input); 
// Bonus: const isNotMultipleOf5 = _.negate(isMultipleOf5);
const shouldFireBuzz = input => isMultipleOf5(input) && !isMultipleOf3(input);
const shouldReturnInput = input => !isMultipleOf5(input) && !isMultipleOf3(input)


const fizzBuzz2 = _.cond([
    [shouldFireFizzBuzz, outputFizzBuzz],
    [shouldFireFizz, outputFizz],
    [shouldFireBuzz, outputBuzz],
    [shouldReturnInput, outputNumber ]
]);
