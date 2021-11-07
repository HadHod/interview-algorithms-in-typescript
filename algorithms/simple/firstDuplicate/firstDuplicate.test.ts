import { firstDuplicate } from './firstDuplicate';

describe('firstDuplicate', () => {
  test('should return a', () => {
    expect(firstDuplicate('aaabcccdeeef')).toBe('a');
  });

  test('should return a', () => {
    expect(firstDuplicate('aba')).toBe('a');
  });

  test('should return b', () => {
    expect(firstDuplicate('abcbd')).toBe('b');
  });

  test('should return _', () => {
    expect(firstDuplicate('abcdefghij')).toBe('_');
  });

  test('should return _ for empty string', () => {
    expect(firstDuplicate('')).toBe('_');
  });
});
