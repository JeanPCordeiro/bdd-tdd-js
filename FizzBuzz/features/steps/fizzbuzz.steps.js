const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const fizzbuzz = require('../../fizzbuzz');

When('I input the number {int}', function (number) {
    this.result = fizzbuzz(number);
});
  
Then('the result should be {string}', function (expectedResult) {
    expect(this.result).to.equal(expectedResult);
});
