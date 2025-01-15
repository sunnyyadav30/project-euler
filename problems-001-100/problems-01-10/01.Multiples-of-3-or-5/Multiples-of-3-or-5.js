/**
 * Function to calculate the sum of all multiples of 3 or 5 below a given limit.
 * @param {number} limit - The upper bound (exclusive) for calculating multiples.
 * @returns {number} - The sum of all multiples of 3 or 5 below the limit.
 */
function sumOfMultiplesOf3and5(limit) {
	let sum = 0;
	for (let i = 0; i < limit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

// Calculate and log the result for multiples below 1000
const result = sumOfMultiplesOf3and5(1000);
console.log(`The sum of all multiples of 3 or 5 below 1000 is: ${result}`);

/**
 * Recursive function to calculate the sum of all multiples of 3 or 5 below a given limit.
 * @param {number} n - The current number being checked (starts with limit - 1).
 * @returns {number} - The sum of all multiples of 3 or 5 below the limit.
 */
function sumOfMultiplesOf3and5UsingRecursion(limit) {
	if (limit <= 0) {
		return 0; // Base case: If n is 0 or negative, return 0.
	}
	// Check if the current number is a multiple of 3 or 5.
	return (
		((limit - 1) % 3 === 0 || (limit - 1) % 5 === 0 ? limit - 1 : 0) +
		sumOfMultiplesOf3and5UsingRecursion(limit - 1)
	);
}

// Calculate and log the result for multiples below 1000
const resultOfRecursive = sumOfMultiplesOf3and5UsingRecursion(1000); // Start from 999, as the limit is exclusive
console.log(`The sum of all multiples of 3 or 5 below 1000 is: ${resultOfRecursive}`);
