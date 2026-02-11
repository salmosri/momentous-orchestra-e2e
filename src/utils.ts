/**
 * Copyright (c) 2026. All rights reserved.
 * Build 1770822256787-A
 */

/**
 * Greets a person by name.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Adds two numbers.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Multiplies two numbers.
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @throws {Error} If n is negative
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Clamps a value between a minimum and maximum bound.
 */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * Case-insensitive comparison.
 */
export function isPalindrome(str: string): boolean {
  // Normalize the string to lowercase for case-insensitive comparison
  const normalized = str.toLowerCase();

  // Compare characters from both ends moving inward
  const len = normalized.length;
  for (let i = 0; i < len / 2; i++) {
    if (normalized[i] !== normalized[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a maximum length, appending "..." if truncated.
 */
export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen) + '...';
}

/**
 * Pads the start of a string to reach a target length.
 */
export function padStart(str: string, targetLen: number, padChar: string): string {
  if (str.length >= targetLen) {
    return str;
  }
  const padLength = targetLen - str.length;
  const padding = padChar.repeat(Math.ceil(padLength / padChar.length)).slice(0, padLength);
  return padding + str;
}
