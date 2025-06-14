# Longest Increasing Subsequence (LIS)

This project provides a JavaScript implementation to compute the **length** of the Longest Increasing Subsequence (LIS) in a given array of integers. The solution is optimized to run in **O(n log n)** time using a binary search approach.

---

### Parameters

- `nums` (Array of numbers): An array of integers to analyze.

### Returns

- A number representing the **length** of the longest increasing subsequence.

---

## How It Works

The algorithm uses the **Patience Sorting technique** with a `lis` array to simulate stacks:
- `lis[i]` stores the **smallest possible tail** value for all increasing subsequences of length `i + 1`.
- For each number in the input array, a **binary search** is used to find its correct position in `lis`.
- If the number can extend the subsequence, it is added.
- If it can replace an element to form a smaller ending value, it replaces it.

### Time Complexity

- **O(n log n)**, where `n` is the length of the input array.

---
## Usage

### 1. Clone or copy the code into a file (e.g., `index.js`).

### 2. Run it with Node.js:

```bash
node index.js