import { matchingParethesis } from './matchingParenthesis';

describe('matchingParethesis', () => {
  test('should return true for empty', () => {
    expect(matchingParethesis('')).toBe(true);
  });

  test('should return true for no parenthesis', () => {
    expect(matchingParethesis('test')).toBe(true);
  });

  test('should return true for simple example', () => {
    expect(matchingParethesis('{}')).toBe(true);
  });

  test('should return false for simple example', () => {
    expect(matchingParethesis('{')).toBe(false);
  });

  test('should return false', () => {
    expect(matchingParethesis('{{{{{{{{{{}}}}}}}}}')).toBe(false);
  });

  test('should return true', () => {
    expect(matchingParethesis('{{{{{{{{{{}}}}}}}}}}')).toBe(true);
  });

  test('should return true', () => {
    expect(matchingParethesis('{}{{}}{{{}}}{{{{}}}}{{{{{}}}}}')).toBe(true);
  });

  test('should return true for function implementation', () => {
    expect(matchingParethesis(`
    export function matchingParethesis(word: string): boolean {
      return word.split('').filter(c => ['{', '}'].includes(c)).reduce((stack: string[], char: string) => {
        if (stack.length === 0) {
          return [char];
        }

        return stack[stack.length - 1] === char ? [...stack, char] : stack.slice(0, -1);
      }, []).length === 0;
    }
    `)).toBe(true);
  });
});
