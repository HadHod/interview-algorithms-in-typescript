export function firstDuplicate(word: string): string {
  for (let i=0; i<word.length; i++) {
    const char: string = word.charAt(i);
    for (let j=i+1; j<word.length; j++) {
      if (char === word.charAt(j)) {
        return char;
      }
    }
  }

  return '_';
}
