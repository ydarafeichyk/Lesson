const { expect } = require('chai');
const { Calculator } = require('../func');

const calculator = new Calculator();

describe(`Check add function`, function () {
  it(`correctly calculates the addition of positive integers 12345678901112 and 1`, async () => {
    const result = calculator.add(12345678901112, 1);
    expect(result).to.equal(12345678901113);
  });
  it(`correctly calculates the addition of fractional numbers 3.6 and 5.2`, async () => {
    const result = calculator.add(3.6, 5.2);
    expect(result).to.equal(8.8);
  });
  it(`correctly calculates the addition of fractional and integer 4.6 and 2000`, async () => {
    const result = calculator.add(4.6, 2000);
    expect(result).to.equal(2004.6);
  });
  it(`correctly calculates the addition of negative numbers -9 and -50`, async () => {
    const result = calculator.add(-9, -50);
    expect(result).to.equal(-59);
  });
  it(`correctly calculates the addition of positive and negative numbers 200 and -50`, async () => {
    const result = calculator.add(200, -50);
    expect(result).to.equal(150);
  });
  it(`add function should not return result when only one parameter 200 is used`, async () => {
    const result = calculator.add(200);
    expect(result).to.equal(false);
  });
  it(`indicates failure when a string is used instead of a number 'a' and 10`, async () => {
    const result = calculator.add('a', 10);
    expect(result).to.equal(false);
  });
  it(`indicates failure when two strings is used instead of a numbers 'a' and 'b'`, async () => {
    const result = calculator.add('a', 'b');
    expect(result).to.equal(false);
  });
  it(`indicates failure when symbol is used instead of a number $ and 15863489`, async () => {
    const result = calculator.add($, 15863489);
    expect(result).to.equal(false);
  });
});
describe(`Check myltiply function`, function () {
  it(`correctly calculates the multiplication of positive integers 758694253681 and 0`, async () => {
    const result = calculator.multiply(758694253681, 0);
    expect(result).to.equal(0);
  });
  it(`correctly calculates the multiplication of fractional numbers 10.6 and 20.36`, async () => {
    const result = calculator.multiply(10.6, 20.36);
    expect(result).to.equal(215.816);
  });
  it(`correctly calculates the multiplication of fractional and integer 14.6 and 20`, async () => {
    const result = calculator.multiply(14.6, 20);
    expect(result).to.equal(292);
  });
  it(`correctly calculates the multiplication of negative numbers -90 and -50`, async () => {
    const result = calculator.multiply(-90, -50);
    expect(result).to.equal(4500);
  });
  it(`correctly calculates the multiplication of positive and negative numbers 350 and -50`, async () => {
    const result = calculator.multiply(350, -50);
    expect(result).to.equal(-17500);
  });
  it(`myltiply function should not return result when only one parameter 170 is used`, async () => {
    const result = calculator.multiply(170);
    expect(result).to.equal(false);
  });
});
describe(`Check subtraction function`, function () {
  it(`correctly calculates the subtraction of positive integers 9 and 500000000000`, async () => {
    const result = calculator.subtraction(9, 500000000000);
    expect(result).to.equal(-499999999991);
  });
  it(`correctly calculates the subtraction of fractional numbers 150.6 and 120.2`, async () => {
    const result = calculator.subtraction(150.6, 120.2);
    expect(result).to.equal(30.4);
  });
  it(`correctly calculates the subtraction of fractional and integer 15.666 and 2000000`, async () => {
    const result = calculator.subtraction(15.666, 2000000);
    expect(result).to.equal(-1999984.334);
  });
  it(`correctly calculates the subtraction of negative numbers -170 and -50`, async () => {
    const result = calculator.subtraction(-170, -50);
    expect(result).to.equal(-120);
  });
  it(`correctly calculates the subtraction of positive and negative numbers 350 and -50`, async () => {
    const result = calculator.subtraction(350, -50);
    expect(result).to.equal(400);
  });
  it(`subtraction function should not return result when only one parameter 3500 is used `, async () => {
    const result = calculator.subtraction(3500);
    expect(result).to.equal(false);
  });
});
describe(`Check division function`, function () {
  it(`correctly calculates the division of positive integers 9 and 50000`, async () => {
    const result = calculator.divide(9, 50000);
    expect(result).to.equal(0.00018);
  });
  it(`correctly calculates the division of fractional numbers 20.2 and 2.5`, async () => {
    const result = calculator.divide(20.2, 2.5);
    expect(result).to.equal(8.08);
  });
  it(`correctly calculates the division of fractional and integer 20.6 and 2000`, async () => {
    const result = calculator.divide(20.6, 2000);
    expect(result).to.equal(0.0103);
  });
  it(`correctly calculates the division of negative numbers -160 and -80`, async () => {
    const result = calculator.divide(-160, -80);
    expect(result).to.equal(2);
  });
  it(`correctly calculates the division of positive and negative numbers -370 and -50`, async () => {
    const result = calculator.divide(370, -50);
    expect(result).to.equal(-7.4);
  });
  it(`indicates failure when division by 0`, async () => {
    const result = calculator.divide(350, 0);
    expect(result).to.equal('На ноль делить нельзя');
  });
  it(`division function should not return result when only one parameter 550 is used `, async () => {
    const result = calculator.divide(550);
    expect(result).to.equal(false);
  });
});
describe(`Check exponentiation function`, function () {
  it(`correctly calculates the exponentiation of positive integer 250`, async () => {
    const result = calculator.exponentiation(250);
    expect(result).to.equal(62500);
  });
  it(`correctly calculates the exponentiation of fractional number 1.111`, async () => {
    const result = calculator.exponentiation(1, 111);
    expect(result).to.equal(1.234321);
  });
  it(`correctly calculates the exponentiation of negative numbers -1`, async () => {
    const result = calculator.exponentiation(-1);
    expect(result).to.equal(1);
  });
  it(`correctly calculates the exponentiation of 0`, async () => {
    const result = calculator.exponentiation(0);
    expect(result).to.equal(0);
  });
});
