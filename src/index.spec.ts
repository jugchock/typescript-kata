import {
  add,
  forTest,
  ifTest,
  isPalindromeFor,
  isPalindromeRecursive,
  returnValue,
  switchTest,
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

describe('Simple for test', () => {
  it('should return "testtest"', () => {
    const result = forTest('test', 2);
    expect(result).toBe('testtest');
  });
});

describe('Palindrome for test', () => {
  it('should return true', () => {
    expect(isPalindromeFor('')).toBe(true);
    expect(isPalindromeFor('a')).toBe(true);
    expect(isPalindromeFor('aa')).toBe(true);
    expect(isPalindromeFor('aba')).toBe(true);
    expect(isPalindromeFor('abba')).toBe(true);
    expect(isPalindromeFor('abccba')).toBe(true);
  });

  it('should return false', () => {
    expect(isPalindromeFor('ab')).toBe(false);
    expect(isPalindromeFor('abc')).toBe(false);
    expect(isPalindromeFor('abca')).toBe(false);
    expect(isPalindromeFor('abcdba')).toBe(false);
  });
});

describe('Palindrome recursive test', () => {
  it('should return true', () => {
    expect(isPalindromeRecursive('')).toBe(true);
    expect(isPalindromeRecursive('a')).toBe(true);
    expect(isPalindromeRecursive('aa')).toBe(true);
    expect(isPalindromeRecursive('aba')).toBe(true);
    expect(isPalindromeRecursive('abba')).toBe(true);
    expect(isPalindromeRecursive('abccba')).toBe(true);
  });

  it('should return false', () => {
    expect(isPalindromeRecursive('ab')).toBe(false);
    expect(isPalindromeRecursive('abc')).toBe(false);
    expect(isPalindromeRecursive('abca')).toBe(false);
    expect(isPalindromeRecursive('abcdba')).toBe(false);
  });
});

// describe('Class test', () => {

// })