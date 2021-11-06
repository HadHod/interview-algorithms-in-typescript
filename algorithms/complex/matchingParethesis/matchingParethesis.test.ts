import { matchingParethesis } from './matchingParethesis';

xdescribe('matchingParethesis', () => {
  test('should return X', () => {
    expect(matchingParethesis('test')).toBe('test');
  });
});
