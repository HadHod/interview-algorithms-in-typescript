import { twoSum } from './twoSum';

describe('twoSum', () => {
  test('should return [3, 5]', () => {
    expect(twoSum([1, 3, 5, 2, 6, 8, 9], 10)).toStrictEqual([3, 5]);
  });

  test('should return [0, 2]', () => {
    expect(twoSum([1, 3, 2], 3)).toStrictEqual([0, 2]);
  });
});
