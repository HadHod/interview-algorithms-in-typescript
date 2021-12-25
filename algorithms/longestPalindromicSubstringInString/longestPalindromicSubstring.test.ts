import { longestPalindromicSubstring } from './longestPalindromicSubstring';

describe('longestPalindromicSubstring', () => {
  test('should return a', () => {
    expect(longestPalindromicSubstring('a')).toBe('a');
  });

  test('should return geeksskeeg', () => {
    expect(longestPalindromicSubstring('cbbd')).toBe('bb');
  });

  test('should return geeksskeeg', () => {
    expect(longestPalindromicSubstring('babad')).toBe('bab');
  });
});
