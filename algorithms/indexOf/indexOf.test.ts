import { indexOf } from './indexOf';

describe('indexOf', () => {
  test('should return 0', () => {
    expect(indexOf('hello world', 'a')).toBe(-1);
  });

  test('should return 0', () => {
    expect(indexOf('abcdefghijklmnop', 'fghi')).toBe(5);
  });

  test('should return 0', () => {
    expect(indexOf('hello world', 'hello')).toBe(0);
  });

  test('should return 6', () => {
    expect(indexOf('hello world', 'world')).toBe(6);
  });
});
