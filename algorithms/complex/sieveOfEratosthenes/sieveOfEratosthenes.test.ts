import { sieveOfEratosthenes } from './sieveOfEratosthenes';

xdescribe('sieveOfEratosthenes', () => {
  test('should return one prime number', () => {
    expect(sieveOfEratosthenes(1)).toBe([2]);
  });

  test('should return 10 prime numbers', () => {
    const primes: number[] = sieveOfEratosthenes(10);
    expect(primes.length).toBe(10);
    expect(primes).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
