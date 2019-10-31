import {
  switchTest
} from './index';

describe('Switch test', () => {
  it('should return "bar"', () => {
    const result = switchTest('foo');
    expect(result).toBe('bar');
  });

  it('should return "two"', () => {
    const result = switchTest('one');
    expect(result).toBe('two');
  });

  it('should return "none"', () => {
    const result = switchTest('nothing');
    expect(result).toBe('none');
  });
});
