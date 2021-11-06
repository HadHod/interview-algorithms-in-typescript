import { firstDuplicate } from './firstDuplicate';

xdescribe('firstDuplicate', () => {
  test('should return b', () => {
    expect(firstDuplicate('aaabcccdeeef')).toBe('a');
  });

  test('should return c', () => {
    expect(firstDuplicate('abcbad')).toBe('b');
  });

  test('should return _', () => {
    expect(firstDuplicate('abcabcabc')).toBe('_');
  });
});
