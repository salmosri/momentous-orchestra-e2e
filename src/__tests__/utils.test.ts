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
      expect(isPalindrome('5')).toBe(true);
    });

    it('returns true for simple palindromes', () => {
      expect(isPalindrome('aba')).toBe(true);
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('noon')).toBe(true);
    });

    it('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
      expect(isPalindrome('abc')).toBe(false);
    });

    it('handles mixed case (case-insensitive)', () => {
      expect(isPalindrome('Aba')).toBe(true);
      expect(isPalindrome('RaceCar')).toBe(true);
      expect(isPalindrome('NoOn')).toBe(true);
      expect(isPalindrome('Hello')).toBe(false);
    });

    it('ignores spaces and punctuation', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('race a car')).toBe(false);
      expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    it('handles strings with numbers', () => {
      expect(isPalindrome('12321')).toBe(true);
      expect(isPalindrome('a1b2b1a')).toBe(true);
      expect(isPalindrome('12345')).toBe(false);
    });

    it('handles strings with special characters only', () => {
      expect(isPalindrome('!!!')).toBe(true);
      expect(isPalindrome('   ')).toBe(true);
      expect(isPalindrome('!@#$%')).toBe(true);
    });
  });
});
