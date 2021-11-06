import { depthFirstSearch } from './depthFirstSearch';

xdescribe('depthFirstSearch', () => {
  test('should return X', () => {
    expect(depthFirstSearch('test')).toBe('test');
  });
});
