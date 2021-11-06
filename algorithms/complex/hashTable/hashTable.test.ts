import { hashTable } from './hashTable';

xdescribe('hashTable', () => {
  test('should return X', () => {
    expect(hashTable('test')).toBe('test');
  });
});
