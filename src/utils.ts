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
 * Truncates a string to maxLen characters, appending "..." if truncated.
 */
export function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen) + '...';
}
