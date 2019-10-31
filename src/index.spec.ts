import {
  isPalindromeRecursive
} from './index';

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
