import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  test('should return 1', () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11, 13], 3)).toBe(1);
  });

  test('should return 0 for one number in array', () => {
    expect(binarySearch([10], 10)).toBe(0);
  });

  test('should return -1 for empty array', () => {
    expect(binarySearch([], 2)).toBe(-1);
  });

  test('should return -1', () => {
    expect(binarySearch([7, 8, 9], 1)).toBe(-1);
  });
});
