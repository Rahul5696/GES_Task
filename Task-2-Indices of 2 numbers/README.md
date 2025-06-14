# Indices of the two numbers

A simple JavaScript function to find two numbers in an array that add up to a given target.

### Parameters

- `nums` (Array of numbers): The list of integers to search through.
- `target` (Number): The target sum you want to find from two elements in the array.

---

### Returns

- An array of two integers representing the **indices** of the two elements in `nums` that add up to the target value.

---

## How It Works

The algorithm uses a **single-pass hash map** technique:
- It iterates through each element in the input array.
- For every element `num`, it calculates the **diff** as `target - num`.
- It then checks whether this diff is already in the hash map:
  - If yes, it returns the pair of indices: the index of the diff and the current index.
  - If not, it stores the current number with its index in the map.
- If no valid pair is found after the loop, it throws an error.

---

### Time Complexity

- **O(n)** time, where `n` is the number of elements in the array.
- **O(n)** space for the hash map storing visited elements.

---

## Usage

### 1. Clone or copy the code into a file (e.g., `index.js`).

### 2. Run it with Node.js:

```bash
node index.js
