import { describe, it, expect } from 'vitest';
import { greet, add, multiply, factorial, clamp, isPalindrome } from '../utils.js';

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

  it('calculates factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('calculates factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('calculates factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('calculates factorial of 10', () => {
    expect(factorial(10)).toBe(3628800);
  });

  it('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
    expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
  });

  it('clamps value below minimum', () => {
    expect(clamp(5, 10, 20)).toBe(10);
  });

  it('clamps value above maximum', () => {
    expect(clamp(25, 10, 20)).toBe(20);
  });

  it('returns value within range', () => {
    expect(clamp(15, 10, 20)).toBe(15);
  });

  it('returns min when value equals min', () => {
    expect(clamp(10, 10, 20)).toBe(10);
  });

  it('returns max when value equals max', () => {
    expect(clamp(20, 10, 20)).toBe(20);
  });

  it('handles min equal to max', () => {
    expect(clamp(5, 10, 10)).toBe(10);
    expect(clamp(15, 10, 10)).toBe(10);
    expect(clamp(10, 10, 10)).toBe(10);
  });

  it('returns true for empty string palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('returns true for single character palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('Z')).toBe(true);
  });

  it('returns true for simple palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('noon')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  it('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('test')).toBe(false);
  });

  it('handles mixed case palindromes', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('Noon')).toBe(true);
    expect(isPalindrome('LeVeL')).toBe(true);
  });

  it('handles mixed case non-palindromes', () => {
    expect(isPalindrome('Hello')).toBe(false);
    expect(isPalindrome('WoRlD')).toBe(false);
  });

  it('returns true for even-length palindromes', () => {
    expect(isPalindrome('abba')).toBe(true);
    expect(isPalindrome('toot')).toBe(true);
  });

  it('returns true for odd-length palindromes', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
  });
});
