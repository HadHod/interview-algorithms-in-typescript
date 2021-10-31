import { longestWord } from './longestWord';

describe('factorial', () => {
  test('should return 0', () => {
    expect(longestWord('')).toBe(0);
  });

  test('should return 0', () => {
    expect(longestWord('x')).toBe(1);
  });

  test('should return 0', () => {
    expect(longestWord('Some long sententce test')).toBe(9);
  });

  test('should return 0 for sentence with new line', () => {
    expect(longestWord('Some long\nsententce test')).toBe(9);
  });

  test('should return 0 for sentence with multiple spaces', () => {
    expect(longestWord('Some long sententce     test')).toBe(9);
  });
});
