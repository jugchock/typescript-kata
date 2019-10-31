import {
  forTest,
  isPalindromeFor
} from './index';

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
