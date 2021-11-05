import { firstNonRepeatingCharacter } from './firstNonRepeatingCharacter';

xdescribe('firstNonRepeatingCharacter', () => {
  test('should return b', () => {
    expect(firstNonRepeatingCharacter('aaabcccdeeef')).toBe('b');
  });

  test('should return c', () => {
    expect(firstNonRepeatingCharacter('abcbad')).toBe('b');
  });

  test('should return _', () => {
    expect(firstNonRepeatingCharacter('abcabcabc')).toBe('_');
  });
});
