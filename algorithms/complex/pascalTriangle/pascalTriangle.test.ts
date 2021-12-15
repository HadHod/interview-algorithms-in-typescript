import { pascalTriangle } from './pascalTriangle';

describe('pascalTriangle', () => {
  test('should return correct for level 0', () => {
    expect(pascalTriangle(0)).toStrictEqual([]);
  });

  test('should return correct for level 3', () => {
    expect(pascalTriangle(3)).toStrictEqual([1, 2, 1]);
  });

  test('should return correct for level 10', () => {
    expect(pascalTriangle(10)).toStrictEqual([1, 9, 36, 84, 126, 126, 84, 36, 9, 1]);
  });
});
