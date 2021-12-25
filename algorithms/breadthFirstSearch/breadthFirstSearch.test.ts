import { breadthFirstSearch } from './breadthFirstSearch';

xdescribe('breadthFirstSearch', () => {
  test('should return X', () => {
    expect(breadthFirstSearch('test')).toBe('test');
  });
});
