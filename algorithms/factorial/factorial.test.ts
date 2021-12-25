import { factorial, factorialWhileLoop } from './factorial';

describe('factorial', () => {
  test('should return 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorialWhileLoop(0)).toBe(1);
  });

  test('should return 120', () => {
    expect(factorial(5)).toBe(120);
    expect(factorialWhileLoop(5)).toBe(120);
  });

  test('should return 40320', () => {
    expect(factorial(8)).toBe(40320);
    expect(factorialWhileLoop(8)).toBe(40320);
  });

  test('should return -1', () => {
    expect(factorial(-8)).toBe(-1);
    expect(factorialWhileLoop(-8)).toBe(-1);
  });
});
