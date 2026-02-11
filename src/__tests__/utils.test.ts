import { describe, it, expect } from 'vitest';
import { greet, add, multiply, clamp } from '../utils.js';

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

  it('clamps value below min to min', () => {
    expect(clamp(5, 10, 20)).toBe(10);
  });

  it('clamps value above max to max', () => {
    expect(clamp(25, 10, 20)).toBe(20);
  });

  it('returns value when within range', () => {
    expect(clamp(15, 10, 20)).toBe(15);
  });

  it('returns min when value equals min', () => {
    expect(clamp(10, 10, 20)).toBe(10);
  });

  it('returns max when value equals max', () => {
    expect(clamp(20, 10, 20)).toBe(20);
  });

  it('clamps negative numbers', () => {
    expect(clamp(-5, -10, 0)).toBe(-5);
    expect(clamp(-15, -10, 0)).toBe(-10);
    expect(clamp(5, -10, 0)).toBe(0);
  });

  it('clamps with zero bounds', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(5, 0, 10)).toBe(5);
  });
});
