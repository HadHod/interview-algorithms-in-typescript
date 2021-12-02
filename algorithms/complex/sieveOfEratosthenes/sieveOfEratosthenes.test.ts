import { sieveOfEratosthenes } from './sieveOfEratosthenes';

xdescribe('sieveOfEratosthenes', () => {
  test('should return X', () => {
    expect(sieveOfEratosthenes(3)).toBe([1,2,1]);
  });
});
