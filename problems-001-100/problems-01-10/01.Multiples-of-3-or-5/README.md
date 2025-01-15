# Multiples of 3 or 5

## Problem Statement

### Problem 1: Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

---

## Detailed Explanation

### 1. Understanding Natural Numbers

Natural numbers are the positive integers starting from 1, i.e., {1, 2, 3, 4, ...}. This problem focuses on numbers below 1000.

---

### 2. What Are Multiples?

A number is a multiple of another number if it can be expressed as the product of that number and an integer. For instance:

-   **Multiples of 3:** {3, 6, 9, 12, ...}
-   **Multiples of 5:** {5, 10, 15, 20, ...}

The problem requires identifying numbers below 1000 that are divisible by **3 or 5**.

---

### 3. Identifying Relevant Multiples

We need to determine numbers divisible by either 3 or 5:

-   Numbers divisible by 3 include: {3, 6, 9, 12, ...}
-   Numbers divisible by 5 include: {5, 10, 15, 20, ...}

Combining these sets gives all numbers divisible by 3 or 5, ensuring no duplicates.

---

### 4. Handling Overlapping Multiples

Some numbers are divisible by both 3 and 5. For example:

-   **Multiples of both 3 and 5:** {15, 30, 45, ...} (these are multiples of 15).

To avoid double-counting these overlapping multiples, we use the **principle of inclusion and exclusion** in mathematics:

1. Add the sum of multiples of 3.
2. Add the sum of multiples of 5.
3. Subtract the sum of multiples of 15.

---

### 5. Summation of Multiples

The goal is to compute the sum efficiently. For instance, for numbers below 10:

-   Multiples of 3: {3, 6, 9} (sum = 18)
-   Multiples of 5: {5} (sum = 5)
-   Total: 18 + 5 = 23

For numbers below 1000, the same logic applies:

1. Compute the sum of multiples of 3 below 1000.
2. Compute the sum of multiples of 5 below 1000.
3. Subtract the sum of multiples of 15 to avoid double-counting.

---

### 6. Output

The final result will be a single number representing the sum of all multiples of 3 or 5 below 1000.

---

## Key Concepts Utilized

-   Arithmetic sequences
-   Principle of inclusion and exclusion
-   Efficient computation for large ranges

This problem is an excellent example of using mathematical reasoning and computational efficiency.

## Solution

The solution is implemented in the file [`Solution`](./Multiples-of-3-or-5.js). You can find the detailed logic and implementation in the file. Run the file using Node.js or in browser to compute the desired result.
