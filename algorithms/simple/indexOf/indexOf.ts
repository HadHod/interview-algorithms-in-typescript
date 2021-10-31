export function indexOf(sentence: string, word: string): number {
  for (let i=0; i<sentence.length; i++) {
    for (let j=0; j<word.length; j++) {
      if (sentence.charAt(i + j) !== word.charAt(j)) {
        break;
      }

      if (j === word.length - 1) {
        return i;
      }
    }
  }

  return -1;
}
