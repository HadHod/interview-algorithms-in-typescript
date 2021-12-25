export function firstNonRepeatingCharacter(word: string): string {
  const previous: string[] = [];
  for (let i=0; i<word.length; i++) {
    const char: string = word.charAt(i);
    if (!previous.includes(char) && !word.slice(i + 1).includes(char)) {
      return char;
    }
    previous.push(char);
  }

  return '_';
}
