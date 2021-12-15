export function pascalTriangle(level: number): number[] {
  if (level < 1) {
    return [];
  }

  const generatePascal: (l: number[]) => number[] = (l: number[]) => {
    if (l.length === 0 || l.length === 1) {
      return [];
    }

    const [head, ...rest] = l;
    return [head + rest[0], ...generatePascal(rest)];
  }

  const run: any = (lvl: number, result: number[]) => {
    if (lvl === 1) {
      return result;
    }
    return run(lvl - 1, [1, ...generatePascal(result), 1]);
  }

  return run(level, [1]);
}
