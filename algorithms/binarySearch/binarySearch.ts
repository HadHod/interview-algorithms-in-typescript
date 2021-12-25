// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(list: number[], element: number): number {
  if (list.length === 0) {
    return -1;
  }

  if (list[0] === element) {
    return 0;
  }

  let min: number = 0;
  let max: number = list.length - 1;

  while (min <= max) {
    const mid: number = Math.floor((max - min) / 2) + min;

    if (element === list[mid]) {
      return mid;
    }

    if (element < list[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}
