import {
  returnValue
} from './index';

describe('Return a value', () => {
  it('should return the value passed in', () => {
    const result = returnValue('foo');
    expect(result).toBe('foo');
  });

  it('should return value when undefined is passed in', () => {
    const result = returnValue(undefined);
    expect(result).toBe(undefined);
  });
});
