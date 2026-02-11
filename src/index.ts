/**
 * Main entry point for the utility library.
 * Build 1770822256787-B
 *
 * This module serves as the public API for a collection of utility functions,
 * providing both string manipulation and basic mathematical operations. It acts
 * as a centralized export point, making it easy for consumers to import all
 * functionality from a single module.
 *
 * Exported functions:
 * - greet: Returns a personalized greeting message
 * - add: Performs addition of two numbers
 * - multiply: Performs multiplication of two numbers
 *
 * @module index
 * @example
 * import { greet, add, multiply } from './index.js';
 * console.log(greet('World')); // Hello, World!
 * console.log(add(2, 3));      // 5
 * console.log(multiply(4, 5)); // 20
 */
export { greet, add, multiply } from './utils.js';
