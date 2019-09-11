import { test } from './index';

describe('Index', () => {
  it('should return the value passed in', () => {
    const result = test('foo');
    expect(result).toBe('foo');
  });
});
