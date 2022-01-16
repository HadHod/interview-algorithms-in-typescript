import { firstDuplicate } from './firstDuplicate';

const testData: string[][] = [
  ['aaabcccdeeef', 'a'],
  ['aba', 'a'],
  ['abcbd', 'b'],
  ['abcdefghij', '_'],
  ['', '_'],
];

describe('firstDuplicate', () => {
  test.each(testData)('firstDuplicate(%i) === %i', (a, expected) => {
    expect(firstDuplicate(a)).toBe(expected);
  });
});
