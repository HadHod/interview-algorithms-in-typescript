export function longestPalindromicSubstring(word: string): string {
  const palindroms: boolean[][] = new Array(word.length);
  for (let i=0; i<word.length; i++) {
    palindroms[i] = new Array(word.length);
  }

  let maxLength: number = 1;
  for (let i=0; i<word.length; i++) {
    palindroms[i][i] = true;
  }

  let start: number = 0;
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] == word[i + 1]) {
      palindroms[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= word.length; k++) {
    for (let i = 0; i < word.length - k + 1; i++) {
      let j = i + k - 1;

      if (palindroms[i + 1][j - 1] && word[i] == word[j]) {
        palindroms[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  return word.substring(start, start + maxLength);
}
