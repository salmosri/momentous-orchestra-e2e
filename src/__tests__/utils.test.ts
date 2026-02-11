import { describe, it, expect } from 'vitest';
import { greet, add, multiply, isPalindrome } from '../utils.js';

describe('utils', () => {
  it('greets by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  describe('isPalindrome', () => {
    it('returns true for empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    it('returns true for single character', () => {
      expect(isPalindrome('a')).toBe(true);
      expect(isPalindrome('Z')).toBe(true);
    });

    it('returns true for simple palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('noon')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
    });

    it('returns true for mixed case palindromes', () => {
      expect(isPalindrome('Racecar')).toBe(true);
      expect(isPalindrome('RaceCar')).toBe(true);
      expect(isPalindrome('NoOn')).toBe(true);
      expect(isPalindrome('A')).toBe(true);
    });

    it('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
      expect(isPalindrome('abcd')).toBe(false);
    });

    it('returns true for even-length palindromes', () => {
      expect(isPalindrome('abba')).toBe(true);
      expect(isPalindrome('ABBA')).toBe(true);
    });

    it('returns true for odd-length palindromes', () => {
      expect(isPalindrome('aba')).toBe(true);
      expect(isPalindrome('radar')).toBe(true);
    });

    it('handles multiple character repetitions', () => {
      expect(isPalindrome('aaa')).toBe(true);
      expect(isPalindrome('aaaa')).toBe(true);
    });
  });
});
