function fizzbuzz(number) {
    if (number === 0) return 'FizzBuzz'; // Edge case (optional)
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number.toString(); // Convert numbers to strings
  }
  
  module.exports = fizzbuzz;