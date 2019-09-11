import { returnValue, add, ifTest, switchTest, forTest } from './index';

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

describe('Add two values', () => {
  it('should add two values together', () => {
    const sum = add(7, 2);
    expect(sum).toBe(9);
  });
});

describe('If test', () => {
  it('should return true', () => {
    const result = ifTest('true');
    expect(result).toBe(true);
  });

  it('should return false', () => {
    const result = ifTest('false');
    expect(result).toBe(false);
  });
});

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

describe('For test', () => {
  it('should return "testtest"', () => {
    const result = forTest('test', 2);
    expect(result).toBe('testtest');
  });
});
