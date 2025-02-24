const fizzbuzz = require('../fizzbuzz');

test('returns number for zero', () => {
    expect(fizzbuzz(0)).toBe('FizzBuzz');
  });

test('returns number for non-multiples', () => {
  expect(fizzbuzz(1)).toBe('1');
  expect(fizzbuzz(2)).toBe('2');
});

test('returns "Fizz" for multiples of 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
  expect(fizzbuzz(6)).toBe('Fizz');
});

test('returns "Buzz" for multiples of 5', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
  expect(fizzbuzz(10)).toBe('Buzz');
});

test('returns "FizzBuzz" for multiples of 15', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});