/**
 * @returns {number} Returns length of longest word in the sentence
 */
export function longestWord(sentence: string): number {
  return sentence.split(/\s+/).reduce((acc: number, word: string) => word.length > acc ? word.length : acc, 0);
}
