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

/**
 * Pads the start of a string to reach targetLen using padChar.
 */
export function padStart(str: string, targetLen: number, padChar: string): string {
  if (str.length >= targetLen) {
    return str;
  }
  const padLength = targetLen - str.length;
  return padChar.repeat(padLength) + str;
}
