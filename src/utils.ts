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
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * Comparison is case-insensitive and ignores non-alphanumeric characters.
 */
export function isPalindrome(str: string): boolean {
  // Handle empty string and single character cases
  if (str.length <= 1) {
    return true;
  }

  // Normalize: convert to lowercase and remove non-alphanumeric characters
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare normalized string with its reverse
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}
