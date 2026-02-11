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
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
