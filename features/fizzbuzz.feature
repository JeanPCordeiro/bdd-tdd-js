Feature: FizzBuzz
  As a user playing the FizzBuzz game
  I want to input a number and receive the correct response
  So that I can follow the rules of the game accurately

  # Rule 1: Return the number itself if not divisible by 3 or 5
  Scenario: Input a non-multiple of 3 or 5
    When I input the number 1
    Then the result should be "1"

  # Rule 2: Return "Fizz" for multiples of 3
  Scenario: Input a multiple of 3 (but not 5)
    When I input the number 3
    Then the result should be "Fizz"

  # Rule 3: Return "Buzz" for multiples of 5
  Scenario: Input a multiple of 5 (but not 3)
    When I input the number 5
    Then the result should be "Buzz"

  # Rule 4: Return "FizzBuzz" for multiples of both 3 and 5
  Scenario: Input a multiple of 15
    When I input the number 15
    Then the result should be "FizzBuzz"

  # Edge Cases (Optional) Because 0 is divisible by any number
  Scenario: Input zero
    When I input the number 0
    Then the result should be "FizzBuzz"  

  # Parameterized Examples (Covers multiple cases efficiently)
  Scenario Outline: Check FizzBuzz rules for various numbers
    When I input the number <number>
    Then the result should be <result>

    Examples:
      | number | result     |
      | 2      | "2"       |  # Non-multiple
      | 6      | "Fizz"    |  # Multiple of 3
      | 10     | "Buzz"    |  # Multiple of 5
      | 30     | "FizzBuzz"|  # Multiple of 15
      | 0      | "FizzBuzz"|  # Multiple of 15      
      | -3     | "Fizz"    |  # Negative number (optional edge case)