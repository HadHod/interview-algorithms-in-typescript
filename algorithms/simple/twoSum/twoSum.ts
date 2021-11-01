export function twoSum(numbers: number[], sum: number): [number, number] {
  const previousValues: { [key: number]: number } = {};
  for (let i=0; i<numbers.length; i++) {
    const neededValue: number = sum - numbers[i];
    const index: number = previousValues[neededValue];

    if (index !== undefined) {
      return [index, i];
    }

    previousValues[numbers[i]] = i;
  }

  return [-1, -1];
}
