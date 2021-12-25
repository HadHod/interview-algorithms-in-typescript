import { sieveOfEratosthenes } from './sieveOfEratosthenes';

describe('sieveOfEratosthenes', () => {
  test('should return empty list', () => {
    expect(sieveOfEratosthenes(1)).toStrictEqual([]);
    expect(sieveOfEratosthenes(0)).toStrictEqual([]);
  });

  test('should return one prime number', () => {
    expect(sieveOfEratosthenes(2)).toStrictEqual([2]);
  });

  test('should return 4 prime numbers', () => {
    const primes: number[] = sieveOfEratosthenes(10);
    expect(primes.length).toBe(4);
    expect(primes).toStrictEqual([2, 3, 5, 7]);
  });

  test('should return 10 prime numbers', () => {
    const primes: number[] = sieveOfEratosthenes(30);
    expect(primes.length).toBe(10);
    expect(primes).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
