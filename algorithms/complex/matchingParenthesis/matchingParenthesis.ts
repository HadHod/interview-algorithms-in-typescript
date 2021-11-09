export function matchingParethesis(word: string): boolean {
  return word.split('').filter(c => ['{', '}'].includes(c)).reduce((stack: string[], char: string) => {
    if (stack.length === 0) {
      return [char];
    }

    return stack[stack.length - 1] === char ? [...stack, char] : stack.slice(0, -1);
  }, []).length === 0;
}
