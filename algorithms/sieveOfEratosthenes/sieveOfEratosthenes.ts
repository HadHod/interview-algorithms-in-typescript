export function sieveOfEratosthenes(primesToNumber: number): number[] {
  const numbers: boolean[] = (new Array(primesToNumber + 1)).fill(true).fill(false, 0, 2);

  for (let i: number = 2; i <= Math.sqrt(primesToNumber); i++) {
    for (let j: number = 2; i * j <= primesToNumber; j++) {
      numbers[i * j] = false;
    }
  }

  return numbers.reduce((acc: number[], current: boolean, index: number) => {
    if (current) {
      return [...acc, index];
    }
    return acc;
  }, []);
}
