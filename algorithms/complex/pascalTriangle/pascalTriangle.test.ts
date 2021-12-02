import { pascalTriangle } from './pascalTriangle';

xdescribe('pascalTriangle', () => {
  test('should return X', () => {
    expect(pascalTriangle(3)).toBe([1,2,1]);
  });
});
