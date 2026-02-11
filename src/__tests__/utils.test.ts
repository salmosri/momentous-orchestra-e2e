import { describe, it, expect } from 'vitest';
import { greet, add, multiply, factorial } from '../utils.js';

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

  it('calculates factorial of positive integers', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
    expect(factorial(10)).toBe(3628800);
  });

  it('throws error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
    expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
  });
});
