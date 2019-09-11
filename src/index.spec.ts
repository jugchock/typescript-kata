import { test } from './index';

describe('Index', () => {
  it('should return the value passed in', () => {
    const result = test('foo');
    expect(result).toBe('foo');
  });

  it('should return value when undefined is passed in', () => {
    const result = test(undefined);
    expect(result).toBe(undefined);
  });
});
