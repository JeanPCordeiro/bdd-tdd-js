# BDD an TDD with JS
A BDD &amp; TDD playground !

### FizzBuzz game
```
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
```

### Loan Calculator
```
Feature: Simulation de prêt habitat

  Scenario Outline: Calculer les mensualités d'un prêt
    Given un montant de prêt de <montant> euros
    And un taux d'intérêt de <taux>%
    And une durée de prêt de <duree> ans
    When je calcule les mensualités
    Then les mensualités devraient être de <mensualites> euros

    Examples:
      | montant | taux | duree | mensualites |
      | 100000  | 5    | 20    | 659.96      |
      | 100000  | 7    | 20    | 775.30      |
      | 100000  | 5    | 10    | 1060.66     |
      | 200000  | 5    | 20    | 1319.91     |
      | 100000  | 3    | 20    | 554.60      |
```

### Run Tests

```bash
npx jest --rootDir .
npx cucumber-js
```
