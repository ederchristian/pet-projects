/*
  FizzBuzz Challenge

  Write a lib that get a number and:
  
  for multiples of three print 'Fizz' instead of the number;
  for the multiples of five print 'Buzz'; and
  for numbers which are multiples of both three and five print 'FizzBuzz'.
*/

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});
