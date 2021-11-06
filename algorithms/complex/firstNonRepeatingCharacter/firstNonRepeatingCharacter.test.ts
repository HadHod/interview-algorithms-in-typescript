import { firstNonRepeatingCharacter } from './firstNonRepeatingCharacter';

describe('firstNonRepeatingCharacter', () => {
  test('should return b', () => {
    expect(firstNonRepeatingCharacter('aaabcccdeeef')).toBe('b');
  });

  test('should return c', () => {
    expect(firstNonRepeatingCharacter('abcbad')).toBe('c');
  });

  test('should return _', () => {
    expect(firstNonRepeatingCharacter('abcabcabc')).toBe('_');
  });
});
