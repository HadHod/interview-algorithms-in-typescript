import { factorialRecursive, factorialWhileLoop } from './factorial';

const testData: number[][] = [
  [-2, -1],
  [-1, -1],
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [4, 24],
  [5, 120],
  [6, 720],
  [7, 5040],
  [8, 40320],
  [9, 362880],
  [10, 3628800],
  [11, 39916800],
  [12, 479001600],
];

describe('factorial', () => {
  test.each(testData)('factorialRecursive(%i) === %i', (a, expected) => {
    expect(factorialRecursive(a)).toBe(expected);
  });

  test.each(testData)('factorialWhileLoop(%i) === %i', (a, expected) => {
    expect(factorialWhileLoop(a)).toBe(expected);
  });
});
