// https://en.wikipedia.org/wiki/Factorial

export function factorialRecursive(num: number): number {
  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    return -1;
  }

  return num * factorialRecursive(num - 1);
}

export function factorialWhileLoop(num: number): number {
  if (num < 0) {
    return -1;
  }

  let result = 1;
  while (num--) {
    result *= (num + 1);
  }
  return result;
}
